import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const CustomDialogContent = (props) => {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <Form className="EditDialog">
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="linkName">Link Name</Label>
            <Input
              name="linkName"
              placeholder="Please input the Link Name"
              type="text"
              value={props.name}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="linkAddress">Link Address</Label>
            <Input
              name="linkAddress"
              placeholder="Please input the Link Address"
              type="url"
              value={props.address}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button className="mb-3" color="primary" onClick={() => {}}>
        Confirm
      </Button>
      <Button
        className="mb-3"
        color="warning"
        onClick={() => {
          window.location.reload(true);
        }}
      >
        &nbsp;Cancel&nbsp;
      </Button>
    </Form>
  );
};

export { CustomDialogContent };
