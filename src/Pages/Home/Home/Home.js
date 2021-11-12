import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Review from '../../Dashboard/Review/Review';
import Service from '../Service/Service';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';


const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
             <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/QNXQbbj/s3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primary">First</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/gRTWZtL/s1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Second</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/mzZfzm0/s2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Third</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="py-5">
      <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services?.slice(0, 6)?.map((service) => (
                <Service key={service.key} service={service} />
              ))}
            </Row>
          </div>
          
          <Review></Review>
          <Testmonial></Testmonial>
        </Container>
        </div>
    );
};

export default Home;






