import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import { Alert } from "react-st-modal";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:5000/login",
        {
          UserName: userName,
          UserPassword: password,
          UserType: "General",
          UserUpdatingTime: new Date(),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          switch (res.data.result) {
            case "User not found":
              Alert("User not found", "Warning");
              break;
            case "Password is incorrect":
              Alert("Password is incorrect", "Warning");
              break;
            case "Error happened, the user type is wrong":
              Alert("Error happened, the user type is wrong", "Warning");
              break;
            case "This is token":
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("userType", res.data.userType);
              localStorage.setItem("userName", userName);
              window.location.href = "/";
              break;
            default:
              Alert("Error happened in login", "Warning");
          }
        } else {
          Alert("An error occurred when to login !", "Warning");
          return;
        }
      })
      .catch((error) => Alert("login handler throw a exception !", "Warning"));
  };

  //if (authentication) return;
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
          <Label for="userName" sm={4}>
            User name
          </Label>
          <Col sm={12}>
            <Input
              type="text"
              name="userName"
              id="userName"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={4}>
            Password
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
            onClick={LoginHandler}
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
