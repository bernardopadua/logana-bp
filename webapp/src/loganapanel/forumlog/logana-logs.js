//Core
import React from 'react'
import { 
    Container, 
    Button,
    Segment
} from 'semantic-ui-react'

//Components
import axios from 'axios'

//Internal Components
import LoganaEditor from '../components/logana-editor'

import LoganaTableMenu from './components/logana-table-menu'
import LoganaTable from './components/log-table-filter'

import LoganaLogForm from './components/logana-log-form'

import LoganaAPI from '../core/logana-api'
import Objects from './components/logana-objects'

class LoganaLogs extends React.Component {
    constructor(props){
        super(props);
        
        this.api = new LoganaAPI(props.token);
        
        this.state = {
            ...this.state,
            application: {
                token: props.token,
                data_logs: [],
                cached_fields: {
                    forums: {},
                    status: {}
                },
                log_state: {
                    current_log: null,
                    created_edited: false
                }
            },
            active_module: (<Segment loading />)
        };

        //Loading cached fields objects
        this.loading = [
            'getforums'
        ]
        this.checkLoading = compName => {
            const idx = this.loading.indexOf(compName);
            if(idx>-1)
                this.loading.splice(idx, 1);
            
            if(this.loading.length<=0)
                this.filterLog()
        }

        //Loading cached fields
        this.loadCachedFields();
    }

    /* 
        Loading cached fields to be used in LoganaLogForm.
    */
    loadCachedFields(){
        //Caching fields before full load application
        this.api.getForums((r)=>{
            console.log(r.data);

            const dataForums = r.data.map(
                el => ({
                        key: el.pk,
                        value: el.pk,
                        text: el.fields.title
                })
            );

            const dataStatus = Objects.status;

            this.setState(
                prevState => ({
                    application: {
                        ...prevState.application,
                        cached_fields: {
                            ...prevState.application.cached_fields,
                            forums: dataForums,
                            status: dataStatus
                        }
                    }
                })
                ,
                ()=>{
                    this.checkLoading('getforums');
                }
            )
        });
    }

    connectEditor(obj){
        this.setState({
            ...this.state,
            obj
        });
    }

    /*
        Action to select the log on the table.
    */
    selectLog(e, d){
        const obj = this.state.application.data_logs.filter((el)=>{
            return el.pk == d.pklog;
        });

        if(obj.length > 0) {
            console.log(o);

            this.setState(
                prevState => ({
                    application: {
                        ...prevState.application,
                        log_state: {
                            ...prevState.application.log_state,
                            current_log: obj[0]
                        }
                    }
                })
            );
        }
    }

    /*
        Fill the object current_log in the state to load the editor.
    */
    createLog(){
        this.setState(
            prevState => ({
                application:{
                    ...prevState.application,
                    log_state: {
                        ...prevState.application.log_state,
                        current_log: Object.create(Objects.new_log),
                        created_edited: true
                    }
                }
            })
            ,
            () => {
                this.openEditor();
            }
        );
    }

    /*
        Open the editor to create/Edit the log.
    */
    openEditor(){
        const logState = this.state.application.log_state;

        this.setState({
            active_module: (
                <LoganaLogForm 
                    data={logState.current_log}
                    cachedFields={this.state.application.cached_fields}
                    saveState={this.saveFormState.bind(this)}
                />
            )
        })
    }

    saveFormState(logObj){
        
        this.setState(
            prevState=>({
                application: {
                    ...prevState.application,
                    log_state: {
                        ...prevState.application.log_state,
                        current_log: logObj
                    }
                }
            })
            ,
            () => {
                let data = this.state.application.log_state.current_log;
                let temp = data.fields;
                delete data.fields;
                data = Object.assign(data, temp);

                console.log('saveFormState -> data');
                console.log(data);
                console.log(temp);

                this.api.createLog(
                    r => {
                        console.log(r);
                    } //Callback function
                    ,
                    data
                );
            }
        );
    }

    /*
        Access the API to get logs from the filter.
        Change de module loaded. (Filter-Table <=> Form Edit/Create Log)
    */    
    filterLog(){
        const api = this.api;

        api.getLog((r)=>{
            this.setState(
                prevState => ({
                    application: {
                        ...prevState.application,
                        data_logs: r.data
                    },
                    active_module: 
                        (
                            <div module='logana-filter'>
                                <LoganaTableMenu 
                                    createLog={this.createLog.bind(this)} 
                                />
                                <LoganaTable 
                                    data={r.data} 
                                    selectLog={this.selectLog.bind(this)} 
                                />
                            </div>
                        )
                })
            );
        });
    }

    render(){
        return (
            <Container>
                <Segment className="ui centered">
                    {this.state.active_module}
                    
                    <br/>
                    <br/>

                    <Button onClick={this.filterLog.bind(this)}>
                        Click me!                    
                    </Button>
                </Segment>
            </Container>
        );
    }

}

export default LoganaLogs;