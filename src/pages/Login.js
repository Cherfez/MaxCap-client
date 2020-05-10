import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push("/gyms");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div id="login">
      <Jumbotron fluid>
        <h1>Login</h1>
      </Jumbotron>

      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="button">
            <Button type="submit" onClick={submitForm}>
              Log in
            </Button>
          </Form.Group>
        </Form>

        <div className="signup">
          <h5>No account, yet?</h5>
          <Link to="/signup">Click here to sign up</Link>
        </div>
      </Container>
    </div>
  );
}
