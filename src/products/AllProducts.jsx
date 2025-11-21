import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./products.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products") 
      .then((res) => res.json())
      .then((data) => setProducts(data.data || [])) 
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || "Others";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <Container className="py-5 all-products-page">
      <h2 className="text-center mb-5 rynott-title">All Products</h2>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="mb-5">
          <h3 className="mb-4 text-primary">{category.toUpperCase()}</h3>
          <Row className="g-4">
            {groupedProducts[category].map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                <Card className="product-card h-100 shadow-sm">
                  <Card.Img variant="top" src={product.imageUrl} /> 
                  <Card.Body className="text-center">
                    <Card.Title className="text-dark">{product.name}</Card.Title>
                    <p className="text-success fw-semibold">₹{product.price}</p>
                    <p className="text-muted">{product.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default AllProducts;