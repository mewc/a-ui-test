import React, {Component} from 'react';
import '../css/App.css';
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import data from '../assets/testFeedData';
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";


const styles = theme => ({
    progress: {
        margin: '50px',
    },
});

class WagerHistory extends Component {
    constructor(props) {
        super(props);
        //avg,wins,total,earnings
        let data = {
            average: 14,
            wins: 2,
            total: 4,
            earnings: -32
        };
        this.state = {
            data,
            size: 20
        }
    }

    render() {
        let {classes} = this.props;
        return <div>
            <Grid container>
                        <Typography variant={"caption"} style={{padding: '10px'}}>Wager History</Typography>
                <Grid item xs={12}>
                    {data.feed.map((item,i) => {
                        return <Paper style={{height: '50px', width: '80%', margin: '20px'}}>
                            <Grid container direction={'row'} spacing={24}>
                                <Grid item xs={8}>
                                    <Typography variant={"subtitle1"}>{item.for}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant={"subheading"} color={(item.value > 0)?green[500]:red[500]}>${item.value}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    })};
                </Grid>
            </Grid>
        </div>
    }
}

export default withStyles(styles)(WagerHistory);