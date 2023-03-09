import axios from "axios";
import moment from "moment";
import { Alert } from "react-st-modal";

const AddSearch = async (searchName, searchLinkAddress, searchIconAddress) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .post(
      "http://localhost:5271/Search",
      {
        SearchName: searchName,
        SearchLinkAddress: searchLinkAddress,
        SearchIconAddress: searchIconAddress,
        SearchUpdatingTime: new Date(),
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
            window.location.href = "/login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the AddSearch! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the AddSearch! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Add Search error is " + error));
};

const GetSearches = async (setSearchList) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .get("http://localhost:5271/Search/GetAllId", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data === "Need to login") {
          window.location.href = "/login";
        } else {
          var FormalResult = res.data.map((k) => ({
            ...k,
            searchUpdatingTime: moment(k.searchUpdatingTime).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
          }));
          setSearchList(FormalResult);
        }
      } else {
        Alert(
          "An error occurred in the GetSearches! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Get Search error is " + error));
};

const RemoveSearch = async (id) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .delete(`http://localhost:5271/Search/${id}`, {
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
            window.location.href = "/login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the RemoveSearch! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the RemoveSearch! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Remove Search error is " + error));
};

const EditSearch = async (
  searchId,
  searchName,
  searchLinkAddress,
  searchIconAddress
) => {
  let token = localStorage.getItem("token");
  if (token === null || token === "") {
    token = "No token exists";
  }
  await axios
    .put(
      "http://localhost:5271/Search",
      {
        Id: searchId,
        SearchName: searchName,
        SearchLinkAddress: searchLinkAddress,
        SearchIconAddress: searchIconAddress,
        SearchUpdatingTime: new Date().toJSON(),
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
            window.location.href = "/login";
            break;
          case "Token is valid":
            break;
          default:
            Alert(
              "An error occurred in the EditSearch! But the status is 200",
              "Warning"
            );
        }
      } else {
        Alert(
          "An error occurred in the EditSearch! And the status is not 200!",
          "Warning"
        );
        return;
      }
    })
    .catch((error) => alert("Edit Search error is " + error));
};

export { AddSearch, GetSearches, RemoveSearch, EditSearch };
