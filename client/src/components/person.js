import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import moment from 'moment';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.setState({
      full_name: "",
      description: "",
      questions: [], 
      loaded: false
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
        loaded: true
      });
    });
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
        questions: questions_updated
      });
    });
  }

  render() {
    return (
      <div>{this.state && this.state.loaded ? 
        <Container fluid="true" style={{marginLeft:'100px', marginTop:'-30px'}}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={5} md={5}>
              <Card style={{ width: '100%', marginLeft:'0px', border: 'none' }}>
                <Container fluid="true" style={{/*marginLeft:'80px', marginRight:'80px'*/}}>
                  <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Card.Img style={{borderRadius: '50%', height:'250px', width:'250px'}} variant="top" src={this.state.image || "statics/imgs/billgates.jpg"} />
                    <Card.Body style={{textAlign: 'center', justifyContent: 'space-between'}}>
                      <Card.Title style={{textAlign:'center', fontWeight: 'bold'}}>{this.state ? this.state.full_name : ''}</Card.Title>
                      <Card.Text style={{fontSize:'12px', textAlign:'left'}}>
                      {this.state ? this.state.description : ''}
                      </Card.Text>
                    </Card.Body>
                  </Row>

                  <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}} active>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="secondary" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                  </Row>

                  <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'25px'}}>
                    <Col xs={4} md={4}><Button variant="dark" style={{width:'94%', height:'50px', marginTop:'4px'}}>Ask A Question</Button></Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col xs={6} md={6}>
              <Container fluid="true" style={{marginLeft:'100px', /*overflow:'scroll',*/ height:'650px'}}>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  {this.state ? this.state.questions.map((item, index) => (
                    <Col key={item.question_id} xs={12} md={12} style={{marginTop:"20px"}}>
                      <Card style={{ width: '100%' }}>
                        <Card.Body>
                          <Card.Title>{item.question}</Card.Title>
                          <Card.Text style={{marginTop:'20px'}}>
                            {item.answer}
                          </Card.Text>
                          
                          {item.voted ? 
                          <div>
                            <Card.Text style={{marginTop:'10px', fontSize:'16px', textAlign: 'left'}}>
                              <b style={{color: item.correct ? "green" : "red"}}>{item.correct ? "CORRECT!" : "WRONG!"}</b> {moment(item.source.date).format('MM/DD/YYYY') || "06/23/2020"} Source: {item.source.name || ""}
                            </Card.Text>
                            <Container fluid="true" style={{}}>
                              <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                <Col xs={12} md={12}>
                                  <Button variant={item.myVote == "fake" ? "dark" : "light"} style={{color: item.myVote == "fake" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'60px'}}>Fake</Button>
                                  <Button variant={item.myVote == "real" ? "dark" : "light"}  style={{color: item.myVote == "real" ? "white" : "black", border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'60px'}}>Real</Button>
                                </Col>

                                <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                  <Card.Text>
                                  {Math.round(item.votes.votedFake/item.votes.total*100)}% ({item.votes.votedFake} votes)
                                  </Card.Text>
                                </Col>

                                <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                                  <Card.Text>
                                  {100 - Math.round(item.votes.votedFake/item.votes.total*100)}% ({item.votes.votedReal} votes)
                                  </Card.Text>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                        : 
                          <div>
                            <Button onClick={() => this.submitVote('fake', item.question_id)} variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', width:'46%', height:'60px'}}>Fake</Button>
                            <Button onClick={() => this.submitVote('real', item.question_id)} variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'10px', marginLeft:'8%', width:'46%', height:'60px'}}>Real</Button>
                          </div>}
                        </Card.Body>
                      </Card>
                    </Col>
                  )) : ''}
                  {/*<Col xs={12} md={12}>
                    <Card style={{ width: '100%' }}>
                      <Card.Body>
                        <Card.Title>How do you know what you know if you know that you don&apos;t know what you know?</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&apos;s content.
                        </Card.Text>
                        <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'20px', width:'46%', height:'60px'}}>Fake</Button>
                        <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', marginTop:'20px', marginLeft:'8%', width:'46%', height:'60px'}}>Real</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12} style={{marginTop:"20px"}}>
                    <Card style={{ width: '100%' }}>
                      <Card.Body>
                        <Card.Title>How do you know what you know if you know that you don&apos;t know what you know?</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&apos;s content.
                        </Card.Text>
                        <Card.Text style={{marginTop:'30px'}}>
                          <b>WRONG!</b> 06/23/2020 Source: Reddit
                        </Card.Text>


                        <Container fluid="true" style={{}>
                          <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <Col xs={6} md={6}>
                              <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', float: 'left', width:'95%', height:'60px'}}>Fake</Button>
                            </Col>

                            <Col xs={6} md={6}>
                              <Button variant="light" style={{color:'black', border:'1px solid lightgray', fontWeight:'bold', float:'right', width:'95%', height:'60px'}}>Real</Button>
                            </Col>

                            <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                              <Card.Text>
                              60% (120 votes)
                              </Card.Text>
                            </Col>

                            <Col xs={6} md={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                              <Card.Text>
                              40% (80 votes)
                              </Card.Text>
                            </Col>
                          </Row>
                        </Container>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12} style={{marginTop:"20px"}}>
                    <Card style={{ width: '100%' }}>
                      <Card.Body>
                        <Card.Title>How do you know what you know if you know that you don&apos;t know what you know?</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&apos;s content.
                        </Card.Text>
                        <Card.Text>
                          06/23/2020 Source: Reddit
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={12} style={{marginTop:"20px"}}>
                    <Card style={{ width: '100%' }}>
                      <Card.Body>
                        <Card.Title>How do you know what you know if you know that you don&apos;t know what you know?</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card&apos;s content.
                        </Card.Text>
                        <Card.Text>
                          06/23/2020 Source: Reddit
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>*/}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container> : ''}
      </div>
    );
  }
}
