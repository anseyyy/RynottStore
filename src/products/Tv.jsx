import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./products.css";

function Tv() {
  const navigate = useNavigate();
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    
    fetch("/api/products?category=tv")
      .then((res) => res.json())
      .then((data) => setTvs(data))
      .catch((err) => console.error("Error fetching TVs:", err));
  }, []);

  const handleAddToCart = (tv) => {
    console.log("Adding to cart:", tv);
    navigate("/cart");
  };

  return (
    <Container className="py-5 tv-page">
      <h2 className="text-center mb-5 rynott-title">Televisions</h2>
      <Row className="g-4 justify-content-center">
        {tvs.map((tv) => (
          <Col key={tv._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="tv-card h-100">
              <Card.Img variant="top" src={tv.img} />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">{tv.name}</Card.Title>
                <p className="text-success fw-semibold">₹{tv.price}</p>
                <Button variant="primary" onClick={() => handleAddToCart(tv)}>
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

export default Tv;