import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { headerNavLinks } from '../menuitems/index'
import { makeStyles } from "@material-ui/core"
import { Container } from "@material-ui/core"
import SideDrawer from './SideDrawer'
import { Hidden } from '@material-ui/core'
import HideOnScroll from "./HideOnScroll"
import BackToTop from "./BackToTop";
import { Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'



const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    },
    black: {
        color: "black !important"
    }
});


function Header(props) {
    let { menuItems } = props
    menuItems = menuItems || headerNavLinks

    const classes = useStyles();


    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                            <IconButton edge="start" color="inherit" aria-label="home">
                                <Link to="/"> <img style={{ height: "50px" }} src="/images/logo.png"></img></Link>
                            </IconButton>
                            <Hidden smDown>
                                <List className={classes.navDisplayFlex} component="nav" aria-labelledby="main navigation">
                                    {menuItems.map(({ title, path }) => (
                                        <NavLink to={path} key={title} className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </NavLink>
                                    ))}
                                   
                                </List>
                            </Hidden>
                            <Hidden mdUp>
                                <SideDrawer sideBarlinks={menuItems} />
                            </Hidden>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
            <BackToTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </React.Fragment>
    )
}

export default Header
