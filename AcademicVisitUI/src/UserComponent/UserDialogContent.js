import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditUser } from "./UserProcess";
import { Alert } from "react-st-modal";
import UserTypeDropdown from "./UserTypeDropdown";
import { CheckUserListIsDuplicated } from "../public/Functions";

const UserDialogContent = (props) => {
  const dialog = useDialog();
  const [userName, setUserName] = useState(props.name);
  const [userPassword, setUserPassword] = useState(props.password);
  const [userType, setUserType] = useState(props.type);

  return (
    <Form id="EditDialog">
      <Row className="formContainer">
        <Col md={12}>
          <FormGroup>
            <Label for="userName">User Name</Label>
            <Input
              name="userName"
              value={userName}
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
              value={userPassword}
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
                if (
                  props.name === userName &&
                  props.password === userPassword &&
                  props.type === userType
                ) {
                  dialog.close();
                } else if (
                  CheckUserListIsDuplicated(
                    props.name,
                    userName,
                    props.userList
                  )
                ) {
                  dialog.close();
                  Alert(
                    "Sorry, User Name is duplicated. Please try another one.",
                    "Warning"
                  );
                } else {
                  EditUser(props.id, userName, userPassword, userType);
                  dialog.close();
                  window.location.reload(true);
                }
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
