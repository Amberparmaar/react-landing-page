import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImg from '../assets/images/banner.png'

const BrandBanner = () => {
  return (
    <section className="brand-banner mt-5">

      <Container>

        <Row className="align-items-center">

          <Col lg={7}>

            <span className="section-tag">
              PREMIUM COLLECTION
            </span>

            <h2>
              See the World
              <br />
              <span>in a New Way.</span>
            </h2>

            <p>
              Discover eyewear that combines timeless style,
              modern comfort and exceptional clarity.
            </p>

            <Button variant="warning" className="px-4 py-2 fw-semibold">
              Explore Collection
              </Button>

          </Col>

          <Col lg={5} className="text-center mt-4 mt-lg-0">

            <img
              src={bannerImg}
              alt="Premium eyewear"
              className="brand-image"
              width={500}
              height={500}
            />

          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default BrandBanner;