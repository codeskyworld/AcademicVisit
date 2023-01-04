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
import { AddLink, GetLink, RemoveLink } from "./LinkProcess";
import { Alert, Confirm } from "react-st-modal";

const LinkEdition = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkList, setLinkList] = useState([]);

  const AddLinkHandler = async () => {
    if (!linkName || !linkAddress) {
      Alert("Please input Link Name and Link Address", "Warning");
    } else {
      AddLink(linkName, linkAddress);
    }
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
          <Button
            color="danger"
            onClick={async () => {
              const result = await Confirm(
                `Are you sure to delete "${link.linkName}" ?`,
                "Warning"
              );
              if (result) {
                RemoveLink(link.id);
              } else {
                console.log("Deleting is canceled");
              }
            }}
          >
            Delete
          </Button>
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
        <Button
          onClick={() => {
            GetLink(setLinkList);
          }}
        >
          Get
        </Button>
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
