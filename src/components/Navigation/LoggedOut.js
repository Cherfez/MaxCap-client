import React from "react";
// import NavbarItem from "./NavbarItem";
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavLink path="/login" linkText="Login" />
    </>
  );
}
