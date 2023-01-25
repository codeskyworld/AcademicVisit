const FilterLinkType = (linkList) => {
  const resultConvertToLinkType = linkList.map((prop) => prop.linkType);
  if (resultConvertToLinkType.length >= 10) {
    console.log("The link type has been more 10!");
    return;
  }
  const uniqueLinkTypelist = RemoveDuplicates(resultConvertToLinkType);
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
  return defaultArrary;
};

const RemoveDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

export { FilterLinkType, RemoveDuplicates };
