import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleOrderDelete, handleOrderUpdate }) => {
    const [orderService, setOrderService] = useState({});
    const { service, serviceName, phone, customer, price, _id, status } = order;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
            .catch(err => console.log(err.message));
    }, [service])

    return (
        <tr>
            <td>
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        {orderService?.img &&
                            <div className=" rounded w-12 h-12">
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        }
                    </div>
                    <div className='font-semibold'>
                        {serviceName}
                        <br />
                        <span className="badge badge-ghost badge-sm">{price}$</span>
                    </div>
                </div>
            </td>
            <td>{_id}</td>
            <th>
                <button onClick={() =>handleOrderUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
            <th>
                <button onClick={()=>handleOrderDelete(_id)} className="btn btn-circle btn-ghost">X</button>
            </th>
        </tr>
    );
};

export default OrdersRow;