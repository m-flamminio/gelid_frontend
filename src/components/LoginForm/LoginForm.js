import { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleLogin = () => {
    const searchParam = new URLSearchParams({
      username: username,
      password: password,
    });

    axios
      .get("users?" + searchParam)
      .then((res) => {
        const auth = res.data;
        if (!auth) setIsInvalid(true);
        else props.onAuth(auth);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form>
        <Form.Group
          style={{ padding: "10px 10px" }}
          controlId="formBasicusername"
        >
          <FloatingLabel controlId="floatingInput" label="Username">
            <Form.Control
              isInvalid={isInvalid}
              style={{ height: "60px" }}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="username"
              placeholder="Enter username"
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
              isInvalid={isInvalid}
              style={{ height: "60px" }}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              Username o password non sono corretti
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
      </Form>
      <Button onClick={() => handleLogin()} variant="primary" type="submit">
        Login
      </Button>
    </>
  );
};

export default LoginForm;
