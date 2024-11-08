import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { HeaderTitle } from "./Header.style";

const StyledNavbar = styled(Navbar)`
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = ({ username }) => (
  <StyledNavbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">
      X-Klusive Book Store
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/store">
        Store
      </Nav.Link>
      <Nav.Link as={Link} to="/cart">
        Cart
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/help">
        Help
      </Nav.Link>
    </Nav>
    <HeaderTitle>Welcome {username ? username : "Guest"}</HeaderTitle>
  </StyledNavbar>
);

export default Header;
