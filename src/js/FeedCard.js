import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar/Avatar";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: '15px',
        paddingBottom: '15px',
        margin: '15px',
        width: '70%',
        float: 'right',
    },
});

class FeedCard extends React.Component {

    render() {
        const {classes} = this.props;
        console.log(this.props);

        return <div>
            <Paper className={classes.root} elevation={1}>
                <Avatar></Avatar>
                <Typography variant="h3" component="h3">
                    {this.props.item.for}
                </Typography>
                <Typography variant="h5" component="h3">
                    {this.props.item.participants[0].name + ' vs ' + this.props.item.participants[1].name}
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