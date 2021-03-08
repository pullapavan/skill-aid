import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useCustomStyles } from "../../utils/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TechBanner from './utils/TechBanner';
import TechHeading from './utils/TechHeading';
import LabelIcon from '@material-ui/icons/Label';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


export default function Iot() {
    const classes = useCustomStyles();

    return (
        <React.Fragment>
            <TechBanner imgUrl="/images/fullstack_main.png"></TechBanner>
            <CssBaseline />
            <TechHeading course="Full Stack Development"></TechHeading>

            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Introduction to HTML5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="HTML tags"><LabelIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Website development"><LanguageIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Intro to CSS3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="Learn about the various styling techniques using CSS"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="CSS design styles"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Inline, External CSS"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Box Model"><ArrowRightIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Introduction to Javascript</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="Understand the concepts used to make the websites more interactive"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Data Types, Conditional looping, DOM structure"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="ES6 Features"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Ajax Calls/Promises"><ArrowRightIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Jquery Library"><ArrowRightIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Frontend Web Development tools</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="Bootstrap Grid System"><ArrowForwardIcon color="primary" /></CustomListItem>
                                <CustomListItem body="CSS Preprocessors"><ArrowForwardIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Build and Deploy interactive Web Pages using Grunt and Gulp"><ArrowForwardIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Introduction to Server Side Development</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="Learn about the various techniques used to design the server end"><PlayArrowIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Gain experience in high-level web frameworks like REST, Node.js, Django and other templates"><PlayArrowIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={11} md={10} sm={10} lg={8} className={classes.width_100}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>Database Handling</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" className={classes.list_root} aria-label="contacts">
                                <CustomListItem body="SQL, data entry, retrieval using REST APIs and management techniques"><PlayArrowIcon color="primary" /></CustomListItem>
                                <CustomListItem body="Front-end and back-end interactivity through the database"><PlayArrowIcon color="primary" /></CustomListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

function CustomListItem(props) {
    return <ListItem button>
        <ListItemIcon>
            {props.children}
        </ListItemIcon>
        <ListItemText primary={props.body} />
    </ListItem>
}
