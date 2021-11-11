import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const ServiceDetails = () => {
    const { user } = useFirebase();
    const [places, setPlaces] = useState([]);
    const { register, handleSubmit , reset} = useForm();
    // const {detailID} = useParams();


    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])

    /* take input and send to server */
    const onSubmit = data => {
    data.status = "Pending"
        axios.post('http://localhost:5000/orders', data)
        .then(res => {
            if (res.data.insertedId) {
                reset();
                alert("Successfully Added")
                /* Modal gonna open */
                // setOpen(true);
            }
        })
    };
    return (
        <div>
        <h1 className="mt-5 text-center text-info">
          Please register 
        </h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2"
                />
                <br />
  
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="p-2 m-2"
                  value={user?.email}
                />
                <br />
                <input
                  {...register("date", { required: true })}
                  placeholder="date"
                  defaultValue={new Date()}
                  className="p-2 m-2"
                />
                <br />
                <input
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="p-2 m-2"
                />
                <br />
                <input
                  {...register("booking", { required: true })}
                  placeholder="Booking details"
                  className="p-2 m-2"
                />
                <br />
  
                <input type="submit" className="btn btn-info w-50" />
              </form>
              <p className="m-2 mb-2">
                already have account?{" "}
                <Link to="/login">
                  <span className="text-danger">create account</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;