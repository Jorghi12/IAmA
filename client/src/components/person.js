import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Person extends Component {
  render() {
    return (
      <div>
        <Container fluid="true" style={{marginLeft:'100px', marginTop:'-30px'}}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={5} md={5}>
              <Card style={{ width: '100%', marginLeft:'0px', border: 'none' }}>
                <Container fluid="true" style={{/*marginLeft:'80px', marginRight:'80px'*/}}>
                  <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Card.Img style={{borderRadius: '50%', height:'250px', width:'250px'}} variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                    <Card.Body style={{textAlign: 'center', justifyContent: 'space-between'}}>
                      <Card.Title style={{textAlign:'center', fontWeight: 'bold'}}>Name of Person</Card.Title>
                      <Card.Text style={{fontSize:'12px'}}>
                      Entrepreneur and businessman Bill Gates and his business partner Paul Allen founded and built the world&apos;s 
                      largest software business, Microsoft, through technological innovation, keen business strategy and aggressive 
                      business tactics. In the process, Gates became one of the richest men in the world. In February 2014, Gates 
                      announced that he was stepping down as Microsoft&apos;s chairman to focus on charitable work at his foundation, 
                      the Bill and Melinda Gates Foundation.
                      </Card.Text>
                    </Card.Body>
                  </Row>

                  <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
                    <Col xs={3} md={3}><Button variant="dark" style={{width:'94%', marginTop:'4px'}}>All</Button></Col>
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
                  <Col xs={12} md={12}>
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
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
