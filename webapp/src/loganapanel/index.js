import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { AppContainer } from 'react-hot-loader'

//App
import LoganaPanel from './logana-panel'

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('logana-panel')
    );
}

render(LoganaPanel);

if(module.hot)
    module.hot.accept('./logana-panel', ()=>{ render(LoganaPanel); })