import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditLink } from "./LinkProcess";
import { Alert } from "react-st-modal";

const LinkDialogContent = (props) => {
  const dialog = useDialog();

  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkType, setLinkType] = useState("");

  return (
    <Form id="EditDialog">
      <Row className="formContainer">
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
        <Col md={12}>
          <FormGroup>
            <Label for="linkType">Link Type</Label>
            <Input
              name="linkType"
              placeholder={props.type}
              type="text"
              onChange={(event) => {
                setLinkType(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <div className="buttonContainer mt-4">
          <Button
            color="primary"
            onClick={() => {
              if (!linkName || !linkAddress || !linkType) {
                Alert(
                  "Please input both Link Name and Link Address",
                  "Warning"
                );
              } else {
                EditLink(props.id, linkName, linkAddress, linkType);
                dialog.close();
                window.location.reload(true);
              }
            }}
          >
            Confirm
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              dialog.close();
            }}
          >
            Cancel
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export { LinkDialogContent };
