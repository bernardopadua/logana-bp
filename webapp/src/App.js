import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import { Button, Menu, Segment, Header } from 'semantic-ui-react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import LogHeader from './Header'
import BBCodeParser from './utils/bbcode-parser'

class AppTest extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "Uno",
      abc: "Duno"
    }
  }

  render(){
    
    const itemClick= (e, {name, abc}) => {
      this.setState({name: name});
      console.log(name);
      console.log(abc);
    }

    const clickMe = () => { console.log('click'); };

    const { name } = this.state;

    const text = `as[b]asa  asas[/b]asas   _____  asa[i]sas[/i]a
     
    [LIST]
    [*]asasas
    [LIST]
    [*]asasa[/*]
    [/LIST]
    [/*]
    [*]asasa[/*]
    [/LIST]
     
    as[size=5]asas[/size]
     
    [size=5][color=#ff0000]asasasasas[/color]asasasas[/size]`;

    const bbp  = new BBCodeParser(text);

    bbp.testMe();

    return (
      <Router>
        <div id='routerChild' style={{margin:'5px'}}>
          <LogHeader PleaseClick = {clickMe} />
          <Menu pointing>
            <Link to='/'> 
              <Menu.Item name="home" abc="uno" active onClick={itemClick}/> 
            </Link>
            <Link to='/canneds'>
              <Menu.Item name="canneds" abc="duno" onClick={itemClick}/>
            </Link>
            <Menu.Item name="logs" abc="trio" onClick={itemClick}/>
          </Menu>

          <Route exact path='/' render={ () => (
            <Segment>
              aaaaaa
            </Segment>
          ) } />
          <Route path='/canneds' render={ () => (
            <Segment>
              <Header as='h1'> CANNEDS </Header>
            </Segment>
          ) } />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <AppTest />,
  document.getElementById('app')
);