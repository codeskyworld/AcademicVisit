import { RemoveUser } from "./UserProcess";
import { Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { UserDialogContent } from "./UserDialogContent";
import { Button } from "reactstrap";

const UserTableRender = (userList) =>
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
              await CustomDialog(
                <UserDialogContent
                  id={user.id}
                  name={user.userName}
                  password={user.userPassword}
                  type={user.userType}
                  userList={userList}
                />,
                {
                  title: `${user.id}`,
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
