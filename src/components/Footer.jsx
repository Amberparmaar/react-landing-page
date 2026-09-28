import React from 'react';
import logo from '../assets/images/logo.png'
import { Container, Row, Col, Form, Button , Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="g-4 mb-4">
          <Col lg={4}>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              
            />
            ClearView
          </Navbar.Brand>
            <p className="text-secondary">See Better. Live Brighter.</p>
          </Col>
          <Col lg={4}>
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-secondary small">Subscribe to get the latest updates & offers.</p>
            <div className="d-flex gap-2">
              <Form.Control type="email" placeholder="Your email address" />
              <Button variant="warning">Subscribe</Button>
            </div>
          </Col>
          <Col lg={4} className="text-lg-end">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <p className="text-secondary small">Facebook | Instagram | Twitter | LinkedIn</p>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between align-items-center text-secondary small">
          <p className="mb-0">© 2026 ClearView. All rights reserved.</p>
          <div>
            <a href="#" className="text-secondary me-3 text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-secondary text-decoration-none">Terms & Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;