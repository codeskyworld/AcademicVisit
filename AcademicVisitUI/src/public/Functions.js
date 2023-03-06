const FilterLinkType = (linkList, typeClick) => {
  const resultConvertToLinkType = linkList.map((prop) => prop.linkType);

  const uniqueLinkTypelist = RemoveDuplicates(resultConvertToLinkType);
  if (uniqueLinkTypelist.length > 10) {
    console.log("The link type has been more 10!");
    return;
  }

  let defaultArrary = [
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
    "NoValue",
  ];
  let i = 0;
  for (i = 0; i < uniqueLinkTypelist.length; i++) {
    defaultArrary[i] = uniqueLinkTypelist[i];
  }
  if (typeClick !== "NoValue") {
    let ArraryForClick = [
      typeClick,
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
      "NoValue",
    ];
    return ArraryForClick;
  }

  return defaultArrary;
};

const RemoveDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

const sortForLinkList = (a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};

const CheckLinkListLimitation = (linkList, newlinkType) => {
  const resultConvertToLinkType = linkList.map((prop) => prop.linkType);
  const uniqueLinkTypelist = RemoveDuplicates(resultConvertToLinkType);
  if (uniqueLinkTypelist.length <= 9) {
    return true;
  } else if (uniqueLinkTypelist.length === 10) {
    return uniqueLinkTypelist.includes(newlinkType);
  } else {
    return false;
  }
};

const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userType");
  localStorage.removeItem("userName");
  window.location.href = "/";
};

export {
  FilterLinkType,
  RemoveDuplicates,
  sortForLinkList,
  CheckLinkListLimitation,
  Logout,
};
