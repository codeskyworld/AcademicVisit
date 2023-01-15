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
          linkUpdatingTime: moment(k.userUpdatingTime).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
        }));
        setUserList(FormalResult);
        setFullUserList(FormalResult);
      }
    })
    .catch((error) => alert("Get error is " + error));
};

export { AddUser, GetUsers };
