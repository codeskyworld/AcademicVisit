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
import { AddLink, GetLink } from "./LinkProcess";
import { Alert } from "react-st-modal";
import { UserTableRender } from "./UserTableRender";
import UserTypeDropdown from "./UserTypeDropdown";
import { UserFilterRender } from "./UserFilterRender";

const UserManageRender = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkType, setLinkType] = useState("");
  const [linkList, setLinkList] = useState([]);
  const [fullLinkList, setFullLinkList] = useState([]);

  useEffect(() => {
    GetLink(setLinkList, setFullLinkList);
  }, [linkName]);

  const AddLinkHandler = async () => {
    if (!linkName || !linkAddress || !linkType) {
      Alert("Please input both Link Name and Link Address", "Warning");
    } else {
      AddLink(linkName, linkAddress, linkType);
      window.location.reload(true);
    }
  };

  return (
    <div id="LinkEdition" className="container mt-4 mb-auto">
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="linkName">User Name</Label>
              <Input
                id="linkName"
                name="linkName"
                placeholder="Please input User Name"
                type="text"
                onChange={(event) => {
                  setLinkName(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="linkAddress">User Password</Label>
              <Input
                id="linkAddress"
                name="linkAddress"
                placeholder="Please input User Password"
                type="password"
                onChange={(event) => {
                  setLinkAddress(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="linkType">User Type</Label>
              <UserTypeDropdown />
            </FormGroup>
          </Col>
        </Row>

        <Button
          color="primary"
          onClick={() => {
            AddLinkHandler();
            document.getElementById("linkName").value = "";
            document.getElementById("linkAddress").value = "";
            document.getElementById("linkType").value = "";
          }}
        >
          &nbsp;&nbsp;Add&nbsp;&nbsp;
        </Button>
      </Form>
      <UserFilterRender
        linkList={linkList}
        fullLinkList={fullLinkList}
        setLinkList={setLinkList}
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
          {UserTableRender(linkList, setLinkName, setLinkAddress, setLinkType)}
        </tbody>
      </Table>
    </div>
  );
};
export default UserManageRender;
