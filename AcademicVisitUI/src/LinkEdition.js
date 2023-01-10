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
import { AddLink, GetLink, RemoveLink, GetEditLink } from "./LinkProcess";
import { Alert, Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { CustomDialogContent } from "./EditDialog";

const LinkEdition = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    GetLink(setLinkList);
  }, [linkName]);

  const AddLinkHandler = async () => {
    if (!linkName || !linkAddress) {
      Alert("Please input both Link Name and Link Address", "Warning");
    } else {
      AddLink(linkName, linkAddress);
      window.location.reload(true);
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
          <Button
            color="success"
            onClick={async () => {
              await GetEditLink(link.id, setLinkName, setLinkAddress);
              await CustomDialog(
                <CustomDialogContent
                  id={link.id}
                  name={link.linkName}
                  address={link.linkAddress}
                />,
                {
                  title: `${link.id}`,
                  showCloseIcon: true,
                }
              );
              window.location.reload(true);
            }}
          >
            &nbsp;&nbsp;Edit&nbsp;&nbsp;
          </Button>
          &nbsp;&nbsp;
          <Button
            color="danger"
            onClick={async () => {
              const result = await Confirm(
                `Are you sure to delete "${link.linkName}" ?`,
                "Warning"
              );
              if (result) {
                RemoveLink(link.id);
                window.location.reload(true);
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
        <Button
          onClick={() => {
            AddLinkHandler();
            document.getElementById("linkName").value = "";
            document.getElementById("linkAddress").value = "";
          }}
        >
          Add
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
