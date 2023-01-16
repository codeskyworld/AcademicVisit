import { RemoveUser, GetEditUser } from "./UserProcess";
import { Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { UserDialogContent } from "./UserEditDialog";
import { Button } from "reactstrap";

const UserTableRender = (userList, setUserName, setUserType) =>
  userList.map((user, index) => {
    return (
      <tr key={index}>
        <th scope="row">{user.id}</th>
        <td>{user.userName}</td>
        <td>{user.userType}</td>
        <td>{user.userUpdatingTime}</td>
        <td>
          <Button
            color="success"
            onClick={async () => {
              await GetEditUser(user.id, setUserName, setUserType);
              await CustomDialog(
                <UserDialogContent
                  id={user.id}
                  name={user.userName}
                  type={user.userType}
                />,
                {
                  title: `${user.id}`,
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
                `Are you sure to delete "${user.userName}" ?`,
                "Warning"
              );
              if (result) {
                RemoveUser(user.id);
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

export { UserTableRender };
