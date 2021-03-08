import React, { Suspense, useEffect, useState } from 'react'
import { AuthProvider } from "../context/authcontext";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"
import '../App.css'
import Header from './Header'
import { CssBaseline } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCustomStyles } from "../utils/styles";
import Splash from '../components/Splash'
import SocialShare from './SocialShare';


const Signup = React.lazy(() => import('./Signup'))
const Signin = React.lazy(() => import('./Signin'))
const Contact = React.lazy(() => import("./Contact"))
const Home = React.lazy(() => import("./Home"))
const ContactusList = React.lazy(() => import("./ContactusList"))
const Iot = React.lazy(() => import("./tech/Iot"))
const DM = React.lazy(() => import("./tech/DigitalMarketing"))
const AEAES = React.lazy(() => import("./tech/AEAES"))
const FullStack = React.lazy(() => import("./tech/FullStack"))
const AboutUs = React.lazy(() => import("./AboutUs"))
const FacebookPage = React.lazy(() => import("./FacebookPage"))


function App() {

  const classes = useCustomStyles();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <React.Fragment>
      {loading ?
        <Splash></Splash>
        :
        <React.Fragment>
          <CssBaseline />
          <HashRouter>
            {/* <Router> */}
            <AuthProvider>
              <Header />
              <Suspense fallback={<div className={classes.app_root}>
                <CircularProgress />
              </div>}>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/signin" component={Signin}></Route>
                  <Route exact path="/signup" component={Signup}></Route>
                  <Route exact path="/contact" component={Contact}></Route>
                  <Route exact path="/iot" component={Iot}></Route>
                  <Route exact path="/digital-marketing" component={DM}></Route>
                  <Route exact path="/aeaes" component={AEAES}></Route>
                  <Route exact path="/full-stack" component={FullStack}></Route>
                  <Route exact path="/aboutus" component={AboutUs}></Route>
                  <Route exact path="/fb" component={FacebookPage}></Route>
                  <PrivateRoute exact path="/dashboard" component={ContactusList} />
                </Switch>
              </Suspense>
            </AuthProvider>
            {/* </Router> */}
          </HashRouter>
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default App;
