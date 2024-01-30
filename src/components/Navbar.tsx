import { Navbar, Container, Nav } from "react-bootstrap";

const CustomNavbar = () => {
    const currentPath = window.location.pathname;
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="logo">JOHN<b>.</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={currentPath === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/Calculator" className={currentPath === '/Calculator' ? 'active' : ''}>Calculator</Nav.Link>
            <Nav.Link href="/Json" className={currentPath === '/Json' ? 'active' : ''}>JSON</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;