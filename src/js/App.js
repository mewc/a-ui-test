import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import {BottomNavigation, BottomNavigationAction, AppBar, Typography, IconButton, Toolbar, Button} from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <BottomNavigation className={"BottomNav"}>
              <BottomNavigationAction label="Feed" value="0" icon={<AssignmentOutlined/>} />
              <BottomNavigationAction label="Log" value="1" icon={<LibraryAddOutlined/>} />
              <BottomNavigationAction label="New" value="2" icon={<Add/>} />
              <BottomNavigationAction label="Chat" value="3" icon={<ChatBubbleOutline/>} />
              <BottomNavigationAction label="Profile" value="4" icon={<PersonOutlined/>} />
          </BottomNavigation>
      </div>
    );
  }
}

export default App;
