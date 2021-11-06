import React, { useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AvailableApointment from '../AvailableApointment/AvailableApointment';
import ApointmentHeader from '../Header/ApointmentHeader';

const Apoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <ApointmentHeader date={date} setDate={setDate} />
            <AvailableApointment date={date} />


        </div>
    )
};

export default Apoinment;