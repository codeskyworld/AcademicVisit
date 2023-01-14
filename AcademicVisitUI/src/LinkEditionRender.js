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
import { linkTableRender } from "./LinkRender";
import { Alert } from "react-st-modal";
import { LinkFilterRender } from "./LinkFilterRender";

const LinkEditionRender = () => {
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
          <Col md={4}>
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
          <Col md={4}>
            <FormGroup>
              <Label for="linkType">Link Type</Label>
              <Input
                id="linkType"
                name="linkType"
                placeholder="Please input the Link Type"
                type="text"
                onChange={(event) => {
                  setLinkType(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button
          onClick={() => {
            AddLinkHandler();
            document.getElementById("linkName").value = "";
            document.getElementById("linkAddress").value = "";
            document.getElementById("linkType").value = "";
          }}
        >
          Add
        </Button>
      </Form>
      <LinkFilterRender
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
          {linkTableRender(linkList, setLinkName, setLinkAddress, setLinkType)}
        </tbody>
      </Table>
    </div>
  );
};
export default LinkEditionRender;
