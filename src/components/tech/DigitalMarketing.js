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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';



export default function DigitalMarketing() {
    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Carousel>
                        <div>
                            <img src="/images/g3.jpg" />
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
                <Grid item xs={11} md={11} sm={11} lg={11}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>What is digital marketing?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Digital marketing is a process of leveraging different online marketing channels like search engines, social media networks, and email to reach your target audience.
                                <br></br>
                                <br></br>
                                Digital marketing has a number of types, the most important are website marketing, search engine optimization, content marketing, PPC advertising, social media marketing, email marketing, video marketing, and affiliate marketing
                           </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>What do you learn?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                It brings us a platform with diverse information & provides the common language for the devices and apps to communicate with each other. This platform integrates the data and applies analytics to share the most valuable information with applications that address industry specific needs with minimizing the human efforts.
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Technologies you will learn</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <ListItem button>
                                    <ListItemText inset primary="SEO" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Social media marketing" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Online advertisements" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Google analytics" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <br></br>
                <Grid container direction="column" className={classes.white_background}
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={11} md={11} sm={11}>
                        <Typography>
                            <StarIcon />&nbsp;By the end of this course, you will be confidently implementing marketing strategies across the major online marketing channels.
                       </Typography>
                    </Grid>
                </Grid>


                <Grid container direction="column" className={classes.white_background}
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={12} md={12} sm={12}>
                        <h1>Training Process</h1>
                    </Grid>
                </Grid>

                <Grid container direction="column" className={classes.white_background}
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item xs={11} md={11} sm={11} lg={11}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="center">Day 1</TableCell>
                                        <TableCell align="center">Day 2</TableCell>
                                        <TableCell align="center">Day 3</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key="iot1">
                                        <TableCell component="th" >
                                            Pre-lunch
                                        </TableCell>
                                        <TableCell align="left">
                                            <span>
                                                Introduction to Iot
                                                Brief points on technology used
                                                Team formations & assignment of projects
                                           </span>
                                        </TableCell>
                                        <TableCell align="left">Hands-on</TableCell>
                                        <TableCell align="left">Presentations by students</TableCell>
                                    </TableRow>
                                    <TableRow key="iot2">
                                        <TableCell component="th" scope="row">
                                            Post-lunch
                                        </TableCell>
                                        <TableCell align="left">
                                            <span>
                                                Hands-on experience And explanation of few industry concepts
                                           </span>
                                        </TableCell>
                                        <TableCell align="left">
                                            Hands-on/
                                            Presentations by students
                                            </TableCell>
                                        <TableCell align="left">Distribution of certificates</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
