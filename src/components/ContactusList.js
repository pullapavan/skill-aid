import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ContactusMetadata } from '../tablemetadata/contactus'
import { useAuth } from '../context/authcontext'



const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        backgroundImage: `url('../imges/logo.jpeg')`
    },
}));

function ContactusList() {

    const { db } = useAuth()
    const [loading, setLoading] = useState(true)
    const [tableDate, setTableDate] = useState([])

    async function getData() {
        const data = []
        try {
            let response = await db.collection("contactus").get()
            response && response.forEach(function (doc) {
                data.push(doc.data())
            });
        } catch (error) {
        }
        setTableDate(data)
    }

    useEffect(() => {
        getData()
        setLoading(false)
    }, [])

    const classes = useStyles();
    return (
        <Grid alignItems="center" justify="center" container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
                <MaterialTable title="Student Details"
                    data={tableDate}
                    columns={ContactusMetadata}
                    isLoading={loading}
                    options={{ search: true, paging: false, filtering: true, exportButton: true }} />
            </Grid>
        </Grid>
    );
}

export default ContactusList
