import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditLink } from "./LinkProcess";
import { Alert } from "react-st-modal";

const CustomDialogContent = (props) => {
  const dialog = useDialog();

  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");

  return (
    <Form className="EditDialog">
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="linkName">Link Name</Label>
            <Input
              name="linkName"
              placeholder={props.name}
              type="text"
              onChange={(event) => {
                setLinkName(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="linkAddress">Link Address</Label>
            <Input
              name="linkAddress"
              placeholder={props.address}
              type="url"
              onChange={(event) => {
                setLinkAddress(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button
        className="mb-3"
        color="warning"
        onClick={() => {
          if (!linkName || !linkAddress) {
            Alert("Please input both Link Name and Link Address", "Warning");
          } else {
            EditLink(linkName, linkAddress);
            dialog.close();
          }
        }}
      >
        Confirm
      </Button>
      <Button
        className="mb-3"
        color="info"
        onClick={() => {
          dialog.close();
        }}
      >
        &nbsp;Cancel&nbsp;
      </Button>
    </Form>
  );
};

export { CustomDialogContent };
