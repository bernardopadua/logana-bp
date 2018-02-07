//Core
import React, { Component } from 'react'

//UI
import {
    TextArea,
    Button,
    Icon,
    Form
} from 'semantic-ui-react'

class LoganaEditor extends Component {
    constructor(props){
        super(props);

        this.state = {
            ...this.state,
            editor: {
                value: ""
            }
        }

        this.props.connectEditor(this.state);
    }

    render(){
        return(
            <div id='logana-editor'>
                
                <Form>
                    <Form.Field>
                        <label>Post:</label>
                        <TextArea 
                            onChange={(e)=>{ this.state.editor.value = e.target.value; this.props.connectEditor(this.state); }}
                            value={this.state.editor.value}
                            placeholder='Type your post'
                            rows={4} 
                        />
                    </Form.Field>
                    <Button icon>
                        <Icon name='world' />
                        BBCode Parse
                    </Button>
                </Form>
            </div>
        );

    }
}

export default LoganaEditor;