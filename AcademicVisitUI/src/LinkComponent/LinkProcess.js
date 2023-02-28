import axios from "axios";
import moment from "moment";

const AddLink = async (linkName, linkAddress, linkType) => {
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
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        return;
      }
    })
    .catch((error) => alert("Add error is " + error));
};

const GetLinks = async (setLinkList, setFullLinkList) => {
  await axios
    .get("http://localhost:5271/Link/GetAllId")
    .then((res) => {
      if (res.status === 200) {
        var FormalResult = res.data.map((k) => ({
          ...k,
          linkUpdatingTime: moment(k.linkUpdatingTime).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
        }));
        setLinkList(FormalResult);
        setFullLinkList(FormalResult);
      }
    })
    .catch((error) => alert("Get error is " + error));
};

const RemoveLink = async (id) => {
  await axios
    .delete(`http://localhost:5271/Link/${id}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Remove link is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("Remove error is " + error));
};

const EditLink = async (linkId, linkName, linkAddress, linkType) => {
  await axios
    .put("http://localhost:5271/Link", {
      Id: linkId,
      LinkName: linkName,
      LinkAddress: linkAddress,
      LinkType: linkType,
      LinkUpdatingTime: new Date().toJSON(),
    })
    .then((res) => {
      if (res.status === 200) {
        return;
      }
    })
    .catch((error) => alert("Edit error is " + error));
};

export { AddLink, GetLinks, RemoveLink, EditLink };