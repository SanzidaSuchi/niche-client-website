import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Testmonial = () => {
    return (
        <div>
            <Container className="my-5">
                <h1>Testimonials</h1>
                
                
                <Row className="mt-5">
                    <Col md={4}>
                        <h7>I love my watch from watches.com.The Shipping and packing from watches was fantastics!.I highly recommend their watches.</h7>
                        <p>-Shera Shorma</p>
                    </Col>
                    <Col md={4}>
                        <h7>Watches watch has my favourite Brand.The Shipping and packing from watches was fantastics!.I highly recommend their watches.</h7>
                        <p>-Alok babu</p>
                    </Col>
                    <Col md={4}>
                        <h7>I was interested to purching a watch but skyptical.The Shipping and packing from watches was fantastics!.I highly recommend their watches.</h7>
                        <p>-Juthi Islam</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testmonial;