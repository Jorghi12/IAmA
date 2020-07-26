import { PersonModel, QuestionModel } from './model';

export default {
    submitVote: (req, res, next) => {
        var questionID = req.params.question_id;
        var vote = req.params.my_vote;

        QuestionModel.findById(questionID, function (err, questionObject) { 
            if (err) { 
                console.log(err); 
                return res.status(401).send(err || 'Invalid Question')
            } 
            else
            { 
                if (vote == "real"){
                    questionObject.votes.votedReal +=1;
                }
                else if (vote == "fake"){
                    questionObject.votes.votedFake +=1;
                }
                questionObject.votes.total +=1;
                questionObject.save();

                res.json({
                    "correct": vote == questionObject.isReal,
                    "isReal": questionObject.isReal, 
                    "votes": questionObject.votes, 
                    "source": questionObject.source
                });
                next();
            } 
        });
    },

    submitQuestion: (req, res, next) => {
        var person_name = req.param('person_name')
        var question = req.param('question')
        var answer = req.param('answer')

        PersonModel.findOne({name: person_name}, function (err, person){
            if (err) { 
                console.log(err); 
                return res.status(401).send(err || 'Invalid Person')
            } 
            else
            { 
                QuestionModel.create(
                    {
                        person: person._id,
                        personName: person_name,
                        info: {
                            question: question,
                            answer: answer
                        },
                        source: {
                            date: new Date(),
                            name: "Anonymous",
                            link: "IAmA"
                        },
                        votes: {
                            total: 0,
                            votedFake: 0,
                            votedReal: 0
                        },
                        isReal: "fake"
                    }
                );

                res.json({"success": true})
                next()
            }
        });
    },

    pullPerson: (req, res, next) => {
        var person_name = req.params.person_name;
        console.log("Show all people!!!");
        PersonModel.find({}, function (err, cool){
            console.log("Show all people 222222!!!");
            console.log(cool);
        })

        PersonModel.findOne({name: person_name}, function (err, person){
            //var questionIDS = person.questions;

            console.log("Person is " + person_name);
            //console.log(questionIDS);

            // Pull questions
            //QuestionModel.find().where('_id').in(questionIDS, function (err, questions){
            QuestionModel.find({personName: person_name}, function (err, questions){
                console.log("DONE!")
                //questions = questions.filter(x => x.person == person_name);
                function getFullName(item) {
                    //console.log(item);
                    var obj = {};
                    obj.question = item.info.question;
                    obj.answer = item.info.answer;
                    obj.question_id = item._id;
                    return obj;
                }
                questions = questions.map(getFullName);
                
                console.log("JORG WE ARE HERE!");
                //console.log(questions);
                res.json({
                    "personInfo": {
                        "description": person.description,
                        "full_name": person.full_name,
                        "person": person.name,
                        "image": person.image,
                        "questions": questions,
                    }
                });
                next();
            })
        })
    }
}
