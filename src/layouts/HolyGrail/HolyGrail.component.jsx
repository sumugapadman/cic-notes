import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'
import {BridgeDetails, Preview, BridgeCategories, VanityUrl} from '../../components'

class HolyGrail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <Container fluid className='pt-3'>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    Your Vanity URL
                                </Card.Header>
                                <Card.Body>
                                    <VanityUrl />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
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
            </Fragment>
        )
    }
}

export default HolyGrail;