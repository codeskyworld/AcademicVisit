import axios from "axios";
import { Alert } from "react-st-modal";

const AddLink = async (linkName, linkAddress) => {
  await axios
    .post(
      "http://localhost:5271/FirstLink",
      {
        LinkName: linkName,
        LinkAddress: linkAddress,
        LinkUpdatingTime: new Date().toJSON(),
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.data.success) {
        console.log("Add link is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("error is " + error));
};

const GetLink = async (setLinkList) => {
  await axios
    .get("http://localhost:5271/FirstLink")
    .then((res) => {
      if (res.status === 200) {
        setLinkList(res.data);
      }
    })
    .catch((error) => alert("error is " + error));
};

const RemoveLink = async (id) => {
  await axios
    .delete(`http://localhost:5271/FirstLink/${id}`)
    .then((res) => {
      if (res.data.success) {
        console.log("Remove link is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("error is " + error));
};

export { AddLink, GetLink, RemoveLink };
