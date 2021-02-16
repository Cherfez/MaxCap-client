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
      <p className="mr-md-4 mb-md-0">Hi, {user.name}</p>
      <div className="buttonGroup">
        <Button onClick={() => history.push("/profile")} className="mr-md-4">
          Profile
        </Button>
        <Button className="logout" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </div>
    </>
  );
}
