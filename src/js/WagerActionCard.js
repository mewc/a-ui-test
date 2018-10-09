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
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";


let styles = theme => ({
    root: {
        padding: '20px'
    },
});

class WagerActionCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <React.Fragment>
            <Card>
                <CardContent>
                    <Typography>Wager Action Swipey Card Thingy is not ready</Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    }
}

export default withStyles(styles)(WagerActionCard);