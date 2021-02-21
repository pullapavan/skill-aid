import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Mission from './Mission'
import Vission from './Vission'


const useStyles = makeStyles((theme) => ({
    custom_header_red: {
        fontFamily: "Lucida Console, Courier New monospace",
        color: "#b31616"
    },
    custom_header_blue: {
        fontFamily: "Lucida Console, Courier New monospace",
        color: "blue"
    },
    background : {
        backgroundImage : "url('/images/mission_vision.jpg')"
    }

}));

export default function WhoAreWe() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Grid container direction="column"
                justify="center" 
                alignItems="center" spacing={2}>
                <Grid item xs={12} md={12} sm={12}>
                    <h1><span className={classes.custom_header_red}>Who</span> <span className={classes.custom_header_blue}>Are</span> <span className={classes.custom_header_red}>We?</span></h1>
                </Grid>
            </Grid>
            <Mission></Mission>
            <Vission></Vission>
        </React.Fragment>
    )
}
