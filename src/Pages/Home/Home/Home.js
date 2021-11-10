import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
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
        </div>
    );
};

export default Home;






