import React from 'react';

const AvailableApointment = ({ date }) => {
   
    return (
        <div>
        <h2> Available Apoinment:{date.toDateString()} </h2>
        
      </div>
      
    );
};

export default AvailableApointment;