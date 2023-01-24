import { Navbar, Nav, NavLink } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>Questionario</NavLink>
      </Nav>
    </Navbar>
  );
};

export default Topbar;
