import React from 'react';
import flourida from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Services from '../../components/Services/Services';

const Service = () => {
    const service = [
        {
            _id: 1,
            name: 'Flourida Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.',
            img: flourida
        },
        {
            _id: 2,
            name: 'Cavity Fellings',
            description: 'A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth, deep within the roots, where the nerve and blood supply is. A “regular” filling is to deal with decay on the highest a part of the tooth.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.    ',
            img: whitening
        }
    ]
    return (
        <div>
            <section className="my-28">
                <div className="text-center">
                    <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        service.map(service => <Services 
                            key={service._id}
                            service = {service}
                        />)
                    }
                </div>
            </section>
        </div>
    );
};

export default Service;