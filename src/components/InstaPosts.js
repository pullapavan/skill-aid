import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';



export default function InstaPosts() {

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJWODc3SThCOE85X01sNFJaQXphbHdxZAUxseUd0WGJmWXhIMUItNm9Bci1uSGlBcEt5Q0U3VTVJMVVyT1A1V1F2WmpXV21jWW5zZA0doVERqVjl1U2xoUUg1dEJlNnZArVGduV3hjbE5CWnhrN3lXbwZDZD")
            .then(function (response) {
                setPosts(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <React.Fragment>
            <Grid container direction="column"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={12} md={12} sm={12}>
                   <h2>Recent Activities</h2>
                </Grid>
            </Grid>
            <Carousel indicators={false} interval={3000} navButtonsAlwaysVisible={true}>
                {
                    posts.map((post, i) => <Item key={i} post={post} />)
                }
            </Carousel>
        </React.Fragment>
    )
}

function Item(props) {
    return (
        <Grid container direction="column"
            justify="center"
            alignItems="center" spacing={1}>
            <Grid item xs={12} md={12} sm={12}>
                <Paper elevation={3}>
                    <img style={{ objectFit: "contain", height: "300px", width: "300px" }} src={props.post.media_url}></img>
                </Paper>
            </Grid>
        </Grid>
    )
}
