import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleScroll } from '@/Utilities/scrollFunction';
import { Link } from '@inertiajs/react';

function Navigation() {
  const scrollTo = (target) => {
    handleScroll(target);
  };

  return (
    <Navbar expand="md" bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          Single Pair Ethernet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollTo('spe')}>
              O SPE
            </Nav.Link>
            <NavDropdown title="Štandardy" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => scrollTo('mspe')}>
                100BASE-T1
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollTo('gspe')}>
                1000BASE-T1
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollTo('tshort')}>
                10BASE-T1S
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollTo('tlong')}>
                10BASE-T1L
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/videos">
              Videá
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end ">
            <Nav.Link href={route('login')}>
                Prihlásenie
            </Nav.Link>
            <Nav.Link href={route('register')}>
              Registrácia
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;