import React from 'react'
import WhoAreWe from './WhoAreWe'
import Grid from '@material-ui/core/Grid';
import { useCustomStyles } from "../utils/styles";
import CoreValues from './CoreValues'
import SocialShare from './SocialShare';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroBanners from './HeroBanners';




export default function AboutUs() {

    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Carousel>
                        <div>
                            <img src="/images/mission_vision.jpg" />
                        </div>
                    </Carousel>
                </Grid>
            </Grid>
            <Grid container direction="column"
                justify="center" className={classes.home_section2_background}
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <WhoAreWe></WhoAreWe>
                </Grid>
            </Grid>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <CoreValues></CoreValues>
                </Grid>
            </Grid>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <h2>Find Us on</h2>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <SocialShare></SocialShare>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
