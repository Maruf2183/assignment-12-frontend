import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Box } from '@mui/system';

















const Calendar = ({date,setDate}) => {




    return (
        <Box style={{ border: '1px solid red', }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default Calendar;