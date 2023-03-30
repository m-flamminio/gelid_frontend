import { useState } from "react";
import { Navbar, Nav, NavLink, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [activeLink, setActiveLink] = useState("/home");
  const navigate = useNavigate();

  return (
    <Navbar style={{justifyContent: "center"}} variant="dark" bg="dark">
      <Nav
        activeKey={activeLink}
        onSelect={(selectedKey) => {
          setActiveLink(selectedKey);
          navigate(selectedKey)
        }}
      >
        <NavItem>
          <NavLink eventKey="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="/form">Questionario</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Topbar;
