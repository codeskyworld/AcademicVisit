import axios from "axios";
import moment from "moment";
import { Alert } from "react-st-modal";

const AddLink = async (linkName, linkAddress, linkType) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .post(
      "http://localhost:5271/Link",
      {
        LinkName: linkName,
        LinkAddress: linkAddress,
        LinkType: linkType,
        LinkUpdatingTime: new Date(),
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
              "An error occurred in the AddLink! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the AddLink! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Add Link error is " + error));
};

const GetLinks = async (setLinkList, setFullLinkList) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .get("http://localhost:5271/Link/GetAllId", {
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
            linkUpdatingTime: moment(k.linkUpdatingTime).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
          }));
          setLinkList(FormalResult);
          setFullLinkList(FormalResult);
        }
      } else {
        Alert(
          "An error occurred in the GetLinks! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Get Link error is " + error));
};

const RemoveLink = async (id) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .delete(`http://localhost:5271/Link/${id}`, {
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
              "An error occurred in the RemoveLink! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the RemoveLink! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Remove Link error is " + error));
};

const EditLink = async (linkId, linkName, linkAddress, linkType) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .put(
      "http://localhost:5271/Link",
      {
        Id: linkId,
        LinkName: linkName,
        LinkAddress: linkAddress,
        LinkType: linkType,
        LinkUpdatingTime: new Date().toJSON(),
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
              "An error occurred in the EditLink! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the EditLink! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Edit Link error is " + error));
};

export { AddLink, GetLinks, RemoveLink, EditLink };
