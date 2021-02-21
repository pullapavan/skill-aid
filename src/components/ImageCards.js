import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    card_root: {
        maxWidth: 450,
    },
    root: {
        flexGrow: 1,
        background: "white"
    },
    custom_header_red: {
        fontFamily: "Lucida Console, Courier New monospace",
        color: "#b31616"
    },
    custom_header_blue: {
        fontFamily: "Lucida Console, Courier New monospace",
        color: "blue"
    }
});


const cards = [
    {
        src: "workshop.png",
        header: "Workshops",
        body: "TODO the content related to G1 image",
        more: "/g1"
    },
    {
        src: "internship.jpg",
        header: "Internships",
        body: "TODO the content related to G1 image",
        more: "/g2"
    },
    {
        src: "industry.png",
        header: "Industry Level Trainings",
        body: "TODO the content related to G1 image",
        more: "/g3"
    },

]

export default function ImageCards() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container direction="column" className={classes.white_background}
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                <h2 className="text_center"><span className={classes.custom_header_red}>Services</span> <span className={classes.custom_header_blue}>Offered</span></h2>
                </Grid>
            </Grid>

            <Grid container direction="row"
                justify="center"
                alignItems="center"
                wrap="wrap" spacing={3}
            >
                {
                    cards.map((card) => {
                        return <Grid key={card.header} item md={4} lg={4} sm={6}>
                            <Card className={classes.card_root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={`/images/${card.src}`}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.header}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {card.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                     </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}
