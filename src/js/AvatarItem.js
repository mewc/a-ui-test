import React, { Component } from 'react';
import '../css/App.css';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";





class AvatarItem extends Component {
    render() {
        return <Grid item>
            <Avatar alt={'person'} {...this.props}/>
            {(this.props.name)?<Typography>
                this.props.name
            </Typography>:''}
        </Grid>
    }
}

export default AvatarItem;