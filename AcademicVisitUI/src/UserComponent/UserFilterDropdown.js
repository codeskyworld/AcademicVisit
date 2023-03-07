import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const UserFilterRender = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const FilterClick = (objButton) => {
    if (objButton.target.value === "All") {
      props.setUserList(props.fullUserList);
    } else {
      const resultFilter = props.fullUserList.filter(
        (prop) => prop.userType === objButton.target.value
      );
      props.setUserList(resultFilter);
    }
  };

  const RemoveDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  const FilterItemsRender = (props) => {
    const typeFullList = props.fullUserList.map((prop) => {
      return prop.userType;
    });
    const typeList = RemoveDuplicates(typeFullList);
    return typeList.map((type, index) => {
      return (
        <DropdownItem key={index} value={type} onClick={FilterClick}>
          {type}
        </DropdownItem>
      );
    });
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="mb-3">
      <DropdownToggle caret size="md">
        Filter
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="All" onClick={FilterClick}>
          ALL
        </DropdownItem>
        {FilterItemsRender(props)}
      </DropdownMenu>
    </Dropdown>
  );
};

export { UserFilterRender };
