import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, usePage } from '@inertiajs/react';
import { handleScroll } from '@/Utilities/scrollFunction';


function Navigation() {
  const { auth } = usePage().props; // Získanie údajov o autentifikácii z kontextu stránky
  const page = usePage(); // Získanie údajov o aktuálnej stránke

  const scrollTo = (target) => {
    handleScroll(target);
  };

  return (
    <>
      <Navbar expand="md" bg="primary" variant="dark" fixed="top">
        <Container>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ cursor: 'pointer' }}>
              Single Pair Ethernet
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {page.url !== '/profile' && page.url !== '/videos' && (
                <>
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
                  <Nav.Link as={Link} href={route('videos')}>Videá</Nav.Link>

                </>
              )}
            </Nav>
            <Nav className="justify-content-end ">
              {auth.user ? ( 
                <>
                  <Nav.Link as={Link} href={route('profile.edit')}>
                    Profil
                  </Nav.Link>
                  <Nav.Link>
                    <Link href={route('logout')} method="post" as="button">
                      Odhlásenie
                    </Link>
                  </Nav.Link>
                  {auth.user && auth.user.admin === 1 && (
                    <Nav.Link className="text-dark fw-bold pe-none">
                      REŽIM ADMINISTRÁTORA
                    </Nav.Link>
                  )}

                </>
              ) : (
                <>
                  {page.url.pathname !== '/profile' && ( // Kontrola, zda URL není '/profile'
                    <>
                      <Nav.Link as={Link} href={route('login')}>
                        Prihlásenie
                      </Nav.Link>
                      <Nav.Link as={Link} href={route('register')}>
                        Registrácia
                      </Nav.Link>
                    </>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
