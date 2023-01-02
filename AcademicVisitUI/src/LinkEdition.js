import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const LinkEdition = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");

  const AddLink = async () => {
    await axios
      .post(
        "http://localhost:5271/FirstLink",
        {
          Id: 0,
          LinkName: linkName,
          LinkAddress: linkAddress,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          console.log("Add link is successfull!");
        }
      })
      .catch((error) => alert("error is " + error));
  };

  return (
    <div className="container mt-4">
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="linkName">Link Name</Label>
              <Input
                id="linkName"
                name="linkName"
                placeholder="Please input the Link Name"
                type="text"
                onChange={(event) => {
                  setLinkName(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="linkAddress">Link Address</Label>
              <Input
                id="linkAddress"
                name="linkAddress"
                placeholder="Please input the Link Address"
                type="url"
                onChange={(event) => {
                  setLinkAddress(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={AddLink}>Add</Button>
      </Form>
    </div>
  );
};
export default LinkEdition;
