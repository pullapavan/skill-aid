import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Avatar, makeStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { useCustomStyles } from "../utils/styles";
import { techs } from "../utils/contents";

const useStyles = makeStyles((theme) => ({
    tech_avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    custom_header_red: {
        fontFamily: "Lucida Console, Courier New monospace",
        color: "#b31616"
    },
    tect_gridItem: {
        textAlign: "center",
        fontSize: "20px",
        cursor: "pointer"
    }
}))

export default function Technologies() {

    const history = useHistory()
    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{ textAlign: "center" }}>
                <h1 className={classes.custom_header_red}>Technologies Covered</h1>
            </div>
            <Grid container direction="row"
                justify="space-around"
                alignItems="stretch"
                wrap="wrap" spacing={1}>
                {
                    techs.map((tech) => {
                        return <Grid className={classes.tect_gridItem} key={tech.title} item xs={6} md={4} sm={5} lg={4}>
                            <Avatar onClick={() => history.push(`/${tech.path}`)} alt="Mission" src={`/images/${tech.image}`} className={classes.tech_avatar} />
                            <Button size="small" onClick={() => history.push(`/${tech.path}`)} color="primary"><h3>{tech.title}</h3></Button>
                        </Grid>
                    })
                }
            </Grid>
        </React.Fragment>
    )
}
