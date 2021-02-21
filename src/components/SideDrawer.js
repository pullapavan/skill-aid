import React, { useState } from 'react'
import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer } from '@material-ui/core'
import { NavLink } from "react-router-dom";



const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
    },
})


export default function SideDrawer(props) {

    const [state, setState] = useState({ right: false })
    const { sideBarlinks } = props
    const classes = useStyles(); // Add this


    const toggleDrawer = (anchor, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {sideBarlinks.map(({ title, path }) => (
                    <NavLink to={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <Menu fontSize="large" style={{ color: `#b31616` }}/>
            </IconButton>
            <Drawer
                anchor="left"
                open={state.right}
                onOpen={toggleDrawer("left", true)}
                onClose={toggleDrawer("left", false)}
            >
                {sideDrawerList("left")}
            </Drawer>
        </React.Fragment>
    )
}
