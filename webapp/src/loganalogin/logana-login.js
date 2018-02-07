import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Segment, Form, Container, Message } from 'semantic-ui-react'

import Logheader from '../loganapanel/logana-header'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

//import 'semantic-ui-css/semantic.min.css'
import '../../dist/assets/css/logana-login.css'

class LoginLogana extends Component {
    constructor(props){
        super(props)
    }

    render(){

        let message = null;
        if(this.props.message !== null)
            message = <Message negative><Message.Header>Login Error!</Message.Header><p> {this.props.message.innerHTML} </p></Message>;

        return (
            <div id="logana-login">
                <   Logheader />
                <Segment padded="very" color="red" basic>
                    <Container id="content-login" className="ui centered">
                        {message}
                        <Form method="POST" action="http://127.0.0.1:8000/login">
                            <Form.Field>
                                <label>Login:</label>
                                <input name="username" laceholder="Username" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password:</label>
                                <input name="password" placeholder="Password" />
                            </Form.Field>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Container>
                </Segment>
            </div>
        )
    }
}

ReactDOM.render(
    <LoginLogana message={document.getElementById("message")}/>,
    document.getElementById("logana-login")
);