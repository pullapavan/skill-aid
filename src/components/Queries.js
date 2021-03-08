import React from 'react'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useCustomStyles } from "../utils/styles";



export default function Queries() {

    const classes = useCustomStyles();


    const history = useHistory()
    const connect = async () => {
        history.push("/contact")
    }

    return (
        <Grid container direction="row" className={classes.white_background}
            justify="center"
            alignItems="center" spacing={1}>
            <Grid item xs={12} md={8} sm={8}>
                <h1 style={{ textAlign: "center" }}>DO YOU HAVE ANY QUERIES? WE WOULD LOVE TO HELP YOU OUT!</h1>
            </Grid>
            <Grid item xs={4} md={3} sm={3}>
                <Button variant="outlined" color="secondary" onClick={connect} size="large">
                    Let's Connect
               </Button>
            </Grid>
        </Grid>

    )
}
