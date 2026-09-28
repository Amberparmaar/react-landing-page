import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Categories = () => {
  return (
    <section className="py-5 mt-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="text-warning text-uppercase small fw-bold">Our Collection</span>
            <h3 className="fw-bold">Shop by Category</h3>
          </div>
          <a href="#" className="text-decoration-none text-dark fw-bold">View All →</a>
        </div>
        
        <Row className="g-4">
          {/* Category 1: Sunglasses */}
          <Col xs={6} md={3}>
            <Card className="border-0 shadow-sm h-100 overflow-hidden text-center">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">Sunglasses</Card.Title>
                <small className="cursor-pointer">Shop Now →</small>
              </Card.Body>
            </Card>
          </Col>

          {/* Category 2: Eyeglasses */}
          <Col xs={6} md={3}>
            <Card className="border-0 shadow-sm h-100 overflow-hidden text-center">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">Eyeglasses</Card.Title>
                <small className="cursor-pointer">Shop Now →</small>
              </Card.Body>
            </Card>
          </Col>

          {/* Category 3: Blue Light */}
          <Col xs={6} md={3}>
            <Card className="border-0 shadow-sm h-100 overflow-hidden text-center">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">Blue Light</Card.Title>
                <small className=" cursor-pointer">Shop Now →</small>
              </Card.Body>
            </Card>
          </Col>

          {/* Category 4: Accessories */}
          <Col xs={6} md={3}>
            <Card className="border-0 shadow-sm h-100 overflow-hidden text-center">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=400" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">Accessories</Card.Title>
                <small className="text-muted cursor-pointer">Shop Now →</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;