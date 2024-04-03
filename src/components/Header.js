import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-light text-decoration-none" href="#/">Inicio</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/jobs">Proyectos</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/skills">Conocimientos</Nav.Link>
          <Nav.Link className="text-light text-decoration-none" href="#/contact">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
