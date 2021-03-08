import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Grid from '@material-ui/core/Grid';


export default function SocialShare() {
    return (
        <React.Fragment>
            <Grid container direction="row"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item xs={3} md={3} sm={3} lg={3}>
                    <SocialIcon network="twitter" url="http://twitter.com/skillaid1" />
                </Grid>
                <Grid item xs={3} md={3} sm={3} lg={3}>
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/company/skillaid" />
                </Grid>
                <Grid item xs={3} md={3} sm={3} lg={3}>
                    <SocialIcon network="facebook" url="https://m.facebook.com/SkillAidworkshops/" />
                </Grid>
                <Grid item xs={3} md={3} sm={3} lg={3}>
                    <SocialIcon network="instagram" url="https://www.instagram.com/skill.aid/" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
