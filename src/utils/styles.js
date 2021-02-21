import { makeStyles } from '@material-ui/core/styles';

const radialgold = "radial-gradient(#eaca08, transparent)"
const radialblue = "radial-gradient(#f3fdff, transparent)"
const radialGold = "radial-gradient(#eaca08, transparent)"
const techback = "repeating-linear-gradient(255deg, #d3de2e24, transparent 100px)"

export const useCustomStyles = makeStyles((theme) => ({
    testimonial: {
        width: "100%",
        border: "1px solid #00000087",
        padding: "20px",
        background: "#142322",
        borderRadius: "50px",
        color: "white"
    },
    testimonial_main: {
        //    height:"30vh"
    },
    testimonialContent: {
        padding: "20px"
    },
    tech_back: {
        background: radialblue
    },
    social_background: {
        background: radialgold
    },
    list_root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    width_100: {
        width: "100%"
    },
    tech_avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    test_avatar: {
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
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
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
    },
    app_root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        margin: 'auto'
    },
    skeleton_media: {
        height: 190,
    },
    header_navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    header_navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    header_linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    },
    header_black: {
        color: "black !important"
    },
    home_section2_background: {
        minHeight: 400,
        background: radialblue,
        height: "auto",
    },
    white_background: {
        // background: "white",
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 500,
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        margin: 'auto'
    }
}));