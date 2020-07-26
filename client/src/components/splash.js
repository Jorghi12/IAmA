import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class App extends Component {
  render() {
    return (
      <div>

        <Container fluid="true" style={{marginLeft:'60px'}}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={5} md={5}>
              <Card style={{border: 'none', lineHeight:'1.2', marginLeft:'50px', marginRight:'80px'}}>
                <Card.Body style={{color:'black', fontSize:'45px', fontWeight:'340'}}>
                  <b>Can you tell the difference between</b> <b style={{color:'#8E8E8E'}}>Bill Gates</b> <br></br> <b>and an AI?</b>
                  <Card.Text style={{fontSize: '20px', fontWeight:'400'}}>
                    65% of the time, people can&apos;t. 
                    <br></br>
                    <br></br>
                    Ama is a database of quotes from famous people and a game to tell which ones are real and which are fake.
                  </Card.Text>
                  <a href="/#/quote_search"><Button variant="dark" style={{width: '150px', height:'46px', backgroundColor:'black'}}>Let&apos;s Go</Button></a>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={5} md={5}>
              <Card style={{border: 'none', lineHeight:'1.2'}}>
                <Card.Img 
                  style={{marginTop: '40px'}}
                  variant="top" 
                  src={"statics/imgs/home_background.png"} 
                />
              </Card>
            </Col>
          </Row>


          <Row style={{marginTop:'140px', textAlign: 'center'}}>
            <Col xs={12} md={12}>
            © 2020 Made with ♥️ by (real humans) Jorg Doku and Brett Goldstein
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
