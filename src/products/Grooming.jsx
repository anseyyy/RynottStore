import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./products.css";

function Grooming() {
  const [groomingProducts, setGroomingProducts] = useState([]);

  useEffect(() => {
    
    fetch("/api/products?category=grooming")
      .then((res) => res.json())
      .then((data) => setGroomingProducts(data))
      .catch((err) => console.error("Error fetching grooming products:", err));
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    
  };

  return (
    <Container className="py-5 grooming-page">
      <h2 className="text-center mb-5 rynott-title">Grooming Products</h2>
      <Row className="g-4 justify-content-center">
        {groomingProducts.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100 shadow-sm">
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">{product.name}</Card.Title>
                <p className="text-success fw-semibold">₹{product.price}</p>
                <p className="text-muted">{product.description}</p>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Grooming;