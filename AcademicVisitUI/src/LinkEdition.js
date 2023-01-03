import axios from "axios";
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

const LinkEdition = () => {
  const [linkName, setLinkName] = useState("");
  const [linkAddress, setLinkAddress] = useState("");
  const [linkList, setLinkList] = useState([]);

  const AddLink = async () => {
    await axios
      .post(
        "http://localhost:5271/FirstLink",
        {
          LinkName: linkName,
          LinkAddress: linkAddress,
          LinkUpdatingTime: new Date().toJSON(),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          console.log("Add link is successfull!");
          console.log(res);
        }
      })
      .catch((error) => alert("error is " + error));
  };

  const GetLink = async () => {
    await axios
      .get("http://localhost:5271/FirstLink")
      .then((res) => {
        if (res.status === 200) {
          console.log("Get link is successfull!");
          setLinkList(res.data);
        }
      })
      .catch((error) => alert("error is " + error));
  };

  return (
    <div className="container mt-4 ">
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
        <Button onClick={AddLink}>Add</Button>
        <Button onClick={GetLink}>Get</Button>
      </Form>
      <Table className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Manipulation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button color="success">Edit</Button>&nbsp;&nbsp;
              <Button color="danger">Delete</Button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default LinkEdition;
