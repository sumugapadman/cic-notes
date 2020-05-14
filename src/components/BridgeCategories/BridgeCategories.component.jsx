import React, { Component } from 'react';
import {Nav} from 'react-bootstrap'

class BridgeCategories extends Component{
    constructor(props){
        super(props)
        this.state = {activeKey : '1'}
    }

    componentWillMount() {
        
    }

    handleSelect = (eventKey) => {
        this.setState({activeKey: eventKey});
    };

    render(){
        return (
            <Nav variant="pills" onSelect={this.handleSelect} activeKey={this.state.activeKey}>
                <Nav.Item>
                    <Nav.Link eventKey="1">Incident Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2">Bridge Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3">Other Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4">For Long Running Incidents</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default BridgeCategories;