import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function PageNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ textAlign: "center" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ marginLeft: "20px", fontSize: "30px" }}
        >
          Samir Jadav
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><li>Home</li></Nav.Link>
            <Nav.Link href="/Skills"><li>Skill</li></Nav.Link>
            <Nav.Link href="/Project"><li>Projects</li></Nav.Link>
            <Nav.Link href="/About"><li>About me</li></Nav.Link>
            <Nav.Link href="/Contect"><li>Contact</li></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
