import {Container, Header, Icon} from 'semantic-ui-react'
import React, { Component } from 'react'

class LogHeader extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container fluid textAlign='left'>
                <Header as='h1' icon='archive' content='Log Analysis Manager' />
            </Container>
        );
    }

}

export default LogHeader