import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  const token = useSelector(selectToken);
  const [expanded, setExpanded] = useState(false);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={expanded}
      className="py-md-1"
    >
      <Navbar.Brand as={NavLink} to="/">
        MaxCap.
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-md-5">
          <NavLink to="/gyms" onClick={() => setExpanded(false)}>
            Search gyms
          </NavLink>
        </Nav>
        {loginLogoutControls}
      </Navbar.Collapse>
    </Navbar>
  );
}
