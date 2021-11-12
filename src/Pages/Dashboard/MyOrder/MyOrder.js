
import React, { useEffect, useState } from 'react';

import useFirebase from '../../../hooks/useFirebase';





const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useFirebase()

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to cancel booking?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        setDeleted(true)
                    } else {
                        setDeleted(false)
                    }
                })
        }
    }

    return (
        <div className='my-4'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                {orders.map(order => order.email === user?.email &&
                        <div className='col'>
                            
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Booked by: {order.name}</h5>
                                    <h6 className="card-title"><strong>Email:</strong> <small>{order.email}</small></h6>
                                    <p className="card-title"><strong>Order place:</strong> {order.date}</p>
                                    <p className="card-text"> <strong>Contact:</strong> {order.description}</p>
                                    <p className="card-text"><strong> Booked date:</strong> {order.date}</p>
                                    <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-danger'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    
                    )
                }
            </div>
        </div>
    );
};

export default MyOrder;