import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="text-secondary text-decoration-none" to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-secondary text-decoration-none" to="/skills">Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-secondary text-decoration-none" to="/jobs">Jobs</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-secondary text-decoration-none" to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
