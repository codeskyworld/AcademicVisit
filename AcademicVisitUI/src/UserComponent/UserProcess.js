import axios from "axios";
import moment from "moment";
import { Alert } from "react-st-modal";

const AddUser = async (userName, userPassword, userType) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .post(
      "http://localhost:5271/User",
      {
        UserName: userName,
        UserPassword: userPassword,
        UserType: userType,
        UserUpdatingTime: new Date(),
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        switch (res.data) {
          case "Need to login":
            window.location.href = "/Login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the AddUser! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the AddUser! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Add error is " + error));
};

const GetUsers = async (setUserList, setFullUserList) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .get("http://localhost:5271/User/GetAllId", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data === "Need to login") {
          window.location.href = "/Login";
        } else {
          var FormalResult = res.data.map((k) => ({
            ...k,
            userUpdatingTime: moment(k.userUpdatingTime).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
          }));
          setUserList(FormalResult);
          setFullUserList(FormalResult);
        }
      } else {
        Alert(
          "An error occurred in the GetUsers! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Get error is " + error));
};

const RemoveUser = async (id) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .delete(`http://localhost:5271/User/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        switch (res.data) {
          case "Need to login":
            window.location.href = "/Login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the RemoveUser! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the RemoveUser! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Remove error is " + error));
};

const EditUser = async (userId, userName, userPassword, userType) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .put(
      "http://localhost:5271/User",
      {
        Id: userId,
        UserName: userName,
        UserPassword: userPassword,
        UserType: userType,
        UserUpdatingTime: new Date().toJSON(),
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        switch (res.data) {
          case "Need to login":
            window.location.href = "/Login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the EditUser! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the EditUser! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Edit error is " + error));
};

export { AddUser, GetUsers, RemoveUser, EditUser };
