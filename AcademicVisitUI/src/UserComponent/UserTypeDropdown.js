import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const UserTypeDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const ClickUserType = (objButton) => {
    if (objButton.target.value === "Administrator") {
      props.setUserType("Administrator");
    } else if (objButton.target.value === "General User")
      props.setUserType("General User");
  };
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="md" color="warning">
        {props.userType}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="General User" onClick={ClickUserType}>
          General User
        </DropdownItem>
        <DropdownItem value="Administrator" onClick={ClickUserType}>
          Administrator
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default UserTypeDropdown;
