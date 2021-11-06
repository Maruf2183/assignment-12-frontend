import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import banner from "../../../images/appointment-bg.png"
import doctor from "../../../images/doctor.png"
import { Button,Typography } from '@mui/material';

const apoinmentBanner = {
    background: `url(${banner})`,
    backgroundColor: 'rgba(33, 47, 60,.8)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175,




}

const ApiontmentBanner = () => {
    return (
        <div>

            <Box style={apoinmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: '400px', marginTop: '-120px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: 'flex',flexDirection: 'row',justifyContent: 'flex-start', alignItems:'center'}} >
                        <Box sx={{textAlign:'left' }}>
                        <Typography variant='h6' sx={{color:'#23CAE2',mb:5}}>Apoinment</Typography>
                        <Typography variant='h4' sx={{color:'white'}}>Make an apoinment Today  </Typography>
                        <Typography variant='h6' sx={{fontSize:16,color:'white',fontWeight:300,my:2}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum? Repudiandae id facilis omnis sapiente quos possimus aspernatur sequi vel! </Typography>
                        <Button variant="contained" sx={{backgroundColor:'#23CAE2'}} > submit hree please</Button>
                        </Box>

                        
                    </Grid>
                </Grid>
            </Box>








        </div>

    );
};

export default ApiontmentBanner;
