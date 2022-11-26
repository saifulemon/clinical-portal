import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceAppoint from '../../components/Services/ServiceAppoint';
import BookingModal from './BookingModal';

const AvailableAppoint = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect( () => {
        fetch('http://localhost:4000/service')
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
                        setTreatment = {setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModal 
                date={date} 
                treatment={treatment}
                setTreatment ={setTreatment}
                />
            }
        </div>
    );
};

export default AvailableAppoint;