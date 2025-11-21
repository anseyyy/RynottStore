import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./products.css";

function AirPurifiers() {
  const [purifiers, setPurifiers] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/products?category=airpurifier")
      .then((res) => res.json())
      .then((data) => setPurifiers(data.data || [])) 
      .catch((err) => console.error("Error fetching air purifiers:", err));
  }, []);

  const handleAddToCart = async (purifier) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?._id;

    try {
      await fetch("http://localhost:5000/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          productId: purifier._id,
          quantity: 1,
        }),
      });
      alert(`${purifier.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <Container className="py-5 airpurifiers-page">
      <h2 className="text-center mb-5 rynott-title">Air Purifiers</h2>
      <Row className="g-4 justify-content-center">
        {purifiers.map((purifier) => (
          <Col key={purifier._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100 shadow-sm">
              <Card.Img variant="top" src={purifier.imageUrl} /> 
              <Card.Body className="text-center">
                <Card.Title className="text-dark">{purifier.name}</Card.Title>
                <p className="text-success fw-semibold">₹{purifier.price}</p>
                <p className="text-muted">{purifier.description}</p>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(purifier)}
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

export default AirPurifiers;