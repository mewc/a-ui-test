import React, { Component } from 'react';
import '../css/App.css';
import data from '../assets/testFeedData';
import FeedCard from "./FeedCard";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import AvatarItem from "./AvatarItem";


let styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        width: '100%',
        height: '30%',
        flexGrow: 1,
        padding: '30px'
    },
    avatar: {
        margin: '10px',
    },
});

class Wager extends Component {
    render() {
        let {classes} = this.props;
        return <React.Fragment>
            <Paper className={classes.root}>
                <Grid container spacing={12} justify={'center'}>
                    <Grid item xs>
                        <AvatarItem src={'/1.jpg'} />
                    </Grid>
                    <Grid item xs>
                        vs
                    </Grid>
                    <Grid item xs>
                        <AvatarItem src={'/2.jpg'}/>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    }
}

export default withStyles(styles)(Wager);