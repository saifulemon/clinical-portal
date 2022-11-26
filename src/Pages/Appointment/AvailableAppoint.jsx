import { format } from 'date-fns';
import React from 'react';

const AvailableAppoint = ({date}) => {
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appointment on : {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppoint;