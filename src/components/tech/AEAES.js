import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useCustomStyles } from "../../utils/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import StarsIcon from '@material-ui/icons/Stars';


export default function AEAES() {
    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Carousel>
                        <div>
                            <img src="/images/aeaes.jpg" />
                        </div>
                    </Carousel>
                </Grid>
            </Grid>
            <CssBaseline />
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <h1>Course Details</h1>
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={11} md={10} sm={10} lg={8}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Overview</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                In this workshop students will learn the various aspects of Automotive
                                Engines. Students get hands-on training on disassembly and assembly
                                of two and four wheeler engines and powertrain systems. They also get
                                an insight into the various Automotive Electronic Systems.
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>The Internship is divided into 3 segments</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div>
                                    <ArrowForwardIcon fontSize="small" color="primary" />&nbsp;Automotive Engines Classwork
                                </div>
                                <div>
                                    <ArrowForwardIcon fontSize="small" color="primary" />&nbsp;Engine disassembly and assembly workshop
                                </div>
                                <div>
                                    <ArrowForwardIcon fontSize="small" color="primary" />&nbsp;Automotive Electronic Systems Classwork
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>CLASSWORK</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                In this classwork students will learn the mechanical basics of IC Engines
                                and their associated systems. They also learn the combustion
                                phenomena in SI & CI Engines and different fuel injection technologies.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>ENGINE DISASSEMBLY AND ASSEMBLY WORKSHOP</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                In this workshop students will get hands-on learning on disassembly and
                                assembly of two and four wheeler engines and various powertrain
                                components.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>


                <Grid container direction="column" className={classes.white_background}
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={11} md={10} sm={10} lg={8}>
                        <h2>AUTOMOTIVE ELECTRONIC SYSTEMS CLASSWORK</h2>
                    </Grid>
                    <Grid item xs={11} md={10} sm={10} lg={8}>
                        <Typography>
                            In this classwork students will learn about various automotive electronic
                            systems and their working.This is divided into 3 areas of Automotive
                            Electronics.
                        </Typography>
                    </Grid>
                </Grid><br></br><br></br><br></br>


                <Grid container direction="column" className={classes.white_background}
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={9} md={9} sm={9} lg={8}>
                        <Typography>
                            <u><b>Engine Electronics</b></u>: <p>In this classwork students will learn about various automotive electronic
                            systems and their working.This is divided into 3 areas of Automotive
                            Electronics.</p>
                        </Typography>
                    </Grid>
                    <Grid item item xs={9} md={9} sm={9} lg={8}>
                        <Typography>
                            <u><b>Vehicle Electronics</b></u>:  <p>In this classwork students will learn about various automotive electronic
                            systems and their working.This is divided into 3 areas of Automotive
                            Electronics.</p>
                        </Typography>
                    </Grid>
                    <Grid item item xs={9} md={9} sm={9} lg={8}>
                        <Typography>
                            <u><b>Driver Assistance Systems</b></u>:  <p>In this classwork students will learn about various automotive electronic
                            systems and their working.This is divided into 3 areas of Automotive Electronics.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={11} md={10} sm={10} lg={8}>
                    <h2><u>Project and Presentation</u></h2>
                </Grid>
                <Grid item xs={11} md={10} sm={10} lg={8}>
                    <Typography>
                        Interns will be divided into teams and are assigned a problem statement
                        in which they work and apply their learning from the workshop to solve a
                        given problem. Students will then present their findings among their
                        fellow interns and the expert.
                        </Typography>
                </Grid>
            </Grid>

            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={11} md={10} sm={10} lg={8}>
                    <Typography>
                        <div>
                            <ArrowForwardIcon fontSize="small" color="primary" />&nbsp;Best Teams will be selected and awarded "Winners Certificate".
                                </div>
                        <div>
                            <ArrowForwardIcon fontSize="small" color="primary" />&nbsp;Best Students who perform well throughout the Program will get
“Best Intern Award” and “Certificate of Excellence”.
                                </div>
                    </Typography>
                </Grid>
            </Grid><br></br><br></br>

            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
               
                <Grid item xs={11} md={10} sm={10} lg={8}>
                    <Typography>
                        <StarsIcon color="primary" />&nbsp;SkillAid has all the rights to modify the aspects of the coursework
depending on the expert’s availability without prior notification.
                        </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
