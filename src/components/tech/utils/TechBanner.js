import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useCustomStyles } from "../../../utils/styles";
import { Carousel } from 'react-responsive-carousel';



export default function TechBanner(props) {

    const classes = useCustomStyles();

    return (
        <Grid container direction="column" className={classes.white_background}
            justify="center"
            alignItems="center" spacing={1}>
            <Grid item xs={12} md={12} sm={12}>
                <Carousel>
                    <div>
                        <img src={props.imgUrl}/>
                    </div>
                </Carousel>
            </Grid>
        </Grid>
    )
}
