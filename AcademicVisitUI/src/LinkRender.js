import { RemoveLink, GetEditLink } from "./LinkProcess";
import { Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { CustomDialogContent } from "./EditDialog";
import { Button } from "reactstrap";

const linkTableRender = (linkList, setLinkName, setLinkAddress, setLinkType) =>
  linkList.map((link, index) => {
    return (
      <tr key={index}>
        <th scope="row">{link.id}</th>
        <td>{link.linkName}</td>
        <td>{link.linkAddress}</td>
        <td>{link.linkType}</td>
        <td>{link.linkUpdatingTime}</td>
        <td>
          <Button
            color="success"
            onClick={async () => {
              await GetEditLink(
                link.id,
                setLinkName,
                setLinkAddress,
                setLinkType
              );
              await CustomDialog(
                <CustomDialogContent
                  id={link.id}
                  name={link.linkName}
                  address={link.linkAddress}
                  type={link.linkType}
                />,
                {
                  title: `${link.id}`,
                  showCloseIcon: true,
                }
              );
              window.location.reload(true);
            }}
          >
            &nbsp;&nbsp;Edit&nbsp;&nbsp;
          </Button>
          &nbsp;&nbsp;
          <Button
            color="danger"
            onClick={async () => {
              const result = await Confirm(
                `Are you sure to delete "${link.linkName}" ?`,
                "Warning"
              );
              if (result) {
                RemoveLink(link.id);
                window.location.reload(true);
              } else {
                console.log("Deleting is canceled");
              }
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

export { linkTableRender };
