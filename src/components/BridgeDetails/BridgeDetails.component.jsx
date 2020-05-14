import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import './BridgeDetails.scss'

class BridgeDetails extends Component{
    constructor(props){
        super(props)
        this.state = {today : new Date()}
    }

    render(){
        return (
        <Form>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Date of Incident</Form.Label>
                <DatePicker selected={this.state.today} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        )
    }
}

export default BridgeDetails;