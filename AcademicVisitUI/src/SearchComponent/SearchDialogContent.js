import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditSearch } from "./SearchProcess";
import { Alert } from "react-st-modal";

const SearchDialogContent = (props) => {
  const dialog = useDialog();

  const [searchName, setSearchName] = useState("");
  const [searchLinkAddress, setSearchLinkAddress] = useState("");
  const [searchIconAddress, setSearchIconAddress] = useState("");

  return (
    <Form id="EditDialog">
      <Row className="formContainer">
        <Col md={12}>
          <FormGroup>
            <Label for="searchName">Search Name</Label>
            <Input
              name="searchName"
              placeholder={props.searchName}
              type="text"
              onChange={(event) => {
                setSearchName(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="searchLinkAddress">Search Link Address</Label>
            <Input
              name="searchLinkAddress"
              placeholder={props.searchLinkAddress}
              type="url"
              onChange={(event) => {
                setSearchLinkAddress(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="searchIconAddress">Search Icon Address</Label>
            <Input
              name="searchIconAddress"
              placeholder={props.searchIconAddress}
              type="url"
              onChange={(event) => {
                setSearchIconAddress(event.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <div className="buttonContainer mt-4">
          <Button
            color="primary"
            onClick={() => {
              if (!searchName || !searchLinkAddress || !searchIconAddress) {
                Alert(
                  "Please input Search Name, Search Link Address and Search Icon Address",
                  "Warning"
                );
              } else {
                EditSearch(
                  props.id,
                  searchName,
                  searchLinkAddress,
                  searchIconAddress
                );
                dialog.close();
                window.location.reload(true);
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

export { SearchDialogContent };
