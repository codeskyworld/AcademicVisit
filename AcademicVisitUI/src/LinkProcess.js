import axios from "axios";

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
      if (res.status === 200) {
        console.log("Add link is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("error is " + error));
};

const GetLink = async (setLinkList) => {
  await axios
    .get("http://localhost:5271/FirstLink/GetAllId")
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
      if (res.status === 200) {
        console.log("Remove link is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("error is " + error));
};

const GetEditLink = async (id, setLinkName, setLinkAddress) => {
  await axios
    .get(`http://localhost:5271/FirstLink/GetOneId/${id}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Getting edit-link is successfull!");
        setLinkName(res.data[0].linkName);
        setLinkAddress(res.data[0].linkAddress);
      }
    })
    .catch((error) => alert("error from GetEditLink is " + error));
};

export { AddLink, GetLink, RemoveLink, GetEditLink };
