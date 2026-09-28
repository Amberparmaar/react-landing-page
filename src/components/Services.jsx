import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaEye,
  FaGlasses,
  FaShieldAlt,
  FaTruck
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaEye />,
      title: "Eye Care",
      text: "Professional eye care solutions for clear and comfortable vision."
    },
    {
      icon: <FaGlasses />,
      title: "Premium Eyewear",
      text: "Discover stylish frames designed for comfort and everyday elegance."
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Guaranteed",
      text: "We provide carefully selected eyewear made with premium materials."
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Get your favorite eyewear delivered safely to your doorstep."
    }
  ];

  return (
    <section className="services-section pt-5 mt-5">
      <Container>

        <div className="section-heading text-center mb-5">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2 className="section-title">
            Everything You Need for
            Better Vision
          </h2>

          <p className="section-description">
            Quality eyewear, professional care and a shopping experience
            designed around your vision.
          </p>
        </div>

        <Row className="g-4">

          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>

              <Card className="service-card h-100 border-0 text-center">

                <div className="service-icon">
                  {service.icon}
                </div>

                <Card.Body>
                  <Card.Title className="service-title">
                    {service.title}
                  </Card.Title>

                  <Card.Text className="service-text">
                    {service.text}
                  </Card.Text>
                </Card.Body>

              </Card>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
};

export default Services;