import React, { Component, Fragment } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap'

class Preview extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <label htmlFor="basic-url">Your vanity URL</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        https://example.com/users/
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
            </Fragment>
        )
    }
}

export default Preview;