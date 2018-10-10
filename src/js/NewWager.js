import React, { Component } from 'react';
import '../css/App.css';
import Paper from "@material-ui/core/Paper/Paper";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import NameData from '../assets/names';
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Button from "@material-ui/core/Button/Button";


let styles = theme => ({
    root: {
        padding: '20px'
    },
});

class Wager extends Component {

    constructor(props){
        super(props);
        this.state = {names: [], selected: false};
    }

    nameFinder = (e) => {
        let input = e.target.value;
        let filteredNames = NameData.names.filter(name =>
            name.first.indexOf(input) === 0);
        this.setState({...this.state, names: filteredNames, value: input});

    }

    select = (item) => {
        this.setState({...this.state, selected: item});

    }

    render() {
        let {classes} = this.props;
        return <React.Fragment>
            <Typography>I Bet</Typography>
            <TextField
                onChange={this.nameFinder}
                value={(this.state.selected)?this.state.selected.first:this.state.value}
                disabled={(this.state.selected)}
            />
            {(this.state.selected)?'':
            <List>
                {this.state.names.map((i, k) => {
                    return <ListItem key={k}><Button onClick={() => this.select(i)}>{i.first}</Button></ListItem>;
            })}
            </List>}


        </React.Fragment>
    }
}

export default withStyles(styles)(Wager);