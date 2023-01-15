import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import { AddLink, GetLinks } from "./LinkProcess";
import { Alert } from "react-st-modal";
import { UserTableRender } from "./UserTableRender";
import UserTypeDropdown from "./UserTypeDropdown";
import { UserFilterRender } from "./UserFilterRender";
import { AddUser, GetUsers } from "./UserProcess";

const UserManageRender = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [userList, setUserList] = useState([]);
  const [fullUserList, setFullUserList] = useState([]);

  //   useEffect(() => {
  //     GetUsers(setUserList, setFullUserList);
  //   }, [userName]);

  const AddUserHandler = async () => {
    if (!userName || !userPassword || !userType) {
      Alert(
        "Please input both User Name, User Password and User Type",
        "Warning"
      );
    } else {
      AddUser(userName, userPassword, userType);
      window.location.reload(true);
    }
  };

  return (
    <div id="UserEdition" className="container mt-4 mb-auto">
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="userName">User Name</Label>
              <Input
                id="userName"
                name="userName"
                placeholder="Please input User Name"
                type="text"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="userPassword">User Password</Label>
              <Input
                id="userPassword"
                name="userPassword"
                placeholder="Please input User Password"
                type="password"
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="userType">User Type</Label>
              <UserTypeDropdown />
            </FormGroup>
          </Col>
        </Row>

        <Button
          color="primary"
          onClick={() => {
            AddUserHandler();
            document.getElementById("userName").value = "";
            document.getElementById("userPassword").value = "";
            document.getElementById("userType").value = "";
          }}
        >
          &nbsp;&nbsp;Add&nbsp;&nbsp;
        </Button>
      </Form>
      <UserFilterRender
        userList={userList}
        fullUserList={fullUserList}
        setUserList={setUserList}
      />
      <Table className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Address</th>
            <th>User Type</th>
            <th>User Updating Time</th>
            <th>Manipulation</th>
          </tr>
        </thead>
        <tbody>
          {UserTableRender(userList, setUserName, setUserPassword, setUserType)}
        </tbody>
      </Table>
    </div>
  );
};
export default UserManageRender;
