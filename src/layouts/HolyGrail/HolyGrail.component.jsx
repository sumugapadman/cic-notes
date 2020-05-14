import React, { Component } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'
import {BridgeDetails, Preview, BridgeCategories} from '../../components'

class HolyGrail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Container fluid className='pt-3'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <BridgeCategories />
                            </Card.Header>
                            <Card.Body>
                                <BridgeDetails/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Preview/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HolyGrail;