import React, { Component } from 'react';
import '../css/App.css';
import AddIcon from '../assets/addIcon.svg';
import {BottomNavigation, BottomNavigationAction, AppBar, Typography, IconButton, Toolbar} from '@material-ui/core'
import {AssignmentOutlined, LibraryAddOutlined, PersonOutlined, ChatBubbleOutline, ArrowBackIos} from '@material-ui/icons'
import Icon from "@material-ui/core/Icon/Icon";
import Feed from "./Feed";

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
          root: {marginLeft: -12, marginRight: 15}
      };
    return (
      <div className="App">
          <AppBar position="static">
              <Toolbar>
                  <IconButton classes={styles.root} color="inherit" aria-label="Menu">
                      <ArrowBackIos />
                  </IconButton>
                  <Typography variant="h6" color="inherit" >
                      {this.state.title}
                  </Typography>
              </Toolbar>
          </AppBar>

          {<Feed/>}

          <BottomNavigation className={"BottomNav"}>
              <BottomNavigationAction label="Feed" value="0" icon={<AssignmentOutlined/>} tabIndex={0} />
              <BottomNavigationAction label="Log" value="1" icon={<LibraryAddOutlined/>} tabIndex={1} />
              <BottomNavigationAction label="New" value="2" icon={<Icon><img src={AddIcon} alt={'add'}/> </Icon>} tabIndex={2} classes={styles.addBtn} />
              <BottomNavigationAction label="Chat" value="3" icon={<ChatBubbleOutline/>} tabIndex={3}/>
              <BottomNavigationAction label="Profile" value="4" icon={<PersonOutlined/>} tabIndex={4}/>
          </BottomNavigation>
      </div>
    );
  }
}

export default App;
