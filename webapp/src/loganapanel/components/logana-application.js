//Core
import React, { Component } from 'react'

//UI
import {
    Grid,
    Button,
    Card,
    Container
} from 'semantic-ui-react'

//Routing
import { NavLink } from 'react-router-dom'

export default ()=>{
    return (
        <Grid centered>
            <Grid.Row columns={2}>
                <Grid.Column width={3}>
                        <Card as={NavLink} to="/log">
                            <Card.Content>
                                <Card.Header>
                                    Forum Logs
                                </Card.Header>
                                <Card.Description>
                                    In this application you can create, edit and manage your forum logs.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                        <Card as={NavLink} to="/canneds">
                            <Card.Content>
                                <Card.Header>
                                    Canneds
                                </Card.Header>
                                <Card.Description>
                                    In this application you can create, edit and delete canneds to be used in your forum posts.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}