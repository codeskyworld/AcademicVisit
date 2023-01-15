import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LinkManageRender from "./LinkManageRender";
import Login from "./Login";
import UserManageRender from "./UserManageRender";

const App = () => {
  return (
    <>
      <Header />
      <UserManageRender />
      <Footer />
    </>
  );
};
export default App;
