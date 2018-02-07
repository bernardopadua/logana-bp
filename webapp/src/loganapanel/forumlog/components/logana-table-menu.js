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

    return(
        <Header block>
            <Button icon style={buttonFix}
                onClick={
                    () => {
                        props.createLog();
                    }
                }
            >
                <Icon name='add circle' />
                Add Log
            </Button>
            <Button icon style={buttonFix}>
                Teste two
            </Button>
        </Header>
    );

}