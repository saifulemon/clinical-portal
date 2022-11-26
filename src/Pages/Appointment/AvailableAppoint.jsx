import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceAppoint from '../../components/ServiceAppoint';

const AvailableAppoint = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div>
            <h4 className='text-xl text-secondary text-center mb-5'>Available Appointment on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map((service) => <ServiceAppoint 
                        key={service._id}
                        service = {service}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppoint;