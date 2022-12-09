import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId");

    const [order, setOrder] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/order/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])

    if (!order) {
        return <div className='text-4xl'>
            Order not Fount
        </div>
    }
    return (
        <div className='h-[80vh] flex justify-center pt-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-warning text-xl text-center'>Congratulations !!</h1>
                <h2 className='text-center text-green-400 font-thin'>Car Doctor</h2>
                <hr className='my-2 bg-black' />
                <p className='text-blue-500 text-lg font-semibold'>Price: {order.price}tk</p>
                <p className='text-lg text-blue-500'>Service: {order.serviceName}</p>
                <h5>Payment: <span className='text-lg text-yellow-500 font-bold'>Successful!!</span></h5>
                <p>Address: {order.address}</p>
                <p>Transaction ID: {order.transactionId}</p>
                <p>Order time: {order.date}</p>
                <button onClick={()=> window.print()} className='btn btn-sm btn-primary w-20 mt-4 ml-auto print:hidden'>Print</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;