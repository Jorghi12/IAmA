import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import moment from 'moment';
var FontAwesome = require('react-fontawesome');

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.setState({
      full_name: "",
      description: "",
      questions: [], 
      loaded: false,

      // Game Stats
      totalVotesMade: 0,
      totalVotesCorrect: 0,
      gameIndex: 0
    });

    axios.get('/person/get_person/billgates', {
      params: {
        person_name: 'billgates'
      }
    }).then(personData=> {
      var info = personData.data.personInfo;
      this.setState({
        full_name: info.full_name,
        description: info.description,
        questions: info.questions,
        image: info.image,
        loaded: true,

        // Game Stats
        totalVotesMade: 0,
        totalVotesCorrect: 0,
        gameIndex: 0
      });
    });
  }

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  submitVote(vote, question_id) {
    console.log(vote);
    console.log(question_id);

    //"correct": vote == questionObject.isReal,
    //"isReal": questionObject.isReal, 
    //"votes": questionObject.votes, 
    //"source": questionObject.source
    
    axios.get('/person/vote_question/' + question_id + '/' + vote
    ).then(voteResult => {
      var data = voteResult.data;
      var questions_updated = this.state.questions;
      for (var i = 0; i < questions_updated.length; i++) {
        if (questions_updated[i].question_id == question_id){
          questions_updated[i].isReal = data.isReal;
          questions_updated[i].votes = data.votes;
          questions_updated[i].source = data.source;
          questions_updated[i].correct = data.correct;
          questions_updated[i].voted = true;
          questions_updated[i].myVote = vote;
        }
      }

      //questions_updated
      this.setState({
        questions: questions_updated,
        totalVotesMade: this.state.totalVotesMade+1,
        totalVotesCorrect: this.state.totalVotesCorrect+data.correct,
        canGo: true
      });
    });
  }

  incrementGameIndex() {
    if (this.state.canGo){
      this.setState({
        gameIndex: this.state.gameIndex+1,
        canGo: false
      })
    }
  }

  render() {
    return (
      <div>{this.state && this.state.loaded ? 
        <Container fluid="true" style={{marginLeft:'100px', marginTop:'-30px'}}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row style={{marginTop:'-50px'}}>
            <Col xs={12} md={12}>
              <Card.Body style={{textAlign: 'center', justifyContent: 'space-between'}}>
                <Card.Title style={{fontSize:'34px', textAlign:'center', fontWeight: 'bold'}}>What&#39;s real & what&#39;s fake?</Card.Title>
                {this.state.totalVotesMade ? <Card.Text style={{fontSize:'16px', textAlign:'center'}}>
                You&#39;ve been correct {Math.round(this.state.totalVotesCorrect/this.state.totalVotesMade*100)}% of the time.
                </Card.Text> : ''}
              </Card.Body>
            </Col>
          </Row>
          <Row>
          <Col xs={3} md={3}>
              <Container fluid="true" style={{width:'200%', height:'440px', marginLeft:'-120%', opacity:'0.2'}} disabled>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  <Col key={this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].question_id} xs={12} md={12} style={{marginTop:"0px"}}>
                    <Card style={{width: '100%'}}>
                      <div style={{textAlign:'left'}}>
                        <Card.Img style={{marginLeft:'20px', marginTop:'10px', borderRadius: '50%', height:'50px', width:'50px'}} variant="top" src={this.state.image || "statics/imgs/billgates.jpg"} />
                        <Card.Title style={{marginTop:'-45px', marginLeft:'80px', fontWeight: 'bold', fontSize:'30px'}}>{this.state ? this.state.full_name : ''}</Card.Title>
                      </div>
                      <Card.Body>
                        <Card.Title style={{fontWeight: '700', marginTop:'-15px'}}>{this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].question}</Card.Title>
                        <Card.Text style={{marginTop:'0px'}}>
                          {this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].answer}
                        </Card.Text>
                        
                        {this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].voted ? 
                        <div>
                          <Card.Text style={{marginTop:'10px', fontSize:'16px', textAlign: 'center'}}>
                            <b style={{color: this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].correct ? "green" : "red"}}>{this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].correct ? "CORRECT!" : "WRONG!"}</b> {moment(this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].source.date).format('MM/DD/YYYY') || "06/23/2020"} Source: {this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].source.name || ""}
                          </Card.Text>
                          <Container fluid="true" style={{}}>
                            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                              <Col xs={12} md={12}>
                                <Button variant={this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].myVote == "fake" ? "dark" : "light"} style={{color: this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].myVote == "fake" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                                <Button variant={this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].myVote == "real" ? "dark" : "light"}  style={{color: this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].myVote == "real" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {Math.round(this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.votedFake/this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.total*100)}% ({this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.votedFake} votes)
                                </Card.Text>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {100 - Math.round(this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.votedFake/this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.total*100)}% ({this.state.questions[this.mod((this.state.gameIndex - 1), this.state.questions.length)].votes.votedReal} votes)
                                </Card.Text>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      : 
                        <div>
                          <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                          <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                        </div>}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>



            
            <Col xs={6} md={6}>
              <Container fluid="true" style={{width:'100%', height:'440px'}}>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  <Col key={this.state.questions[this.state.gameIndex].question_id} xs={12} md={12} style={{marginTop:"0px"}}>
                    <Card style={{width: '100%'}}>
                      <div style={{textAlign:'left'}}>
                        <Card.Img style={{marginLeft:'20px', marginTop:'10px', borderRadius: '50%', height:'50px', width:'50px'}} variant="top" src={this.state.image || "statics/imgs/billgates.jpg"} />
                        <Card.Title style={{marginTop:'-45px', marginLeft:'80px', fontWeight: 'bold', fontSize:'30px'}}>{this.state ? this.state.full_name : ''}</Card.Title>
                      </div>
                      <Card.Body>
                        <Card.Title style={{fontWeight: '700', marginTop:'-15px'}}>{this.state.questions[this.state.gameIndex].question}</Card.Title>
                        <Card.Text style={{marginTop:'0px'}}>
                          {this.state.questions[this.state.gameIndex].answer}
                        </Card.Text>
                        
                        {this.state.questions[this.state.gameIndex].voted ? 
                        <div>
                          <Card.Text style={{marginTop:'10px', fontSize:'16px', textAlign: 'center'}}>
                            <b style={{color: this.state.questions[this.state.gameIndex].correct ? "green" : "red"}}>{this.state.questions[this.state.gameIndex].correct ? "CORRECT!" : "WRONG!"}</b> {moment(this.state.questions[this.state.gameIndex].source.date).format('MM/DD/YYYY') || "06/23/2020"} Source: {<a href={this.state.questions[this.state.gameIndex].source.link}>{this.state.questions[this.state.gameIndex].source.name}</a> || ""}
                          </Card.Text>
                          <Container fluid="true" style={{}}>
                            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                              <Col xs={12} md={12}>
                                <Button variant={this.state.questions[this.state.gameIndex].myVote == "fake" ? "dark" : "light"} style={{color: this.state.questions[this.state.gameIndex].myVote == "fake" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                                <Button variant={this.state.questions[this.state.gameIndex].myVote == "real" ? "dark" : "light"}  style={{color: this.state.questions[this.state.gameIndex].myVote == "real" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {Math.round(this.state.questions[this.state.gameIndex].votes.votedFake/this.state.questions[this.state.gameIndex].votes.total*100)}% ({this.state.questions[this.state.gameIndex].votes.votedFake} votes)
                                </Card.Text>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {100 - Math.round(this.state.questions[this.state.gameIndex].votes.votedFake/this.state.questions[this.state.gameIndex].votes.total*100)}% ({this.state.questions[this.state.gameIndex].votes.votedReal} votes)
                                </Card.Text>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      : 
                        <div>
                          <Button onClick={() => this.submitVote('fake', this.state.questions[this.state.gameIndex].question_id)} variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                          <Button onClick={() => this.submitVote('real', this.state.questions[this.state.gameIndex].question_id)} variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                        </div>}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={1} md={1} style={{opacity:'1'}}>
              <Button 
                disabled={!this.state.canGo}
                onClick={() => this.incrementGameIndex()} 
                variant="light" 
                style={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none !important',
                  border: 'none',
                  color:'black',
                  opacity:'1',
                  fontWeight:'bold',
                  marginTop:'-30px',
                  marginLeft:'0px', width:'46%', 
                  height:'100%'}}>
                  <FontAwesome
                    className='super-crazy-colors'
                    name='caret-right'
                    size='2x'
                    //spin
                    style={{
                      color: this.state.canGo ? '#00009c' : 'black',
                      fontSize:'200px', 
                      opacity:'1',
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' 
                    }}></FontAwesome>
              </Button>
            </Col>






            <Col xs={2} md={2}>
              <Container fluid="true" style={{height:'440px', width: '100%', overflow:'hidden'}} disabled>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  <Col key={this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].question_id} xs={8} md={8} style={{opacity:'0.2', marginTop:"0px"}}>
                    <Card style={{width:'400px'}}>
                      <div style={{textAlign:'left'}}>
                        <Card.Img style={{marginLeft:'20px', marginTop:'10px', borderRadius: '50%', height:'50px', width:'50px'}} variant="top" src={this.state.image || "statics/imgs/billgates.jpg"} />
                        <Card.Title style={{marginTop:'-45px', marginLeft:'80px', fontWeight: 'bold', fontSize:'30px'}}>{this.state ? this.state.full_name : ''}</Card.Title>
                      </div>
                      <Card.Body>
                        <Card.Title style={{fontWeight: '700', marginTop:'-15px'}}>{this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].question}</Card.Title>
                        <Card.Text style={{marginTop:'0px'}}>
                          {this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].answer}
                        </Card.Text>
                        
                        {this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].voted ? 
                        <div>
                          <Card.Text style={{marginTop:'10px', fontSize:'16px', textAlign: 'center'}}>
                            <b style={{color: this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].correct ? "green" : "red"}}>{this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].correct ? "CORRECT!" : "WRONG!"}</b> {moment(this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].source.date).format('MM/DD/YYYY') || "06/23/2020"} Source: {this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].source.name || ""}
                          </Card.Text>
                          <Container fluid="true" style={{}}>
                            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                              <Col xs={12} md={12}>
                                <Button variant={this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].myVote == "fake" ? "dark" : "light"} style={{color: this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].myVote == "fake" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                                <Button variant={this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].myVote == "real" ? "dark" : "light"}  style={{color: this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].myVote == "real" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {Math.round(this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.votedFake/this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.total*100)}% ({this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.votedFake} votes)
                                </Card.Text>
                              </Col>

                              <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                <Card.Text>
                                {100 - Math.round(this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.votedFake/this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.total*100)}% ({this.state.questions[this.mod((this.state.gameIndex + 1), this.state.questions.length)].votes.votedReal} votes)
                                </Card.Text>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      : 
                        <div>
                          <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'50px'}}>Fake</Button>
                          <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'50px'}}>Real</Button>
                        </div>}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container> : ''}
      </div>
    );
  }
}
