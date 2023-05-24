import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-light text-decoration-none" href="#/">Home</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/skills">Skills</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/jobs">Jobs</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
