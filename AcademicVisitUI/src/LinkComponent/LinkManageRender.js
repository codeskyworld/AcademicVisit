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
import { LinkTableRender } from "./LinkTableRender";
import { Alert } from "react-st-modal";
import { LinkFilterDropdown } from "./LinkFilterDropdown";
import { CheckLinkListLimitation } from "../public/Functions";

const LinkManageRender = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkType, setLinkType] = useState("");
  const [linkList, setLinkList] = useState([]);
  const [fullLinkList, setFullLinkList] = useState([]);

  useEffect(() => {
    GetLinks(setLinkList, setFullLinkList);
  }, [linkName]);

  const AddLinkHandler = async () => {
    if (!linkName || !linkAddress || !linkType) {
      Alert(
        "Please input both Link Name, Link Address and Link Type",
        "Warning"
      );
    } else if (!CheckLinkListLimitation(linkList, linkType)) {
      Alert(
        "Sorry, the quantity of Link Type cannot be more than 10!",
        "Warning"
      );
    } else {
      AddLink(linkName, linkAddress, linkType);
      window.location.reload(true);
    }
  };

  return (
    <div id="LinkEdition" className="container mt-4 mb-auto">
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="linkName">Link Name</Label>
              <Input
                id="linkName"
                name="linkName"
                placeholder="Please input Link Name"
                type="text"
                onChange={(event) => {
                  setLinkName(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="linkAddress">Link Address</Label>
              <Input
                id="linkAddress"
                name="linkAddress"
                placeholder="Please input Link Address"
                type="url"
                onChange={(event) => {
                  setLinkAddress(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="linkType">Link Type</Label>
              <Input
                id="linkType"
                name="linkType"
                placeholder="Please input Link Type"
                type="text"
                onChange={(event) => {
                  setLinkType(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3} className="py-4 my-2 px-4">
            <FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  AddLinkHandler();
                  document.getElementById("linkName").value = "";
                  document.getElementById("linkAddress").value = "";
                  document.getElementById("linkType").value = "";
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <LinkFilterDropdown
        linkList={linkList}
        fullLinkList={fullLinkList}
        setLinkList={setLinkList}
      />
      <Table className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Link Name</th>
            <th>Link Address</th>
            <th>Link Type</th>
            <th>Link Updating Time</th>
            <th>Manipulation</th>
          </tr>
        </thead>
        <tbody>
          {LinkTableRender(linkList, setLinkName, setLinkAddress, setLinkType)}
        </tbody>
      </Table>
    </div>
  );
};
export default LinkManageRender;
