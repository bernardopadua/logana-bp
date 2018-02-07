import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import axios from 'axios'

export default ()=>{

    const logOut = (e,d) => {
        const data = new FormData();
        data.append('token', this.state.logana_token);

        axios.post('/logout', data)
        .then((r)=>{
            console.log('!loggedout!');
            window.location = '/logout';
        });
    }

    return (
        <Menu pointing>
            <Menu.Item 
                as={NavLink}
                to="/"
                exact
                name="home"
            />
            <Menu.Item 
                as={NavLink}
                to="/canneds"
                name="canneds" 
            />
            <Menu.Item 
                as={NavLink}
                to="/log"
                name="log" 
            />
            <Menu.Item 
                name="logout"
                to="/logout"
                onClick={logOut}
            >
                LogOut
            </Menu.Item>
        </Menu>
    );

}