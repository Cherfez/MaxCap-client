import React from "react";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";

export default function LoggedOut() {
  return (
    <>
      <NavLink to="/login">
        <Button className="mx-auto mr-md-4 login">Login</Button>
      </NavLink>
    </>
  );
}
