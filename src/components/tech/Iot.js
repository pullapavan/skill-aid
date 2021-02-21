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


export default function Iot() {
    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                    <Carousel>
                        <div>
                            <img src="/images/iot_main.jpg" />
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
                            <Typography className={classes.heading}>What is Internet of things?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Internet of Things is the concept of connecting any device to the Internet and to other connected devices. The IoT is a giant network of connected things and people – all of which collect and share data about the way they are used and about the environment around them.
          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>How it works?</Typography>
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
                                        <ListItemText inset primary="Raspberry Pi" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText inset primary="ESP 8266 & ESP 32" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText inset primary="Cloud platforms" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText inset primary="Protocols" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText inset primary="Firebase" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText inset primary="Embedded C" />
                                    </ListItem>
                                </List>
                        </AccordionDetails>
                    </Accordion>
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
