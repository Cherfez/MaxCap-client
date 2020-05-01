import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

import Container from "react-bootstrap/Container";

export default function Confirm() {
  const user = useSelector(selectUser);
  console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <Container>
      <h2>Booking confirmed</h2>
      <h6>Thank you for the booking, {user.name}</h6>
      <div>booking info</div>
    </Container>
  );
}
