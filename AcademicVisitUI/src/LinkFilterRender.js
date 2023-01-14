import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const LinkFilterRender = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const FilterItemsRender = (props) => {
    return props.linkList.map((link, index) => {
      return <DropdownItem key={index}>{link.linkType}</DropdownItem>;
    });
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="md">
        Filter
      </DropdownToggle>
      <DropdownMenu>{FilterItemsRender(props)}</DropdownMenu>
    </Dropdown>
  );
};

export { LinkFilterRender };
