import React from 'react';
import testimonial from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from '../../components/Testimonials/Reviews';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Harry',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Harry',
            location: 'California',
            img: people3
        }
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary text-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={testimonial} className="w-24 lg:w-48" alt="testimonial" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Reviews 
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;