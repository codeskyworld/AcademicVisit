import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LoginHandler } from "./LoginComponent/LoginProcee";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState(false);

  if (authentication) return;
  return (
    <div
      id="loginWindow"
      className="container d-flex justify-content-center pb-3"
    >
      <Form>
        <div className="text-center mt-5">
          <h1 id="loginTitle">Login</h1>
        </div>
        <FormGroup row>
          <Label for="email" sm={4}>
            Email
          </Label>
          <Col sm={12}>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={4}>
            PassWord
          </Label>
          <Col sm={12}>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <div className="d-grid gap-3 mt-5">
          <button
            id="check"
            className="btn btn-outline-primary btn-lg w-100"
            onClick={LoginHandler(email, password, setAuthentication)}
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
