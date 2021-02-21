import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../context/authcontext'
import Alert from '@material-ui/lab/Alert';
import useFormField from '../hooks/useFormField'

const useStyles = makeStyles((theme) => ({
    root: {
        // height: 'vh',
    },
    image: {
        backgroundImage: 'url(/logo.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errorType, setErrorType] = useState("error")

    const emailField = useFormField('email')
    const mobileField = useFormField('mobile')
    const nameField = useFormField('name')
    const collegeField = useFormField('college')
    const streamField = useFormField('stream')

    const { db } = useAuth()

    const clearFields = () => {
        [emailField, mobileField, nameField, collegeField, streamField].forEach((obj) => { obj.setValue("")})
    }

    const submit = async () => {
        setSubmitted(true)
        setLoading(true)
        setError('')
        setErrorType('error')
        if (nameField.error || emailField.error || mobileField.error || collegeField.error || streamField.error) {
            setLoading(false)
            return
        }
        try {
            const response = await db.collection("contactus").add({
                name: nameField.value || "",
                email: emailField.value || "",
                mobile: mobileField.value || "",
                college: collegeField.value || "",
                stream: streamField.value || ""
            });
            setError("Details Saved Successfully!!!")
            setErrorType("success")
            clearFields()
            setSubmitted(false)
        } catch (error) {
            console.log(error)
            setError("Failed to Submit Details. Please try agin")
        }
        setLoading(false)
    }

    return (
        <Grid alignItems="center" justify="center" container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {error ? <Alert variant="filled" severity={errorType}>{error}</Alert> : null}
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact Us -  SkillAid
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={emailField.value}
                            onChange={emailField.handleChange}
                            helperText={(submitted && emailField.error) ? emailField.message : ''}
                            error={submitted && emailField.error}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile Number"
                            name="mobile"
                            autoComplete="mobile"
                            value={mobileField.value}
                            onChange={mobileField.handleChange}
                            helperText={(submitted && mobileField.error) ? mobileField.message : ''}
                            error={submitted && mobileField.error}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            value={nameField.value}
                            onChange={nameField.handleChange}
                            helperText={(submitted && nameField.error) ? nameField.message : ''}
                            error={submitted && nameField.error}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="college"
                            label="Enter College Name"
                            name="college"
                            autoComplete="college"
                            value={collegeField.value}
                            onChange={collegeField.handleChange}
                            helperText={(submitted && collegeField.error) ? collegeField.message : ''}
                            error={submitted && collegeField.error}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="stream"
                            label="Stream(CSE, ECE...)"
                            name="stream"
                            autoComplete="stream"
                            value={streamField.value}
                            onChange={streamField.handleChange}
                            helperText={(submitted && streamField.error) ? streamField.message : ''}
                            error={submitted && streamField.error}
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={submit}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Submit Details'}
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}