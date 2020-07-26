import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);

        this.setState({
            modalShow: false,
            askKey: '1',
            askQuestionText: '',
            askAnswerText: '',
            askPersonFull: ''
        });
    }

    setModalShow(newState){
        this.setState({modalShow:newState, askKey: '1', askQuestionText: '', askAnswerText: '', askPersonFull:''});
    }

    incrementAskState(newState){
        this.setState({askKey: newState});
    }

    selectedAskPerson(person, personFull){
        this.setState({
            askKey: "2",
            askPerson: person,
            askPersonFull: personFull
        });
    }

    handleAskQuestionTextChange(e){
        this.setState({
            askQuestionText: e.target.value
        })
    }

    selectedQuestion(){
        this.setState({
            askKey: "3"
        })
    }

    handleAskAnswerTextChange(e){
        this.setState({
            askAnswerText: e.target.value
        })
    }

    submitAsk(){
        var data = {
            askPerson: this.state.askPerson,
            askQuestionText: this.state.askQuestionText,
            askAnswerText: this.state.askAnswerText
        }
        console.log(data);

        this.setState({
            modalShow: false,
            askKey: "1"
        });

        console.log("SUBMITTING!!!")
        axios.post('/person/submit_question', {
            person_name: data.askPerson,
            question: data.askQuestionText,
            answer: data.askAnswerText
          }).then(response=> {

        });
    }

    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signout">Sign out</NavLink>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item" key="1">
                        <NavLink to="/signin" className="nav-link">Sign in</NavLink>
                    </li>,
                    <li className="nav-item" key="2">
                        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-white">
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/" style={{fontWeight:'bold', fontSize:'28px'}}>AMA</Navbar.Brand>
                </Navbar>
                <Nav.Link href="/#/what" className="ml-auto" style={{color: 'black'}}>What&apos;s Real or Fake?</Nav.Link>
                <Nav.Link href="/#/quote_search"  style={{color: 'black', fontWeight: window.location.href.endsWith("quote_search") ? 'bold' : ''}}>Quote Search</Nav.Link>
                <Button onClick={() => this.setModalShow(true)} variant="outline-dark" style={{width: '120px', marginRight:'20px'}}>FAKE IT</Button>{' '}


                <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state && this.state.modalShow}
                onHide={() => this.setModalShow(false)}
                >
                <Tabs 
                    defaultActiveKey="profile" 
                    id="uncontrolled-tab-example"
                    activeKey={this.state && this.state.askKey}>
                    <Tab tabClassName={'d-none'} eventKey="1" title="Home">
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            Pick a person
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container fluid="true">
                                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                                <Row style={{marginLeft:'-10px'}}>
                                    <Col xs={6} md={6} style={{marginTop:"0px"}}><Button onClick={() => this.selectedAskPerson("billgates", "Bill Gates")} variant="light" style={{width: '100%', marginleft:'-10px', height:'60px'}}>Bill Gates</Button>{' '}</Col>
                                    <Col xs={6} md={6} style={{marginTop:"0px"}}><Button onClick={() => this.selectedAskPerson("eriktorenberg", "Erik Torenberg")} variant="light" style={{width: '100%', marginLeft:'10px', height:'60px'}}>Erik Torenberg</Button>{' '}</Col>
                                    <Col xs={6} md={6} style={{marginTop:"0px"}}><Button onClick={() => this.selectedAskPerson("samaltman", "Sam Altman")} variant="light" style={{width: '100%', marginleft:'-10px',height:'60px', marginTop:'6px'}}>Sam Altman</Button>{' '}</Col>
                                    <Col xs={6} md={6} style={{marginTop:"0px"}}><Button onClick={() => this.selectedAskPerson("gregbrockman", "Greg Brockman")} variant="light" style={{width: '100%', marginLeft:'10px', height:'60px', marginTop:'6px'}}>Greg Brockman</Button>{' '}</Col>                                    
                                </Row>
                            </Container>    
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.setModalShow(false)}>Close</Button>
                        </Modal.Footer>
                    </Tab>


                    <Tab tabClassName={'d-none'} eventKey="2" title="Profile">
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            Start by writing a question for {this.state && this.state.askPersonFull}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container fluid="true">
                                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                                <Row style={{marginLeft:'-10px'}}>
                                    <Col xs={12} md={12} style={{marginTop:"0px"}}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Control 
                                                    as="textarea" rows="3" 

                                                    value={this.state ? this.state.askQuestionText : ""}
                                                    onChange={this.handleAskQuestionTextChange.bind(this)}

                                                    style={{
                                                        border:'none', height: '100px', 
                                                        marginLeft:'14px',
                                                        overflow: 'hidden', resize: 'none', 
                                                        fontSize:'36px'}}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Col>                                    
                                </Row>
                            </Container>    
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" style={{width: '200px'}} onClick={() => this.setModalShow(false)}>Close</Button>
                            <Button style={{width: '200px'}} onClick={() => this.selectedQuestion()}>Next</Button>
                        </Modal.Footer>
                    </Tab>


                    <Tab tabClassName={'d-none'} eventKey="3" title="Contact" disabled>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            Write a fake answer OR have GPT-3 generate one
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container fluid="true">
                                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                                <Row style={{marginLeft:'-10px'}}>
                                    <Col xs={12} md={12} style={{marginTop:"0px"}}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Control as="textarea" rows="3" 

                                                value={this.state ? this.state.askAnswerText : ""}
                                                onChange={this.handleAskAnswerTextChange.bind(this)}

                                                style={{
                                                    marginLeft:'14px',
                                                    border:'none', height: '100px', overflow: 'hidden', resize: 'none', fontSize:'36px'}}/>
                                            </Form.Group>
                                        </Form>
                                    </Col>                                    
                                </Row>
                                <Button variant="outline-light" style={{width: '200px', color:'black', border: '1px solid black'}} onClick={() => this.setModalShow(false)}>Generate with GPT-3</Button>
                            </Container>    
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" style={{width: '200px'}} onClick={() => this.setModalShow(false)}>Close</Button>
                            <Button style={{width: '200px'}} onClick={() => this.submitAsk()}>Submit</Button>
                        </Modal.Footer>
                    </Tab>
                </Tabs>
                </Modal>
            </nav>

            
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)