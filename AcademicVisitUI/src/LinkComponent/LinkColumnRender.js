import { sortForList } from "../public/Functions";

const LinkColumnRender = (linkList, LinkType) =>
  linkList.sort(sortForList).map((link, index) => {
    if (LinkType === "NoValue") {
      return null;
    } else if (link.linkType !== LinkType) {
      return null;
    } else
      return (
        <a
          className="col"
          href={link.linkAddress}
          key={index}
          target="_blank"
          rel="noreferrer"
        >
          {link.linkName}
        </a>
      );
  });

export { LinkColumnRender };
