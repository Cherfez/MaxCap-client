import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile() {
  const user = useSelector(selectUser);
  console.log("user", user);
  return (
    <div>
      <Jumbotron>
        <h1>Welcome, {user.name}</h1>
      </Jumbotron>
      <Container>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phonenr: {user.phone}</p>
          <p>certified: {user.isBelayer}</p>
        </div>

        <div>
          <h2>Bookings</h2>
          <div></div>
        </div>
      </Container>
    </div>
  );
}
