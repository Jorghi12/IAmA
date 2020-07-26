import mongoose from 'mongoose';

// Define the model
const QuestionSchema = new mongoose.Schema({
    person: { 
        type : mongoose.Types.ObjectId, 
        ref: 'Person' 
    },
    personName: {
        type: String
    },
    info: {
        question: {
            type: String
        },
        answer: {
            type: String
        },
    },
    source: {
        date: Date,
        name: String,
        link: String
    },
    votes: {
        total: Number,
        votedFake: Number,
        votedReal: Number
    },
    isReal: {
        type: String
    },
    topic: {
        type: String
    }
});

// Define the model
const PersonSchema = new mongoose.Schema({
    name: {
        type: String
    },
    full_name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    questions: [
        { 
            type : mongoose.Types.ObjectId, 
            ref: 'Question' 
        }
    ], 
});

var PersonModel = mongoose.model('Person', PersonSchema);
var QuestionModel = mongoose.model('Question', QuestionSchema);

/*var billgates = PersonModel.create(
    {
        name: 'billgates',
        full_name: "Bill Gates",
        description: "Entrepreneur and businessman Bill Gates and his business partner Paul Allen founded and built the world's largest software business, Microsoft, through technological innovation, keen business strategy and aggressive business tactics. In the process, Gates became one of the richest men in the world. In February 2014, Gates announced that he was stepping down as Microsoft's chairman to focus on charitable work at his foundation, the Bill and Melinda Gates Foundation.",
        questions: []
    }
);*/
/*
var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "How do you measure the success of the foundation?",
            answer: "Our goals are focused on helping the poorest (globally) and improving education (in the US). We spend half of our money on global health. One metric to look at is reducing the number of children (under 5) who die. My annual letter talks about the amazing progress that has been made on this. Amazingly, as health improves, families choose to have less kids, so paradoxically population growth goes DOWN as you improve health, helping with almost every issue — from stability to the environment."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbepj"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);


var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What do people give you for your birthday, given that you can buy anything you want?",
            answer: "Free software. Just kidding. Books actually."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbajy"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);


var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Oh! What's your favorite book?",
            answer: "My favorite of the last decade in Pinker's Better Angels of our Nature. It is a long but profound look at the reduction in violence and discrimination over time."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dcxrt"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);





var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What one Microsoft program or product that was never fully developed or released do you wish had made it to market?",
            answer: "We had a rich database as the client/cloud store that was part of a Windows release that was before its time. This is an idea that will re-emerge, since your cloud store will be rich with schema rather than just a bunch of files, and the client will be a partial replica of it, with rich schema understanding."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbamx"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Since becoming wealthy, what's the cheapest thing that gives you the most pleasure?",
            answer: "Kids. Cheap cheeseburgers. Open Course Ware courses."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbj95"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Where are you acquiring these cheap kids from?",
            answer: "The stork."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dct4l"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "How have other extremely wealthy people reacted to your excessively generous philanthropy?",
            answer: "I have enjoyed meeting other philanthropists and talking about what they work on. I think there is a movement to do more, start sooner and be smarter about giving. Philanthropy is mostly about a broad set of people giving but it helps if the most wealthy set a strong example."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbada"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Do you still code? If so which language? :)",
            answer: "Not as much as I would like to. I write some C, C# and some Basic. I am surprised new languages have not made more progress in simplifying programming. It would be great if most high school kids were exposed to programming."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbkl3"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Given the recent targeting of health professionals in Pakistan and Nigeria, do you think eradication of polio is attainable in the next decade? How is the Gates Foundation going to get over this barrier to eradication? Also, what is your opinion on the anti-vaccination movement in general?",
            answer: "The violence against the vaccinators in both Pakistan and Nigeria is a terrible thing. However both countries are committed to finishing the eradication. This is the project I spent most of my time on. We should be able to finish by 2018, although that will require raising funds and some great execution. We have some innovations, like the way we use satellite maps to find all the villages and GPS tracking to make sure the teams go to every hut, that are helping out. Polio is a harder disease than smallpox was, but it is doable."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "https://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbd8e"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What type of computer are you using right now?",
            answer: "I just got my Surface Pro a week ago and it is very nice."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbbys"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Can you still jump over chairs?",
            answer: "Less than I used to. It was part of exercise for snow skiing. I still ski but I am not as hard core."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbere"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Do you guys really use Bing? I mean seriously.",
            answer: "Seriously Bing is the better product at this point. Try the challenge. I am biased, but the work to make Bing better has been amazing."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbjdq"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What emerging technology today do you think will cause another big stir for the average consumer in the same way that the home computer did years ago?",
            answer: 'Robots, pervasive screens, speech interaction will all change the way we look at "computers." Once seeing, hearing, and reading (including handwriting) work very well, you will interact in new ways.'
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbgf4"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "How was your relationship with Steve Jobs? I always hoped that y'all were really good friends and competitors.",
            answer: "He and I respected each other. Our biggest joint project was the Mac, where Microsoft had more people on the project than Apple did as we wrote a lot of applications. I saw Steve regularly over the years, including spending an afternoon with him a few months before he tragically passed away."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbg2w"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Which world-wide health cause are we perfectly capable of easily solving and on the cusp of achieving but just need to put it over the top with a little more attention or resources to actually solve?",
            answer: "Polio is the first thing to get done since we are close. Within 6 years we will have the last case. After that we will go after malaria and measles. Malaria kills over 500,000 kids every year, mostly in Africa, and did not get enough attention until the last decade. We also need vaccines to prevent HIV and TB which are making progress."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbk9h"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What is something that needs to be changed in the world, but money won't help?",
            answer: "It would be nice if all governments were as rational as the Nordic governments — reaching compromise and providing services broadly. The Economist had a nice special section on this last week. African governments have often been weak, but you can't write a check to change that. Fortunately, the average quality is going up. Mo Ibrahim tracks this in a great way."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dblj6"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "First of all, thanks Mr. Gates for doing this. I've been a fan of you since I was a little kid, taking solace in your success as a professional nerd and philanthropist. If Microsoft didn't take off, what would you have done and be doing instead? You are a leader in the ultra-wealthy philanthropists, but what do you think that people of median income can do to help improve the world the most?",
            answer: "If the microprocessor had NOT come along, I am not sure what I would have done. Maybe medicine or theoretical math, but it is hard to say. Most giving is done by the middle class, so it is the backbone of generosity, particularly in the United States. A key thing is to support government aid, which is only 1% of the budget, but helps poor countries in incredible ways."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbaun"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What is the greatest achievement of the Bill & Melinda Gates Foundation in your opinion and how do you choose which causes to support?",
            answer: "So far, our biggest impact has been getting vaccines for things like diarrhea and pneumonia out, which has saved millions of lives. Polio will be a great achievement, …with [help from] key partners, when that gets done."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbj46"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Is Weezer still your favorite band?",
            answer: "Weezer....Actually U2 is a favorite. I keep waiting for Spinal Tap to go back on tour..."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbd9y"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Hi Mr. Gates. The anti-vaccine movement does not only exist in developing countries, such as Pakistan, but is quite popular here in the United States as well. As a result, the number of flu and whooping cough cases are bigger than ever. Are you planning on working domestically as well? Which countries do you think serve as models for their initiatives towards an overall healthier society? ie. who's doing the best?",
            answer: "Vaccines are very important in all countries. Some of the bad rumors have led to kids dying of measles and pertussis. We have backed some information campaigns on the importance of vaccination even in the US. The Nordic countries do a good job on health like they do on many things..."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbk76"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Hi Mr. Gates. The anti-vaccine movement does not only exist in developing countries, such as Pakistan, but is quite popular here in the United States as well. As a result, the number of flu and whooping cough cases are bigger than ever. Are you planning on working domestically as well? Which countries do you think serve as models for their initiatives towards an overall healthier society? ie. who's doing the best?",
            answer: "Vaccines are very important in all countries. Some of the bad rumors have led to kids dying of measles and pertussis. We have backed some information campaigns on the importance of vaccination even in the US. The Nordic countries do a good job on health like they do on many things..."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbk76"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Hi, welcome to reddit! What are your thoughts on the push against the open and free Internet that we have been seeing in the recent past and present (such as sopa, etc)?",
            answer: "There are two things this could reference. One is the free/pay-for-software mix. The Internet has benefited from having lots of free stuff and lots of commercial software. It has been interesting see people inventing hybrid models. Even stuff that is pretty commercial often has free versions for some audiences. Even the most open stuff often have services people choose to pay for. The second thing is the anonymous-versus-identified tension. This is another one where both will probably thrive, since you want anonymity for some things and full identity for others. I am surprised how little progress has been made in the identity space, but it will improve."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbahn"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What do you do for fun? I find it hard to fathom how someone like you can just disconnect. Disconnect from the emails, calls, the media. All of it. What would be your definition of a chill and fun day?",
            answer: "I love playing tennis. I am an avid bridge player (a card game if you have not heard of it — it was more popular in the past!). I like to tour interesting things with my kids, like power plants, garbage dumps, the Large Hadron Collider, Antarctica, missile Silos (Arizona)...I read a lot and watch courses (online or the Learning Company)."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbj0l"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What's your worst fear for the future of the world?",
            answer: "Hopefully we won't have terrorists using nuclear weapons or biological weapons. We should make sure that stays hard. I am disappointed more isn't being done to reduce carbon emissions. Governments need to spend more on basic energy R&D to make sure we get cheap, non-CO2-emitting sources as soon as possible. Overall I am pretty optimistic. Things are a lot better than they were 200 years ago..."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbjvs"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "How did you feel about your portrayal in Pirates of Silicon Valley, and who do you want to play you next in a movie?",
            answer: "That portrayal was reasonably accurate...."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbkli"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Hi Bill, I am just wondering what your thoughts are on Windows 8. Do you think in general it has failed? I am not saying it has, but there are people saying it is not good, and I wanted to hear your thoughts on it.",
            answer: "It is a huge advance for Windows, which people will see even more as the great applications and hardware come out."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbkao"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);





var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Anything left on your bucket list?",
            answer: "Don't die..."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbl44"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Did you ever own a Macintosh?",
            answer: "Microsoft does a lot of software for the Mac. I mostly use Windows machines, but from time to time I have tried all of Apple's products."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8db918"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Windows 7 or Windows 8? Be honest Bill.",
            answer: "Higher is better."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbmq0"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "What is your view on the world's reliance on crude oil, and will you be investing into researching other sources of energy?",
            answer: "I did a TED talk about the climate crisis. Over time, we have to dramatically reduce CO2 emissions so using fossil fuels will require us to do carbon capture and sequestration. There has been far too little work on this."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbj05"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);

var questions = QuestionModel.create(
    {
        person: "5f1d102ec84eb976d20e9d5f",
        personName: "billgates",
        info: {
            question: "Mr. Gates I was happy to see you last year at the Math Strategy Group at Sunnylands. My question is how do you see technology enhancing Mathematics education without actually replacing it?",
            answer: "The ability to test your knowledge and get refreshed on a topic you are making mistakes on will personalize a lot of the learning experience. People like Sal Khan are out in front figuring out how to do this well. My foundation has funded a lot of MOOCs focused on community college kids or kids who have to take remedial math. I am optimistic these will make a big difference."
        },
        source: {
            date: new Date(2013, 2, 11),
            name: "Reddit",
            link: "http://www.reddit.com/r/IAmA/comments/18bhme/im_bill_gates_cochair_of_the_bill_melinda_gates/c8dbc4k"
        },
        votes: {
            total: 0,
            votedFake: 0,
            votedReal: 0
        },
        isReal: "real"
    }
);*/


// Export the model
module.exports = {
    PersonModel:  PersonModel,
    QuestionModel: QuestionModel
}