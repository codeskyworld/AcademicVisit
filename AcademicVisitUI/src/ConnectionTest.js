import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import { Alert } from "react-st-modal";
import {SERVER_URL} from "./Constant";


const ConnectionTest = () => {
  const [weatherForecast, setWeatherForecast] = useState({});

  const TestConnectionHandler = async (e) => {
    e.preventDefault();
    await axios
    .get(`${SERVER_URL}/WeatherForecast/GetWeatherForecast`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setWeatherForecast(res.data);
      } else {
        Alert(
          "An error occurred in the ConnectionTest! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Connection Testerror is " + error));
  };

  return (
    <div
      id="loginWindow"
      className="container d-flex justify-content-center pb-3"
    >
      <Form>
        <div className="text-center mt-5">
          <h1 id="loginTitle">Connection Test</h1>
        </div>
        <FormGroup row>
          <Label for="userName" sm={4}>
            Test Resut:
          </Label>
        </FormGroup>
        <div className="d-grid gap-3 mt-5">
          <button
            id="check"
            className="btn btn-outline-primary btn-lg w-100"
            onClick={TestConnectionHandler}
          >
            Test
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ConnectionTest;
