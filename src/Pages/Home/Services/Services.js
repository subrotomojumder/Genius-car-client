import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [search, setSearch] = useState('');
    const [isAsc, setIsAsc] = useState(true);
    const searchRef = useRef('');
    const servicesLimit = seeAll ? services : services.slice(0, 3);

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc': 'des'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearchValue = () => {
        setSearch(searchRef.current.value)
    }
    
    return (
        <div>
            <div className='text-center mb-8'>
                <p className='text-xl font-semibold'>Services</p>
                <h2 className='text-4xl font-semibold my-3'>Our Service Area</h2>
                <p>
                    The majority have suffered alteration in some form, by injected humour, or <br />
                    randomised words which don't look even slightly believable.
                </p>
                <input ref={searchRef} type="text" className='input input-bordered input-sm' />
                <button onClick={handleSearchValue} className='btn btn-ghost'>search</button>
                <button onClick={()=> setIsAsc(!isAsc)} className='btn btn-primary'>{isAsc ? 'Des' : 'Asc'}</button>
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