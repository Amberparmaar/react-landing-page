import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiTruck, FiRotateCcw, FiShield, FiCreditCard } from 'react-icons/fi';

const Feature = () => {
  return (
    <section className="border-bottom py-4 bg-dark">
      <Container>
        <Row>
          {/* Feature 1 */}
          <Col xs={6} md={3} className="text-center py-2">
            <div className="text-warning mb-2">
              <FiTruck size={24} />
            </div>
            <h6 className="text-light fw-bold mb-1">Free Shipping</h6>
            <small className="text-light">Orders over $50</small>
          </Col>

          {/* Feature 2 */}
          <Col xs={6} md={3} className="text-center py-2">
            <div className="text-warning mb-2">
              <FiRotateCcw size={24} />
            </div>
            <h6 className="text-light fw-bold mb-1">Easy Returns</h6>
            <small className="text-light">Within 30 days</small>
          </Col>

          {/* Feature 3 */}
          <Col xs={6} md={3} className="text-center py-2">
            <div className="text-warning mb-2">
              <FiShield size={24} />
            </div>
            <h6 className="text-light fw-bold mb-1">Authentic Brands</h6>
            <small className="text-light">100% original</small>
          </Col>

          {/* Feature 4 */}
          <Col xs={6} md={3} className="text-center py-2">
            <div className="text-warning mb-2">
              <FiCreditCard size={24} />
            </div>
            <h6 className="text-light fw-bold mb-1">Secure Payment</h6>
            <small className="text-light">Multiple options</small>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;