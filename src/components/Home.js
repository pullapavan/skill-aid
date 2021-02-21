import React from 'react'
import HeroBanners from './HeroBanners'
import ImageCards from './ImageCards'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import WhoAreWe from "./WhoAreWe"
import Technologies from './Technologies'
import { useCustomStyles } from "../utils/styles";
import SocialShare from './SocialShare';
import InstaPosts from './InstaPosts';
import Testimonials from './Testimonials';

export default function Home() {

    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <HeroBanners></HeroBanners>
                </Grid>
            </Grid>
            <CssBaseline />
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
                    <ImageCards></ImageCards>
                </Grid>
            </Grid>


            <Grid container direction="column" className={classes.tech_back}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Technologies></Technologies>
                </Grid>
            </Grid>


            <Grid container direction="column"
                justify="center" className={classes.social_background}
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <InstaPosts></InstaPosts>
                </Grid>
            </Grid>


            <Grid container direction="column"
                justify="center" className={classes.testimonial_main}
                alignItems="center" spacing={1}>
                <Grid item xs={10} md={10} sm={10}>
                    <Testimonials></Testimonials>
                </Grid>
            </Grid>

            <Grid container direction="column"
                justify="center" className={classes.social_background}
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <h2>Find us on</h2>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <SocialShare></SocialShare>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
