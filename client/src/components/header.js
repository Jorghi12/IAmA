import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Header extends Component {
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
                <Nav.Link href="#politics" className="ml-auto" style={{color: 'black'}}>People</Nav.Link>
                <Nav.Link href="#business"  style={{color: 'black'}}>Topics</Nav.Link>
                <Button variant="outline-dark" style={{width: '120px', marginRight:'20px'}}>Ask</Button>{' '}


                {/*<NavLink className="navbar-brand" to="/">MERN</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/public">Public</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/account">Account</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {this.renderSignButton()}
                    </ul>
        </div>*/}
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