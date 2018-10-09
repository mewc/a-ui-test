import React, { Component } from 'react';
import '../css/App.css';
import data from '../assets/testFeedData';
import FeedCard from "./FeedCard";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";


let styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '15px 15px 40px 15px',
        width: '70%',
        float: 'right',
        border: '2px solid transparent',
        borderImage: 'linear-gradient(to right, rgba(177,222,247,1) 0%, rgba(32,124,229,1) 100%)',
        borderImageSlice: 1,
        flexGrow: 1,
        padding: '10px'
    },
    avatar: {
        margin: '10px',
    },
});

class Wager extends Component {
    render() {
        return <React.Fragment>
            <Paper>
                <Grid>

                </Grid>
            </Paper>
        </React.Fragment>
    }
}

export default withStyles(styles)(Wager);