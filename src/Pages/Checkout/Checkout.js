import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id, img } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const currency = form.currency.value;
        const postCode = form.postCode.value;
        const address = form.address.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            currency,
            postCode,
            address,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-car')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)
            })
            .catch(err => console.log(err.message));
    }
    return (
        <div className='py-20 bg-slate-200 px-10'>
            <h4 className="text-3xl text-warning">Price: {price}$</h4>
            <h2 className="text-4xl mb-4">You are about to order: <span className='text-blue-500'>{title}</span></h2>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <img src={img} className='w-[90%] mx-auto' alt="" />
                </div>
                <div>
                    <form onSubmit={handlePlaceOrder}>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-primary w-full" required />
                            <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" required />
                            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-primary w-full" required />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full" />
                            <select name='currency' defaultValue='BDT' className="select select-secondary">
                                <option value='BDT'>BDT</option>
                                <option value='USD'>USD</option>
                            </select>
                            <input name='postCode' type="text" placeholder="Your post code" className="input input-bordered input-primary w-full" />

                        </div>
                        <textarea name='address' type="text" placeholder="Your current address" required className="textarea textarea-accent h-16 w-full my-3"></textarea>
                        <input className='btn btn-secondary w-full' type="submit" value="Pay" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;