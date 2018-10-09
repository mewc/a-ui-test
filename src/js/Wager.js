import React, { Component } from 'react';
import '../css/App.css';
import Paper from "@material-ui/core/Paper/Paper";
import {withStyles} from "@material-ui/core";
import WagerHeadToHeadSummary from "./WagerHeadToHeadSummary";
import WagerBreakdowns from "./WagerBreakdowns";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import purple from "@material-ui/core/es/colors/purple";
import Grid from "@material-ui/core/Grid/Grid";
import WagerHistory from "./WagerHistory";
import Divider from "@material-ui/core/Divider/Divider";


let styles = theme => ({
    root: {
        padding: '20px'
    },
});

class Wager extends Component {
    constructor(props){
        super(props);
        this.state={
            average: 14,
            wins: 2,
            total: 4,
            earnings: -32,
            size: 20
        }
    }
    render() {
        let {classes} = this.props;
        return <React.Fragment>
            <Paper className={classes.root}>
                <WagerHeadToHeadSummary/>
            </Paper>
        <WagerBreakdowns/>
        <Divider/>
        <WagerHistory/>
        </React.Fragment>
    }
}

export default withStyles(styles)(Wager);