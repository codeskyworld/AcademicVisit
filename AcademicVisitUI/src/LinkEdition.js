import React, { useState } from "react";
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
import { Alert, Confirm } from "react-st-modal";

const LinkEdition = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkList, setLinkList] = useState([]);

  const AddLinkHandler = async () => {
    if (!linkName || !linkAddress) {
      Confirm("Сonfirmation text", "Сonfirmation title");
    } else {
      AddLink(linkName, linkAddress);
    }
  };

  const GetLinkHandler = async () => {
    GetLink(setLinkList);
  };

  let linkTableRender;

  linkTableRender = linkList.map((link, index) => {
    return (
      <tr key={index}>
        <th scope="row">{link.id}</th>
        <td>{link.linkName}</td>
        <td>{link.linkAddress}</td>
        <td>{link.linkUpdatingTime}</td>
        <td>
          <Button color="success">Edit</Button>&nbsp;&nbsp;
          <Button color="danger">Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-4 mb-auto">
      <Form className="mb-5">
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
        <Button onClick={AddLinkHandler}>Add</Button>
        <Button onClick={GetLinkHandler}>Get</Button>
      </Form>

      <Table className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Link Name</th>
            <th>Link Address</th>
            <th>Link Updating Time</th>
            <th>Manipulation</th>
          </tr>
        </thead>
        <tbody>{linkTableRender}</tbody>
      </Table>
    </div>
  );
};
export default LinkEdition;
