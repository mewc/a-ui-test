import React, {Component} from 'react';
import '../css/App.css';
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import purple from "@material-ui/core/es/colors/purple";
import red from "@material-ui/core/es/colors/red";
import green from "@material-ui/core/es/colors/green";
import Typography from "@material-ui/core/Typography/Typography";


class WagerHeadToHeadSummary extends Component {
    constructor(props) {
        super(props);
        //avg,wins,total,earnings

        this.state = {
            average: 14,
            wins: 2,
            total: 4,
            earnings: -32,
            size: 40,
            thickness: 6,
        }
    }

    render() {
        return <div >
            <Grid container spacing={40} direction={"row"} style={{padding: '40px'}}>
                <Grid item>
                    <CircularProgress variant={"determinate"} value={this.state.average} size={this.state.size}
                                      thickness={this.state.thickness}/>
                    {this.state.average}
                </Grid>
                <Grid item>
                    <CircularProgress variant={"static"} value={this.state.total} size={this.state.size}
                                      thickness={this.state.thickness}/>
                    {this.state.wins}
                </Grid>
                <Grid item>
                    <CircularProgress variant={"static"} value={100} size={this.state.size}
                                      thickness={this.state.thickness}/>
                    {this.state.total}
                </Grid>
                <Grid item>
                    <CircularProgress variant={"static"} value={100} size={this.state.size}
                                      style={{color: (this.state.earnings > 0) ? green[500] : red[500]}}
                                      thickness={this.state.thickness}/>
                    ${this.state.earnings}
                </Grid>
            </Grid>
        </div>
    }
}

export default (WagerHeadToHeadSummary);