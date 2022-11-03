import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.error(error.message))
    }, [user?.email]);

    const handleOrderDelete = (id) =>{
        const proceed = window.confirm('Are you sure, You want to this order');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining= orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    const handleOrderUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = "Approving";
                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })
    }
    return (
        <div>
            <h2 className='text-5xl text-center'>You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Order ID</th>
                            <th>Overview</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                                handleOrderDelete={handleOrderDelete}
                                handleOrderUpdate={handleOrderUpdate}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;