import React from 'react'
import { Route } from 'react-router-dom'

import { Header, Button, Segment } from 'semantic-ui-react'

const clickMe = ()=>{
    console.log('GOGOGOGO!!');
}

const TestMe = ({postReq}) => (
    <div id='logana-routing'>
        <Button color='blue' onClick={clickMe}>
            GO!
        </Button>
    </div>
)

export default TestMe;