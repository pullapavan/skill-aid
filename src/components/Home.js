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
import Queries from './Queries';

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
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <ImageCards></ImageCards>
                </Grid>
            </Grid>
            <CssBaseline />

            <Grid container direction="column" className={classes.query_back}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Queries></Queries>
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


function increase(){
    var $rangeInput = $('.range input'),
    var value =  $rangeInput.val();
    if(value == 4){
       return;
    }
    $rangeInput.val(value + 1).trigger('input');

}

function decrese(){
    var $rangeInput = $('.range input'),
    var value =  $rangeInput.val();
    if(value == 0){
       return;
    }
    $rangeInput.val(value - 1).trigger('input');

}