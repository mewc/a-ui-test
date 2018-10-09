import React, {Component} from 'react';
import '../css/App.css';
import data from '../assets/testComments';
import Paper from "@material-ui/core/Paper/Paper";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Person from '@material-ui/icons/PersonOutlined';
import Icon from "@material-ui/core/Icon/Icon";
import Grid from "@material-ui/core/Grid/Grid";


class Chat extends Component {
    render() {
        return <Paper>
            <Card style={{width: '80%', margin: '0px auto', padding: '20px'}}>
                <CardContent>
                    <Typography variant={"h4"}>Comments {data.comments.length}</Typography>
                </CardContent>
                <CardContent>
                    <TextField multiline rows={2} fullWidth  label={'type your comment'}> </TextField>
                </CardContent>
                {data.comments.map((item, i) => {
                        return <CardContent>
                            <Grid container direction={'row'} spacing={40}>
                                <Grid item>
                                    <Icon><Person/></Icon>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.user}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography component="p" align={'left'}>
                                {item.comment}
                            </Typography>
                        </CardContent>
                    }
                )}
            </Card>
        </Paper>
    }
}

export default Chat;