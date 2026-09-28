import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <Container className="py-5 mt-5">
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductGrid;