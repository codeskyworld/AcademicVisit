import axios from "axios";
import { Alert } from "react-st-modal";

const LoginHandler = (e) => async (email, password, setAuthentication) => {
  e.preventDefault();
  await axios
    .post(
      "http://localhost:5271/login",
      {
        Email: email,
        Password: password,
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
        console.log("email that will be storing is " + email);
        localStorage.setItem("email", email);
        setAuthentication(true);
        window.location.reload();
      }
    })
    .catch((error) => Alert("Incorrect email or password", "Warning"));
};

export { LoginHandler };
