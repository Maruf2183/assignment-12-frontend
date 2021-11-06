import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'



const Service = ({ service }) => {
    const { name, Image, description } = service;
    const slicedDescription=description.slice(0,135)

    return (

        <Grid item xs={4} sm={4} md={4}  >

            <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>

                <CardMedia 
                    sx={{ height:'auto', width: 'auto', margin: 'auto', p:'10px' }}
                    component="img"
                    image={Image}
                    alt="Paella dish"
                    />
                    

                <CardContent>
                    <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                       {name}
                    </Typography>
                   
                    
                    <Typography variant="body2">
                    {slicedDescription}
                    </Typography>
                        
                </CardContent>
                
            </Card>

        </Grid>


    );
};

export default Service;