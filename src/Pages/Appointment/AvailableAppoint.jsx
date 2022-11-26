import { format } from 'date-fns';
import React from 'react';

const AvailableAppoint = ({date}) => {
    return (
        <div>
            Available Appointment on : {format(date, 'PP')}
        </div>
    );
};

export default AvailableAppoint;