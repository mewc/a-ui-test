import React, { Component } from 'react';
import '../css/App.css';
import {BottomNavigation, BottomNavigationAction, AppBar, Typography, IconButton, Toolbar} from '@material-ui/core'
import {AssignmentOutlined, Add, LibraryAddOutlined, PersonOutlined, ChatBubbleOutline, ArrowBackIos} from '@material-ui/icons'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 0,
            title: "feed"
        }
    }
  render() {
      const styles = {
          root: {
              flexGrow: 1,
          },
          grow: {
              flexGrow: 1,
          },
          menuButton: {
              marginLeft: -12,
              marginRight: 20,
          },
      };
    return (
      <div className="App">
          <AppBar position="static">
              <Toolbar>
                  <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                      <ArrowBackIos />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={styles.grow}>
                      {this.state.title}
                  </Typography>
              </Toolbar>
          </AppBar>

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
