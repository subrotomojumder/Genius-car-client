import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value}${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName:  title,
            price,
            customer: name,
            phone,
            email,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order placed successfully');
                form.reset();
            }
        })
        .catch(err => console.log(err.message));
    }
    return (
        <div className='py-20 px-4 bg-slate-200'>
            <h4 className="text-3xl text-warning">Price: {price}$</h4>
            <h2 className="text-4xl mb-4">You are about to order: <span className='text-blue-500'>{title}</span></h2>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-primary w-full" required/>
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" required/>
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-primary w-full" required/>
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full" />
                </div>
                <textarea name='message' className="textarea textarea-accent h-24 w-full my-3" placeholder="Your Message"></textarea>
                <input className='btn btn-secondary' type="submit" value="Place your Order" />
            </form>
        </div>
    );
};

export default Checkout;