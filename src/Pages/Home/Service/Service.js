import React from "react";
import { Card, Col,} from "react-bootstrap";
import { NavLink } from "react-router-dom";



function Service(props) {
  const { _id,name, img, price, description} = props.service;
  
  return (
    <Col className="my-2" md={4}>
        <Card style={{ minHeight: "480px" }}>
          <Card.Img style={{height:"300px"}} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p>
              <b>price: {price}</b> 
            </p>
            
            <div className="d-flex justify-content-center">
              <NavLink to={`/details/${_id}`} className="w-50 btn btn-primary">
                Buy Now 
              </NavLink>
            </div>
          </Card.Body>
        </Card>
      
    </Col>
  );
}

export default Service;