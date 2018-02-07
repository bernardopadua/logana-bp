import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { browserHistory, Switch, Redirect } from 'react-router'
import axios from 'axios'

import { 
    Button,
    Segment,
    Header,
    Pagination, 
    Icon,
    TextArea,
    Form
} from 'semantic-ui-react'

//Components
import LogHeader from './components/logana-header'
import LoganaMenu from './components/logana-menu'
import LoganaApplications from './components/logana-application'
import LoganaLogs from './forumlog/logana-logs'

class LoganaPanel extends React.Component {
  constructor(props){
    super(props);

    //Getting TOKEN
    const elToken = document.getElementById("logana-token");
    let token = null;
    if(elToken!==null) {
        token = elToken.innerText;
        elToken.remove();
    }
    else 
        token = null;
    
    this.state = {
        ...this.state,
        logana_token: ((token!==null) ? token : "REACT-TESTING"),
        current_log: {}, //Request API to get the registry
        editor: {} //connectEditor populated when editor changes
    }
  }

  connectEditor(obj){
      console.log('connect');
  }

  render(){

    const itemClick= (e, {name}) => {
        if(["home","canneds"].indexOf(name)>-1){
            this.setState({activeItem:name});
        }
        console.log(browserHistory);
    }

    const createLog = (e, d) => {
        const data = new FormData();
        data.append('token', this.state.logana_token);
        data.append('title', 'Log Test');
        data.append('url', 'https://testing.bleepingcomputer.com/log/log-test');
        data.append('forum', 1);

        axios.post('/log/create', data).then((resp)=>{
            console.log("ok")
        });
    }

    const getLog = (e, d) => {
        axios.get('/log/getlog', {
            params:{
                pk: 4,
                token: this.state.logana_token
            }
        }).then((r)=>{
            console.log('Response::');
            console.log(r);

            console.log('GETLOG=>OK');
        });
    }

    const btnClick = (e) => {
        const txt = this.txtarea;

        console.log(txt.ref.value);
        console.log(window.getSelection());
        console.log(txt.value.substr(txt.selectionStart, txt.selectionEnd));
    }

    return (
        <Router baseName='/' 
                history={browserHistory}
        >
            <div id='routerChild' style={{margin:'5px'}}>
                <LogHeader />
                <LoganaMenu />

                <Switch>
                    <Redirect from='/login' to='/' />

                    <Route 
                        exact path='/' 
                        name="home"
                        token={this.state.logana_token}
                        render={()=>(
                            <div>
                                <LoganaApplications />
                                {/*<LoganaLogs token={this.state.logana_token} />*/}
                            </div>
                        )}
                    />
                    
                    <Route 
                        exact path='/log' 
                        name = "log"
                        render={()=>(
                            <LoganaLogs token={this.state.logana_token} />
                        )}
                    />

                    <Route path='/canneds' 
                        render={() => (
                            <Segment>
                                <Header as='h1'> CANNEDS </Header>
                            </Segment>
                        )}
                    />
                    
                    <Route path='/login' exact
                        render={()=>(
                            <div>
                                <h1> Login page! </h1>
                            </div>
                        )}
                    />

                </Switch>
            </div>
        </Router>
    );
  }
}

export default LoganaPanel;


/*

render={() => (
                        <div>
                            Your token: {this.state.logana_token} <br/>
                            <Button onClick={createLog}> Create LOG </Button><br/><br/>
                            <Button onClick={getLog}> Get LOG </Button>
                            <br/><br/>
                            <Form>
                                <label>Description:</label>
                                <TextArea ref={(i)=>{
                                    this.txtarea = i;
                                }} placeholder='Say my name!' />
                                <Button color='red'
                                        icon
                                        onClick={btnClick}> 
                                    <Icon name='world' />
                                    Add me 
                                </Button>
                            </Form>
                        </div>
                    )}

*/