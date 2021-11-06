import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from './Service';
import cavity from '../../../images/cavity.png'
import  whitening from '../../../images/whitening.png' 
import fluorida  from  '../../../images/fluoride.png'






const services = [

    {
        name: 'Fluorida Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem aliquam totam expedita laboriosam possimus saepe suscipit unde vel, aut illum ratione consequatur nemo eum fuga maxime fugit quod ipsa',
        Image: fluorida

    },

    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem aliquam totam expedita laboriosam possimus saepe suscipit unde vel, aut illum ratione consequatur nemo eum fuga maxime fugit quod ipsa',
        Image:cavity
    },

    {
        name: 'Fluorida Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem aliquam totam expedita laboriosam possimus saepe suscipit unde vel, aut illum ratione consequatur nemo eum fuga maxime fugit quod ipsa',
        Image: whitening 

    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1,my:'30px' }}>
            <Container >
                <Typography variant='h5' component='div' sx={{ fontWeight: 'bold',m:5, color: 'success.main' }}>OUR SERVICES </Typography>
                <Typography variant='h5' component='div' sx={{ fontWeight: 'bold',}}>Services We Provide</Typography>
                <Grid  container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    
                    {

                        services.map((service, index) => (
                            <Service service={service} key={index} > 
                                

                            </Service>
                        )
                            
                        )
                    
                    
                    }



                </Grid>

           </Container>



        </Box>
    );
};

export default Services;