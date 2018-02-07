//Core
import React from 'react'

//Components
import {
    Header,
    Button,
    Icon
} from 'semantic-ui-react'

export default (props)=>{

    const buttonFix = {
        paddingTop: '0.785714em',
        fontSize: '14px'
    }

    let formChanged = false;

    console.log('FORM-MENU');
    console.log(props);

    return(
        <Header block>
            <Button icon style={buttonFix}
                onClick={
                    ()=>{
                        props.saveState();
                    }
                }
            >
                <Icon name='add circle' />
                Save Log
            </Button>
            <Button icon style={buttonFix}>
                
            </Button>
        </Header>
    );

}