import React, { Component } from 'react';
import '../css/App.css';
import AddIcon from '../assets/addIcon.svg';
import {BottomNavigation, BottomNavigationAction, AppBar, Typography, IconButton, Toolbar} from '@material-ui/core'
import {AssignmentOutlined, LibraryAddOutlined, PersonOutlined, ChatBubbleOutline, ArrowBackIos} from '@material-ui/icons'
import Icon from "@material-ui/core/Icon/Icon";
import Feed from "./Feed";
import Wager from "./Wager";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 1,
            title: "feed"
        }
    }

    renderTab = () => {
        console.log(this.state.activeIndex);

        switch(this.state.activeIndex){
            case 0:
                return <Feed/>;
            case 1:
                return <Wager/>;
            case 2:
                return <p>new bet coming eventually</p>;
            case 3:
                return <p>chat coming eventually</p>;
            case 4:
                return <p>Made by Michael Carter - m@mewc.info</p>;
            default:
                return <Feed/>;
        }
    };

    click(a){
        let title = [{title: 'feed'},
            {title: 'stats'},
            {title: 'new'},
            {title: 'chat'},
            {title: 'profile'}];

        this.setState({
            ...this.state,
            activeIndex: a,
            title: title[a].title
        });
    }

  render() {
      const styles = {
          root: {marginLeft: '-12', marginRight: '15'}
      };
    return (
      <div className="App" >
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

          {this.renderTab()}

          <BottomNavigation className={"BottomNav"}>
              <BottomNavigationAction label="Feed" value="0" icon={<AssignmentOutlined/>} tabIndex={0} onClick={() => this.click(0)} />
              <BottomNavigationAction label="Log" value="1" icon={<LibraryAddOutlined/>} tabIndex={1} onClick={() => this.click(1)} />
              <BottomNavigationAction label="New" value="2" icon={<Icon><img src={AddIcon} alt={'add'}/> </Icon>} tabIndex={2} classes={styles.addBtn} onClick={() => this.click(2)} />
              <BottomNavigationAction label="Chat" value="3" icon={<ChatBubbleOutline/>} tabIndex={3} onClick={() => this.click(3)} />
              <BottomNavigationAction label="Profile" value="4" icon={<PersonOutlined/>} tabIndex={4} onClick={() => this.click(4)} />
          </BottomNavigation>
      </div>
    );
  }
}

export default App;
