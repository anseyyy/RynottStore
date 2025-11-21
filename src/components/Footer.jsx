import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ImageMarquee.css";

function Footer() {
  return (
    <footer className="rynott-footer  ">
      <Container fluid className="py-4">
        <Row className="d-flex justify-content-between">
          <Col md={4} className="mb-3 ">
            <h5 className="fw-bold text-light">Rynott Store</h5>
            <p className="">
              Your trusted e‑tech destination for gadgets, accessories, and deals.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="text-light">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col md={4} className="">
            <h6 className="text-light">Follow Us</h6>
            <div className="social-icons">
              <a href="https://facebook.com" className="social"><FaFacebookF /></a>
              <a href="https://twitter.com" className="social"><FaTwitter /></a>
              <a href="https://instagram.com" className="social"><FaInstagram /></a>
              <a href="https://linkedin.com" className="social"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3">
            <small className="">
              © {new Date().getFullYear()} Rynott Store. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;