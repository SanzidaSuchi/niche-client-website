import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../../images/404.png';

const NotFound = () => {
    return (
        <div>
         <div className="text-center my-5">
        <img width="" src={ notFound } alt="" />
        <p className="text-muted">
          Sorry, the page you're looking for doesn't exist. you can return to
          home and look for another.
        </p>
        <NavLink to="/home">
          <button className="btn btn-primary">Return to Home</button>
        </NavLink>
        </div>
        </div>
    );
};

export default NotFound;