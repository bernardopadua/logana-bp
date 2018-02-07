//Core
import React from 'react'

//Components
import {
    Container,
    Table,
    Icon,
    Button
} from 'semantic-ui-react'

//Internal Components
import config from '../../core/config';

export default (props)=>{
    
    console.log(props);

    const tableRows = props.data.map(el=>{
        return (
            <Table.Row key={el.pk}>
                <Table.Cell> {el.pk} </Table.Cell>
                <Table.Cell> {el.fields.forum} </Table.Cell>
                <Table.Cell> {el.fields.url} </Table.Cell>
                <Table.Cell> {el.fields.title} </Table.Cell>
                <Table.Cell> 
                    <Button icon size='mini' 
                        pklog={el.pk} 
                        onClick={ props.selectLog } 
                    >
                        <Icon name='edit' />
                        Edit
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    });

    return (
        <Container>
            <Table>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            PK
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Forum
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Url
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Title
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Action
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
        
                    {tableRows}

                </Table.Body>

            </Table>

            <Button >
                GetLOGS
            </Button>
        </Container>
    );
}