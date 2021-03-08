import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import isEmail from 'validator/lib/isEmail';
import { useAuth } from '../context/authcontext'
import { Link, useHistory } from "react-router-dom"
import Alert from '@material-ui/lab/Alert';
import googel_icon from '../images/google_icon.png'
import facebook_icon from '../images/facebook_icon.png'





function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="">
                SkillAid
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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

export default function Signup() {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [error, setError] = useState('')
    const { signup, googleSignup, facebookSignup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleChange = (event) => {
        let { value } = event.target
        value = value ? value.trim() : ''
        if (event.target.name === 'email') {
            setEmail(value)
        } else if (event.target.name === 'password') {
            setPassword(value)
        } else if (event.target.name === 'confirmPassword') {
            setConfirmPassword(value)
        }

        setEmailError(false)
        setPasswordError(false)
        setConfirmPasswordError(false)
        setError('')
    }

    const google = async function () {
        try {
            await googleSignup()
            history.push("/dashboard")
        } catch (error) {
            setError("Authentication Failed");
        }
    }

    const facebook = async function () {
        try {
            await facebookSignup()
            history.push("/dashboard")
        } catch (error) {
            setError("Authentication Failed");
        }
    }

    const processLogin = async () => {

        setError('')

        if (!isEmail(email)) {
            setEmailError(true)
            return
        }

        if (!password) {
            setPasswordError(true)
            return
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError(true)
            return;
        }

        try {
            setLoading(true)
            await signup(email, password)
            history.push("/dashboard")
        } catch (e) {
            setError('Failed to create Account!!!')
        }
        setLoading(false)
        setEmailError(false)
        setPasswordError(false)
        setConfirmPasswordError(false)
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} lg={7}><Grid item xs={false} sm={4} md={7} lg={7}>
                <img src="/images/logo.png"></img>
            </Grid>
                <img src="/images/logo.png"></img>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up to SkillAid
                    </Typography>
                    {error ? <Alert variant="filled" severity="error">{error}</Alert> : null}
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
                            value={email}
                            onChange={handleChange}
                            helperText={emailError ? 'Enter valid email' : ''}
                            error={emailError}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange}
                            helperText={passwordError ? 'Enter valid Password' : ''}
                            error={passwordError}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            value={confirmPassword}
                            onChange={handleChange}
                            helperText={confirmPasswordError ? 'Passwords not Matching' : ''}
                            error={confirmPasswordError}
                        />

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={processLogin}
                            disabled={loading}
                        >
                            Sign In
            </Button>
                        <div style={{ textAlign: "center" }}>
                            <img style={{ height: "75px" }} src={googel_icon} onClick={google}></img>                            
                        </div>


                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot-password" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signin" variant="body2">
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}