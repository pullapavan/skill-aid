import React from 'react'
import Grid from '@material-ui/core/Grid';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Avatar } from '@material-ui/core';
import { useCustomStyles } from '../utils/styles';
import { makeStyles, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { IconButton } from '@material-ui/core';



export default function Testimonials() {

    const classes = useCustomStyles()

    const options = {
        loop: true,
        margin: 10,
        // nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }

    const members = [{
        name: "Pulla Pavan Kumar",
        body: "SkillAid was very helpful for me to gain industry level Standards",
        role: "Full Stack Developer",
        img: "/images/pavan.jpg"
    },
    {
        name: "Pulla Pavan Kumar",
        body: "SkillAid was very helpful for me to gain industry level Standards",
        role: "Full Stack Developer",
        img: "/images/pavan.jpg"
    },
    {
        name: "Pulla Pavan Kumar",
        body: "SkillAid was very helpful for me to gain industry level Standards",
        role: "Full Stack Developer",
        img: "/images/pavan.jpg"
    },
    {
        name: "Pulla Pavan Kumar",
        body: "SkillAid was very helpful for me to gain industry level Standards",
        role: "Full Stack Developer",
        img: "/images/pavan.jpg"
    },
    {
        name: "Pulla Pavan Kumar",
        body: "SkillAid was very helpful for me to gain industry level Standards",
        role: "Full Stack Developer",
        img: "/images/pavan.jpg"
    }]

    return (
        <React.Fragment>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <h2 className={classes.custom_header_red}>Testimonials</h2>
                </Grid>
            </Grid>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <OwlCarousel margin={10} {...options}>
                        {
                            members.map((member, i) => {
                                return <div className="item" key={i} className={classes.testimonial}>
                                    <Grid container direction="column"
                                        justify="center"
                                        alignItems="center" spacing={1}>
                                        <Grid item xs={12} md={12} sm={12}>
                                            <IconButton style={{ background: "#006db875", color: "white" }}>
                                                <FormatQuoteIcon />
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} className={classes.testimonialContent}>
                                            <Typography variant="body1">
                                                {member.body}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12}>
                                            <IconButton>
                                                <Avatar className={classes.test_avatar} src={member.img}></Avatar>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} className={classes.testimonialContent}>
                                            <Typography variant="body1">
                                                {member.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12} sm={12} className={classes.testimonialContent}>
                                            <Typography variant="body1">
                                                {member.role}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
