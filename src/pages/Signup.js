import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { signUp } from "../../store/user/actions";
// import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [certified, setCertified] = useState(false);
  const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const history = useHistory();

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/");
  //   }
  // }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    // dispatch(signUp(name, email, phone, password));

    // setEmail("");
    // setPassword("");
    // setName("");
    // setPhone("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>

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

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="phone"
            placeholder="Enter phonenumber"
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

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Certified belayer</Form.Label>
          <Form.Control
            value={certified}
            onChange={(event) => setCertified(event.target.value)}
            type="checkbox"
          />
          <Form.Text className="text-muted">
            You are a certified belayer. If you cant show your certificate the
            gym can refuse entry.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
      </Form>

      <div>
        <h4>Already have an account?</h4>
        <Link to="/login">Click here to log in</Link>
      </div>
    </Container>
  );
}
