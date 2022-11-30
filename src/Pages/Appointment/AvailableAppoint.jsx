import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ServiceAppoint from '../../components/Services/ServiceAppoint';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';

const AvailableAppoint = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
     fetch(`http://localhost:4000/available?date=${formatedDate}`).then(res =>
       res.json())
     )

    if(isLoading) {
        return <Loading />;
    }

    // useEffect( () => {
    //     fetch(`http://localhost:4000/available?date=${formatedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center mb-5'>Available Appointment on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map((service) => <ServiceAppoint 
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
                refetch={refetch}
                setTreatment ={setTreatment}
                />
            }
        </div>
    );
};

export default AvailableAppoint;