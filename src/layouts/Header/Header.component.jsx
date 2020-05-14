import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#"> CIC Bridge Talking Points
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;