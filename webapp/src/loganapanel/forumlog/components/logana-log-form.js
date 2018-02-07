//Core
import React from 'react'

//Components
import {
    Input,
    Form,
    Dropdown,
    Button
} from 'semantic-ui-react'

//Internal Components
import LoganaEditor from '../../components/logana-editor'
import LoganaFormMenu from './logana-form-menu'

export default (props) => {

    let data       = props.data;
    const saveAction = props.saveState;
    const forums     = props.cachedFields.forums;
    const status     = props.cachedFields.status;

    const menuSaveState = () => {
        data = data.__proto__;
        saveAction(data);
    }

    const onChangeField = (e, d) => {
        data.fields[d.name] = d.value;
    }

    return (
        <div logana-module='logana-log-form'>
            <LoganaFormMenu saveState={menuSaveState} />
            <Form size='small'>
                <Form.Field>
                    <label>Title:</label>
                    <Input type='text' 
                        name='title'
                        onChange={onChangeField}
                        defaultValue={data.fields.title}
                        placeholder="Title"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Forum User:</label>
                    <Input type='text' 
                        name='forum_user'
                        onChange={onChangeField}
                        defaultValue={data.fields.forum_user}
                        placeholder="Forum User"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Url:</label>
                    <Input type='text' 
                        name='url'
                        onChange={onChangeField}
                        defaultValue={data.fields.url}
                        placeholder="Url"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Status:</label>
                    <Dropdown 
                        placeholder='Status'
                        fluid search selection
                        options={status}
                        name='status'
                        defaultValue={data.fields.status}
                        onChange={onChangeField}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Forum:</label>
                    <Dropdown 
                        placeholder='Forums'
                        fluid search selection
                        options={forums}
                        name='forum'
                        defaultValue={data.fields.forum}
                        onChange={onChangeField}
                    />
                </Form.Field>
            </Form>
        </div>
    );
}