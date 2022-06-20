import "../../CSS/page2/style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logotest from '../../images/logotest.png';




export default function Agencenav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" className="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/"><img width={100} src={logotest} alt="hey" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/agence">React-Fiber</Nav.Link>
            <NavDropdown title="Pages secrètes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/css">CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">XXX</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">XXX</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gsap">Gsap</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">A propos de moi</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }