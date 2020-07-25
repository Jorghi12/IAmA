import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
          <Navbar bg="white" expand="lg" style={{marginLeft:'28px', marginTop:'-40px', marginBottom:'10px'}}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Form inline>
                      <Form.Control style={{width: '400px'}} type="text" placeholder="Search People or Topic" className="mr-sm-2" />
                  </Form>
                  <Nav className="mr-auto" style={{marginLeft:'20px'}}>
                      <Nav.Link href="#politics" style={{color: 'black'}}>Politics</Nav.Link>
                      <Nav.Link href="#business" style={{color: 'black'}}>Business</Nav.Link>
                      <Nav.Link href="#science" style={{color: 'black'}}>Science & Tech</Nav.Link>
                      <Nav.Link href="#entertainment" style={{color: 'black'}}>Entertainment</Nav.Link>
                      <Nav.Link href="#other" style={{color: 'black'}}>Other</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </nav>

        <Container fluid="true" style={{marginLeft:'60px'}}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'20px'}}>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{
                  marginTop:'15px', marginBottom: '-15px',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block', 
                  borderRadius: '50%', height:'200px', width:'200px'}} 
                  variant="top" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Title>18138 quotes</Card.Title>
                  <Button variant="link" style={{color: 'black', marginLeft:'-12px'}}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
