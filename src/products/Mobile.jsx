import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./products.css";

function Mobile() {
  const navigate = useNavigate();
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch("/api/products?category=mobiles")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend response:", data);
        setMobiles(data.data || []); 
      })
      .catch((err) => console.error("Error fetching mobiles:", err));
  }, []);

  const handleAddToCart = (mobile) => {
   
    console.log("Adding to cart:", mobile);
    navigate("/cart");
  };

  return (
    <Container className="py-5 mobile-page">
      <h2 className="text-center mb-5 rynott-title">Mobiles</h2>
      <Row className="g-4 justify-content-center">
        {mobiles.map((mobile) => (
          <Col key={mobile._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mobile-card h-100">
              <Card.Img variant="top" src={mobile.imageUrl} alt={mobile.name} />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">{mobile.name}</Card.Title>
                <p className="text-success fw-semibold">₹{mobile.price}</p>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(mobile)}
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

export default Mobile;