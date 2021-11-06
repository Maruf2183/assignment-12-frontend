import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bgBanner from "../../../images/bg.png"
import chair from "../../../images/chair.png"
import { Button, Typography } from '@mui/material';

const bannerBackgroundImage = {
    background: `url(${bgBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '450px',
    border:'1px solid red'
};
const verticalCenter = {
    display: 'grid',
    alignItems:'center',
    height: '450px',
}
   
    

        

const Banner = () => {
    return (
        <Box  style={{...bannerBackgroundImage,}} sx={{ width: '100%' }}>
            <Grid container >
                <Grid item xs={12} md={6} sx={{...verticalCenter,textAlign:'left',padding:'50px'}}>
                    <Box>
                    <Typography variant='h3'>
                        Your new smile <br /> start here
                    </Typography>
                    <Typography variant='h6' sx={{my:5, fontSize: 14, color: 'gray', fontWeight: 300, }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum repellat nesciunt aut soluta beatae ipsa illum, velit esse est quia molestias qui inventore iste modi!
                    </Typography>
                    <Button variant='contained' style={{backgroundColor:'#23CAE2'}}>Get Apoinment </Button>
                </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{...verticalCenter}}>
                    <img
                        style={{ width: '450px' }} src={chair} alt="" />

                </Grid>

            </Grid>
        </Box>

    );
};

export default Banner;