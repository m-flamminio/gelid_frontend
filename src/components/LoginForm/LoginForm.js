import { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Form>
        <Form.Group style={{ padding: "10px 10px" }} controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control
              style={{height: "60px"}}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          style={{ padding: "10px 10px" }}
          className="mb-3"
          controlId="formBasicPassword"
        >
          <FloatingLabel controlId="floatingInput" label="Password">
            <Form.Control
              style={{height: "60px"}}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
      <Button onClick={() => props.onAuth(email, password)} variant="primary" type="submit">
        Login
      </Button>
    </>
  );
};

export default LoginForm;
