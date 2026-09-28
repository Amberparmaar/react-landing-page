import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';

const ProductGrid = () => {
  return (
    <section className="py-5 mt-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="text-warning text-uppercase small fw-bold">Best Seller</span>
            <h3 className="fw-bold">Most Loved Styles</h3>
          </div>
          <a href="#" className="text-decoration-none text-dark fw-bold">View All →</a>
        </div>

        <Row>
          {/* Card 1 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 border-0 shadow-sm position-relative">
              <FiHeart className="position-absolute top-0 end-0 m-3 text-muted cursor-pointer" size={20} />
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
                style={{ height: '180px', objectFit: 'contain', padding: '15px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <small className="text-muted d-block">Ray-Ban</small>
                  <Card.Title className="fs-6 fw-bold mb-2">Ray-Ban Wayfarer</Card.Title>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">$180</span>
                  <small className="text-warning">★ 4.8</small>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 border-0 shadow-sm position-relative">
              <FiHeart className="position-absolute top-0 end-0 m-3 text-muted cursor-pointer" size={20} />
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
                style={{ height: '180px', objectFit: 'contain', padding: '15px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <small className="text-muted d-block">Oakley</small>
                  <Card.Title className="fs-6 fw-bold mb-2">Oakley Holbrook</Card.Title>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">$160</span>
                  <small className="text-warning">★ 4.7</small>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 border-0 shadow-sm position-relative">
              <FiHeart className="position-absolute top-0 end-0 m-3 text-muted cursor-pointer" size={20} />
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400"
                style={{ height: '180px', objectFit: 'contain', padding: '15px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <small className="text-muted d-block">Tom Ford</small>
                  <Card.Title className="fs-6 fw-bold mb-2">Tom Ford FT0237</Card.Title>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">$320</span>
                  <small className="text-warning">★ 4.9</small>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 border-0 shadow-sm position-relative">
              <FiHeart className="position-absolute top-0 end-0 m-3 text-muted cursor-pointer" size={20} />
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=400"
                style={{ height: '180px', objectFit: 'contain', padding: '15px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <small className="text-muted d-block">Gucci</small>
                  <Card.Title className="fs-6 fw-bold mb-2">Gucci GG0061S</Card.Title>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">$290</span>
                  <small className="text-warning">★ 4.6</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductGrid;