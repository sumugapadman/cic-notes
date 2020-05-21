import React, { Component, Fragment } from 'react';
import {InputGroup, FormControl, ProgressBar, Button} from 'react-bootstrap'

class VanityUrl extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        https://cic-talking-points.herokuapp.com/
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    <InputGroup.Append>
                        <Button variant="success">Generate</Button>
                    </InputGroup.Append>
                </InputGroup>
                <ProgressBar striped variant="primary" animated now={75} />
            </Fragment>
        )
    }
}

export default VanityUrl;