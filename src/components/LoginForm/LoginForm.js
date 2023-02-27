import { useState } from "react";
import { Row, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleRes = (res) => {
    const auth = res.data;
    if (!auth) setIsInvalid(true);
    else props.onAuth(auth);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchParam = new URLSearchParams({
      username: username,
      password: password,
    });

    if (!isRegister) {
      axios
        .get("users?" + searchParam)
        .then((res) => {
          handleRes(res);
        })
        .catch((err) => console.log(err));
    } else {
      const formdata = new FormData();

      formdata.append("username", username)
      formdata.append("password", password)

      axios
        .post("users", formdata)
        .then((res) => {
          handleRes(res);
        })
        .catch((err) => setIsInvalid(true));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Form.Check
            type="switch"
            label="Registra"
            onChange={() => setIsRegister(!isRegister)}
          ></Form.Check>
          <Button variant="primary" type="submit">
            {isRegister ? "Registra" : "Login"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
