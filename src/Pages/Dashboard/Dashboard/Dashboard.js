import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "../AddServices/AddServices";
import Review from "../Review/Review";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import useFirebase from "../../../hooks/useFirebase";
import MyOrder from "../MyOrder/MyOrder";
import ManageAllOrder from "./../DashboardHome/ManageAllOrder";
import Pay from "../Pay/Pay";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>DashBoard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`${url}/myOrder`}>
                <li className="dashboard-menu mt-5">My Order list</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <Link to={`${url}/pay`}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmi && (
                  <Link to={`${url}/addServices`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageAllOrder`}>
                  <li className="dashboard-menu">Manage All</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/pay`}>
               <Pay></Pay>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;