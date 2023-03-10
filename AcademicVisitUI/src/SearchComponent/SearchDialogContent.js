import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { EditSearch } from "./SearchProcess";
import { Alert } from "react-st-modal";

const SearchDialogContent = (props) => {
  const dialog = useDialog();

  const [searchName, setSearchName] = useState(props.searchName);
  const [searchLinkAddress, setSearchLinkAddress] = useState(
    props.searchLinkAddress
  );
  const [searchIconAddress, setSearchIconAddress] = useState(
    props.searchIconAddress
  );

  return (
    <Form id="EditDialog">
      <Row className="formContainer">
        <Col md={12}>
          <FormGroup>
            <Label for="searchName">Search Name</Label>
            <Input
              name="searchName"
              value={searchName}
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
              value={searchLinkAddress}
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
              value={searchIconAddress}
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
                if (
                  props.searchName === searchName &&
                  props.searchLinkAddress === searchLinkAddress &&
                  props.searchIconAddress === searchIconAddress
                ) {
                  dialog.close();
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
