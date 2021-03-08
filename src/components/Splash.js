import '../../src/App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop:"5px"
    },
}));


function App() {
    const classes = useStyles();

    return (
        <div className="App" className={classes.root}>
            <header className="App-header">
                <img style={{ width: "150px", height: "200px" }} src="/images/only_logo.jpg" className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
