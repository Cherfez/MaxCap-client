import React from "react";
// import { logOut } from "../../store/user/actions";

export default function LoggedIn() {
  return (
    <>
      <p style={{ padding: ".5rem 1rem" }}>Hi, climber</p>
      {/* <Button variant="success" onClick={() => dispatch(logOut())}>
        Logout
      </Button> */}
      <button>Logout</button>
    </>
  );
}
