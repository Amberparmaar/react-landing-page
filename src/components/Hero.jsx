import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const Hero = () => {
  return (
    <section className="hero-section fluid">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="text-warning text-uppercase fw-bold mb-2">Style Meets Clarity</p>
            <h1 className="display-4 fw-bold mb-3">
              Premium Eyewear for a Brighter You
            </h1>
            <p className="text-muted mb-4">
              Discover stylish, high-quality glasses and sunglasses that fit your lifestyle.
            </p>
            <div className="d-flex gap-3">
              <Button variant="warning" className="px-4 py-2 fw-semibold shadow-lg">
                Shop Now →
              </Button>
              <Button variant="outline-warning" className="px-4 py-2 fw-semibold  shadow-lg">
                Explore Collection
              </Button>
            </div>
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default Hero;