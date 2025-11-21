import React from 'react';
import { Navbar, Nav, Container, Form, Button, Badge } from "react-bootstrap";
import './ImageMarquee.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isLoggedIn = !!user._id;

 
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="rynott-navbar">
        <Container fluid className='container me-5 ms-5 d-flex align-items between'>
          <div>
            <Navbar.Brand href="/" className='fw-bold'>
              Rynott Store
            </Navbar.Brand>
          </div>

          <div>
            <Navbar.Toggle aria-controls="rynott-nav" />
            <Navbar.Collapse id="rynott-nav">

              <Form className="d-flex me-3" role="search">
                <Form.Control
                  type="search"
                  placeholder="Search gadgets, accessories, deals…"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>

              <Nav>
                <Nav.Link as={Link} to={'/wishlist'}>Wishlist</Nav.Link>
                <Nav.Link as={Link} to={'/cart'}>
                  Cart <Badge bg="danger">0</Badge>
                </Nav.Link>


                {isLoggedIn ? (
                  <div className="d-flex align-items-center">
                    <span className="text-light fw-bold me-2">
                      {user.name || "User"}
                    </span>
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Nav.Link as={Link} to={'/login'}>Account</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>

          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;