import { RemoveLink } from "./LinkProcess";
import { Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { LinkDialogContent } from "./LinkDialogContent";
import { Button } from "reactstrap";

const linkTableRender = (linkList) =>
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
              await CustomDialog(
                <LinkDialogContent
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
