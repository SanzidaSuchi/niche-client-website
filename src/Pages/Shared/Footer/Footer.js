import React from 'react';
// import FooterBG from './../../../images/footer-bg.png';
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../../../images/logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
  } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";



  

const Footer = () => {
    
    return (
      
        <div className="text-white">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={6}>
              <div className="text-center my-2">
                <img width="200px" src={footerLogo} alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Nasir Trade Centre [NTC]; Level- 9 & 14,
                    89 Bir Uttam CR Datta Road,
                    Banglamotor (Sonargaon Road),
                    Dhaka-1205
                    Bangladesh.</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Email: obd@tl.com.bd
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: +880 18888 19000(Available:09:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
                <ul className="list-unstyled my-2 ">
                <li>
               <h6> Corporate gifting </h6>
              </li>
              
              <li>
                <h6>FAQ</h6>
              </li>
             
              <li>
               <h6> My account</h6>
              </li>
             
              <li>
               <h6> Repair Center</h6>
              </li>
              <li>
               <h6> Exchange</h6>
              </li>
                </ul>
            </Col>
            
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by Watches.com.2021
      </p>
    </div>
    );
};

export default Footer;