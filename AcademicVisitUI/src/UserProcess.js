import axios from "axios";
import moment from "moment";

const AddUser = async (userName, userPassword, userType) => {
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
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        console.log("Add User is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("Add error is " + error));
};

const GetUsers = async (setUserList, setFullUserList) => {
  await axios
    .get("http://localhost:5271/User/GetAllId")
    .then((res) => {
      if (res.status === 200) {
        var FormalResult = res.data.map((k) => ({
          ...k,
          userUpdatingTime: moment(k.userUpdatingTime).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
        }));
        setUserList(FormalResult);
        setFullUserList(FormalResult);
      }
    })
    .catch((error) => alert("Get error is " + error));
};

const RemoveUser = async (id) => {
  await axios
    .delete(`http://localhost:5271/User/${id}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("Remove User is successfull!");
        console.log(res);
      }
    })
    .catch((error) => alert("Remove error is " + error));
};

const GetEditUser = async (id, setUserName, setUserType) => {
  await axios
    .get(`http://localhost:5271/User/GetOneId/${id}`)
    .then((res) => {
      if (res.status === 200) {
        setUserName(res.data[0].userName);
        setUserType(res.data[0].userType);
      }
    })
    .catch((error) => alert("GetEdit error from GetEditUser is " + error));
};

const EditUser = async (userId, userName, userAddress, userType) => {
  await axios
    .put("http://localhost:5271/User", {
      Id: userId,
      UserName: userName,
      UserAddress: userAddress,
      UserType: userType,
      UserUpdatingTime: new Date().toJSON(),
    })
    .then((res) => {
      if (res.status === 200) {
        return;
      }
    })
    .catch((error) => alert("Edit error is " + error));
};

export { AddUser, GetUsers, RemoveUser, GetEditUser, EditUser };
