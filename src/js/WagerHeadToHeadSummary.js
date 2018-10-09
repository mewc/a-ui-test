import React, { Component } from 'react';
import '../css/App.css';
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import AvatarItem from "./AvatarItem";
import Typography from "@material-ui/core/Typography/Typography";


let styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        height: '30%',
        flexGrow: 1,
    },
    avatar: {
        margin: '10px',
    },
});

class WagerHeadToHeadSummary extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return <React.Fragment>
                <Grid container spacing={0} direction={"row"} alignItems={"center"} justify={"space-around"} >
                    <Grid item xs={0} >
                        <AvatarItem src={'/1.jpg'} />
                        <Typography>
                            Ron Davis
                        </Typography>
                    </Grid>
                    <Grid item xs={0}>
                        vs
                    </Grid>
                    <Grid item xs={0} justify={"left"}>
                        <AvatarItem src={'/2.jpg'}/>
                        <Typography>
                            George Churchill
                        </Typography>
                    </Grid>
                </Grid>
        </React.Fragment>
    }
}

export default withStyles(styles)(WagerHeadToHeadSummary);