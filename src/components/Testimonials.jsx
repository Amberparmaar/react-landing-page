import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Sarah Khan",
      role: "Verified Customer",
      text: "The glasses are beautiful and extremely comfortable. I loved the quality and elegant design.",
    },
    {
      name: "Ayesha Ahmed",
      role: "Verified Customer",
      text: "Amazing collection and very smooth shopping experience. My glasses look even better in person.",
    },
    {
      name: "Hassan Ali",
      role: "Verified Customer",
      text: "Excellent quality and fast delivery. The frame feels premium and fits perfectly.",
    }
  ];

  return (
    <section className="testimonial-section py-5 mt-5">

      <Container>

        <div className="section-heading text-center mb-5">

          <span className="section-tag">
            TESTIMONIALS
          </span>

          <h2 className="section-title">
            What Our Customers
            <span> Say</span>
          </h2>

          <p className="section-description">
            Real experiences from people who chose us for their everyday vision.
          </p>

        </div>

        <Row className="g-4">

          {testimonials.map((testimonial, index) => (

            <Col md={6} lg={4} key={index}>

              <Card className="testimonial-card h-100 border-0 shadow-lg">

                <Card.Body>

                  <FaQuoteLeft className="quote-icon" />

                  <div className="stars mb-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>

                  <div className="customer-info">

                    <div className="customer-avatar">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <h6>{testimonial.name}</h6>
                      <small>{testimonial.role}</small>
                    </div>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
};

export default Testimonials;