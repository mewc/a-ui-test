import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar/Avatar";
import ta from 'time-ago';
import person1 from '../assets/1.jpg'
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


let styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '15px 15px 40px 15px',
        width: '70%',
        float: 'right',
        border: '2px solid transparent',
        borderImage: 'linear-gradient(to right, rgba(177,222,247,1) 0%, rgba(32,124,229,1) 100%)',
        borderImageSlice: 1,
        flexGrow: 1
    },
    avatar: {
        margin: '10px',
    },
});

class FeedCard extends React.Component {

    constructor(props) {
        super(props);
        let color = {
            red: 'linear-gradient(to right, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 28%, rgba(240,47,23,1) 89%, rgba(231,56,39,1) 100%)',
            blue: 'linear-gradient(to right, rgba(139,195,247,1) 0%, rgba(32,124,229,1) 100%)',
            gr: ' linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%)',
            org: 'linear-gradient(to right, rgba(255,175,75,1) 0%, rgba(255,146,10,1) 100%)',
        };
        switch (this.props.item.status) {
            case "accepted":
                color = color.blue;
                break;
            case "complete":
                color = color.gr;
                break;
            case "challenged":
                color = color.org;
                break;
            case "lost":
                color = color.red;
                break;
            default:
                break;

        }
        this.state = {
            winner: props.status,
            gradient: color,
        }
    }



    buttonRenderer = () => {
        return <Button variant={'contained'} style={{background: this.state.gradient}}>
            {this.props.item.status}
        </Button>
    }

    render() {
        const {classes} = this.props;

        return <div>
            {(this.state.gradient)?
            <Paper styles={{borderImage: this.state.gradient}} className={classes.root} elevation={1}>
                <Grid container spacing={16}>
                    <Grid container item xs={4}>
                        <Grid item>
                            {(this.props.item.status === "challenged")?
                                [<Grid container xs={12}>
                                    <Grid item><Avatar alt={'person'} src={'/1.jpg'}/></Grid>,
                                    <Grid item ><Avatar alt={'person'} src={'/2.jpg'} style={{marginLeft: '-12px'}}/></Grid>
                                </Grid>]
                            :
                            <Avatar alt={'person'} src={'/1.jpg'}/>}
                        </Grid>
                        <Grid item xs>
                            {this.buttonRenderer()}
                        </Grid>
                    </Grid>
                    <Grid container item xs>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h5">
                                {this.props.item.for}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" component="subtitle">
                                {this.props.item.participants[0].name + ' vs ' + this.props.item.participants[1].name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption">
                                {ta.ago(new Date() - this.props.item.timestamp)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>:''}
        </div>

    }

    propTypes = {
        classes: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired,
    };

}

export default withStyles(styles)(FeedCard);