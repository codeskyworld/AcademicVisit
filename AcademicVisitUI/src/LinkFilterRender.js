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

  const FilterClick = (objButton) => {
    if (objButton.target.value === "All") {
      props.setLinkList(props.fullLinkList);
    } else {
      const resultFilter = props.fullLinkList.filter(
        (prop) => prop.linkType === objButton.target.value
      );
      props.setLinkList(resultFilter);
    }
  };

  const RemoveDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  const FilterItemsRender = (props) => {
    const typeFullList = props.fullLinkList.map((prop) => {
      return prop.linkType;
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
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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

export { LinkFilterRender };
