import React from "react";
import {Nav, Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/"><strong>Warteg</strong> Online</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/masukan">Saran & masukan</Nav.Link>
          <Nav.Link href="/comment">Komentar</Nav.Link>
          <Nav.Link href="/profil">Profil</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
