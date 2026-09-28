import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';
import logo from '../assets/images/logo.png'
import '../App.css'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 sticky-top border-bottom fixed-top">
      <Container>
       <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="40"
              className="d-inline-block align-top pe-2"
              
            />
            ClearView
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link nav-hover href="#home">Home</Nav.Link>
            <Nav.Link nav-hover href="#shop">Shop</Nav.Link>
            <Nav.Link nav-hover href="#about">About</Nav.Link>
            <Nav.Link nav-hover href="#blog">Blog</Nav.Link>
            <Nav.Link nav-hover href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <FiSearch size={20} className="cursor-pointer" />
            <FiHeart size={20} className="cursor-pointer" />
            <FiShoppingBag size={20} className="cursor-pointer" />
            <FiUser size={20} className="cursor-pointer" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;