import Grid from '@material-ui/core/Grid'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import { IconButton, Typography } from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SchoolIcon from '@material-ui/icons/School';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import EventIcon from '@material-ui/icons/Event';
import ForumIcon from '@material-ui/icons/Forum';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
    icon_button: {
        background: "#ffc400"
    },
    icon: {
        color: "white"
    },
    center: {
        textAlign: "center"
    }

}));


export default function CoreValues() {

    const classes = useStyles();

    return (
        <React.Fragment>

            <Grid container direction="row" className={classes.center}
                justify="space-around"
                alignItems="center" spacing={2}>
                <Grid item xs={12} md={12} sm={12}>
                    <h2>
                        Reasons to Choose us
                    </h2>
                </Grid>
            </Grid>


            <Grid container direction="row" className={classes.center}
                justify="space-around"
                alignItems="center" spacing={2}>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <BusinessIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Companies are building
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <DirectionsRunIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        World’s moving forward.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <SchoolIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        School people (primary) are learning software skills.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <BusinessIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Catching up with the pace of this world is hard, we make sure you’re still in race.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <FormatUnderlinedIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        I hear and I forget, I see and I remember, I do and I understand-Confucius.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <EventIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Our application oriented learning methods helps immensely in mastering conceptual skills through its practical implementations.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <ForumIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Our course modules and frameworks has been developed (prepared) taking into account of feedback and suggestion coming directly from industry experts. Which is helping SKILLAID to provide training to its participants according to current industry standards and employer demands!!!
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <GroupAddIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Our team has a word “passion” in common we’re passionate creators, builders, analysts.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <WbIncandescentIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        Whatever we do we infuse our passion and creativity into it.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <BusinessIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        At SKILLAID diversified and dedicated team of professionals have expertise in providing supreme training services to the participants.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={4}>
                    <IconButton size="medium" className={classes.icon_button}>
                        <ContactMailIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <Typography>
                        • Whether it’s a 30day internship/8day internship.
                        Whether it’s a 3day workshop or certification course/or industrial visit.
                        We’re got you covered!!!
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

