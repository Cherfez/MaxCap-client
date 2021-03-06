import React, { useState, useEffect } from "react";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { signUp } from "../store/user/actions";

import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [certified, setCertified] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/gyms");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, phone, certified));

    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
    setCertified(false);
  }

  return (
    <div id="signup">
      <Jumbotron fluid>
        <h1>Singup</h1>
      </Jumbotron>

      <div className="containerr">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>
              Name <span>*</span>
            </Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Email address <span>*</span>
            </Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>
              Phone number <span>*</span>
            </Form.Label>
            <Form.Control
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              type="phone"
              placeholder="Enter phonenumber"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password <span>*</span>
            </Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicBelayer" className="certified-info">
            <Form.Label>Certified belayer</Form.Label>
            <Form.Control
              value={certified}
              onChange={(event) => setCertified(event.target.value)}
              type="checkbox"
            />
            <Form.Text className="text-muted">
              You are a certified belayer. If you can't show your certificate
              the gym can refuse entry.
            </Form.Text>
          </Form.Group>

          <Form.Group className="button">
            <Button type="submit" onClick={submitForm}>
              Sign up
            </Button>
            <Form.Text className="text-muted">
              All fields with <span>*</span> are required
            </Form.Text>
          </Form.Group>
        </Form>

        <div className="login">
          <h5>Already have an account?</h5>
          <Link to="/login">Click here to log in</Link>
        </div>
      </div>
    </div>
  );
}
