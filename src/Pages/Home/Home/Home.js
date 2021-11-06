import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import ApiontmentBanner from '../ApointmentBanner/ApiontmentBanner';
import Banner from '../Banner/Banner';
import Service from '../Sevices/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Service />
            <ApiontmentBanner/>
            
        </div>
    );
};

export default Home;