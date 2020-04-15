import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  // const token = useSelector(selectToken);

  // const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={NavLink} to="/">
        MaxCap.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/gyms">Search gyms</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <div>
    //   <nav id="nav">
    //     <span className="navbar-toggle" id="js-navbar-toggle">
    //       <GiHamburgerMenu />
    //     </span>
    //     <ul className="main-nav" id="js-menu">
    //       <li>
    //         <NavLink to="/" className="nav-links">
    //           HOME
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/gyms" class="nav-links">
    //           Book session
    //         </NavLink>
    //       </li>
    //       {/* <li>{loginLogoutControls}</li> */}
    //     </ul>
    //   </nav>
    // </div>
  );
}
