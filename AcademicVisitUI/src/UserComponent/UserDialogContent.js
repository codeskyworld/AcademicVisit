import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditUser } from "./UserProcess";
import { Alert } from "react-st-modal";
import UserTypeDropdown from "./UserTypeDropdown";

const UserDialogContent = (props) => {
  const dialog = useDialog();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userType, setUserType] = useState("Please Select");

  return (
    <Form id="EditDialog">
      <Row className="formContainer">
        <Col md={12}>
          <FormGroup>
            <Label for="userName">User Name</Label>
            <Input
              name="userName"
              placeholder={props.name}
              type="text"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="userPassword">New PassWord</Label>
            <Input
              name="userPassword"
              placeholder="Please input new password"
              type="password"
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="userType">User Type</Label>
            <UserTypeDropdown userType={userType} setUserType={setUserType} />
          </FormGroup>
        </Col>
        <div className="buttonContainer mt-4">
          <Button
            color="primary"
            onClick={() => {
              if (!userName || !userPassword || !userType) {
                Alert(
                  "Please input both User Name, User Password and User Type",
                  "Warning"
                );
              } else {
                EditUser(props.id, userName, userPassword, userType);
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

export { UserDialogContent };
