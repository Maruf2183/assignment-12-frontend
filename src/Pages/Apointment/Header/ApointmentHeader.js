import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png'
import Calendar from '../../../Shared/Calendar/Calendar';









const ApointmentHeader = ({date,setDate}) => {
    return(
        <Container>

            <Grid container spacing={3} >

                <Grid item xs={12} sm={12} md={6}>
                    <Box>
                        
                        <Calendar date={date}  setDate={setDate} > </Calendar>

                    </Box>
                </Grid>

 



                <Grid item xs={12} sm={12} md={6}>
                    <Box>
                        <img src={chair} alt={`just a img`}/>
                    </Box>
                </Grid>




            </Grid>
        </Container>
    );
};

export default ApointmentHeader;