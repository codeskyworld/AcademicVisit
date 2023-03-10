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
import { AddSearch, GetSearches } from "./SearchProcess";
import { SearchTableRender } from "./SearchTableRender";
import { Alert } from "react-st-modal";

const SearchManageRender = () => {
  const [searchName, setSearchName] = useState("");
  const [searchLinkAddress, setSearchLinkAddress] = useState("");
  const [searchIconAddress, setSearchIconAddress] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    GetSearches(setSearchList);
  }, [searchName]);

  const AddSearchHandler = async () => {
    if (!searchName || !searchLinkAddress || !searchIconAddress) {
      Alert(
        "Please input Search Name, Search Link Address and Search Icon Address",
        "Warning"
      );
    } else {
      AddSearch(searchName, searchLinkAddress, searchIconAddress);
      window.location.reload(true);
    }
  };

  return (
    <div id="LinkEdition" className="container mt-4 mb-auto">
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="searchName">Search Name</Label>
              <Input
                id="searchName"
                name="searchName"
                placeholder="Please input Search Name"
                type="text"
                onChange={(event) => {
                  setSearchName(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="searchLinkAddress">Search Link Address</Label>
              <Input
                id="searchLinkAddress"
                name="searchLinkAddress"
                placeholder="Please input Search Link Address"
                type="url"
                onChange={(event) => {
                  setSearchLinkAddress(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="searchIconAddress">Search Icon Address</Label>
              <Input
                id="searchIconAddress"
                name="searchIconAddress"
                placeholder="Please input Search Icon Address"
                type="url"
                onChange={(event) => {
                  setSearchIconAddress(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={3} className="py-4 my-2 px-4">
            <FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  AddSearchHandler();
                  document.getElementById("searchName").value = "";
                  document.getElementById("searchLinkAddress").value = "";
                  document.getElementById("searchIconAddress").value = "";
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Table className="mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Search Name</th>
            <th>Search Link Address</th>
            <th>search Icon Address</th>
            <th>Search Updating Time</th>
            <th>Manipulation</th>
          </tr>
        </thead>
        <tbody>
          {SearchTableRender(
            searchList,
            setSearchName,
            setSearchLinkAddress,
            setSearchIconAddress
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default SearchManageRender;
