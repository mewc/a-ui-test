import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar/Avatar";
import ta from 'time-ago';
import person1 from '../assets/1.jpg'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '15px 15px 40px 15px',
        width: '70%',
        float: 'right',
        border: '5px solid transparent',
        borderImage: 'linear-gradient(to bottom, #3acfd5 22%, #3a4ed5 100%)',
        borderImageSlice: 1,

},
    avatar: {
        margin: '10px',
    },
});

class FeedCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            winner: props.status
        }
    }

    render() {
        const {classes} = this.props;
        console.log(this.props);

        return <div>
            <Paper className={classes.root} elevation={1}>
                <Avatar alt={'person'}><person1/></Avatar>
                <Typography variant="h5" component="h5">
                    {this.props.item.for}
                </Typography>
                <Typography variant="p" component="subtitle">
                    {this.props.item.participants[0].name + ' vs ' + this.props.item.participants[1].name}
                </Typography>
                <Typography variant="subheading">
                    {ta.ago(new Date()-this.props.item.timestamp)}
                </Typography>
            </Paper>
        </div>

    }

    propTypes = {
        classes: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired,
    };

}
export  default withStyles(styles)(FeedCard);