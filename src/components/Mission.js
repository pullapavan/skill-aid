import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}))

export default function Mission() {

    const classes = useStyles();

    return (
        <Grid container direction="row"
            justify="space-around"
            alignItems="center" spacing={1}>
            <Grid item xs={3} md={2} sm={1} lg={2}>
                <Avatar alt="Mission" src="/images/mission.png" className={classes.large} />
            </Grid>
            <Grid item xs={7} md={7} sm={7} lg={8}>
                <div>
                    <h1>Mission</h1>
                </div>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </Grid>
        </Grid>
    )
}
