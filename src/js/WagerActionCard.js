import React, { Component } from 'react';
import '../css/App.css';
import {withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";


let styles = theme => ({
    root: {
        padding: '20px'
    },
});

class WagerActionCard extends Component {
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