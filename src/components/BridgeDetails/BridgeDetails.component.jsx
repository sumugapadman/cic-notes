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
            <Form.Group controlId="IncidentDate">
                <Form.Label>Date of Incident</Form.Label>
                <DatePicker selected={this.state.today} />
                <Form.Text className="text-muted"> The date defaults to today </Form.Text>
            </Form.Group>

            <Form.Group controlId="Severity">
                <Form.Label>Select Severity (Sev0 or Sev1)</Form.Label>
                <Form.Control as="select">
                    <option value="0">Sev 0</option>
                    <option value="1">Sev 1</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="Cloud">
                <Form.Label>Enter cloud (dropdown of possible values)</Form.Label>
                <Form.Control as="select">
                    <option value="Marketing Cloud">Marketing Cloud</option>
                    <option value="Core">Core</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="IncidentNumber">
                <Form.Label>Enter Incident Number</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            
            <Form.Group controlId="IncidentContext">
                <Form.Label>Enter Incident Context (&lt;100 chars)</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>

        </Form>
        )
    }
}

export default BridgeDetails;