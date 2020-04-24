import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

import Button from "react-bootstrap/Button";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  return (
    <>
      <p style={{ padding: ".5rem 1rem" }}>Hi, {user.name}</p>
      <Button onClick={() => history.push("/profile")}>Profile</Button>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
