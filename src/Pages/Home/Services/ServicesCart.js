import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-60 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <p className='text-2xl text-orange-400 font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Check-out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;