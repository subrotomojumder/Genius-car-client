import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const servicesLimit = seeAll ? services : services.slice(0, 3);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div>
            <div className='text-center mb-8'>
                <p className='text-xl font-semibold'>Services</p>
                <h2 className='text-4xl font-semibold my-3'>Our Service Area</h2>
                <p>
                    The majority have suffered alteration in some form, by injected humour, or <br />
                    randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2'>
                {
                     servicesLimit.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
            <div className={seeAll ? 'w-32 mx-auto my-5 hidden': 'w-32 mx-auto my-5'}>
                <button onClick={()=>setSeeAll(true)} className='btn btn-outline rounded-lg'>see more...</button>
            </div>
        </div>
    );
};

export default Services;