import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LinkManageRender from "./LinkManageRender";
import Login from "./Login";
import UserManageRender from "./UserManageRender";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route
            exact
            path="/UserManage"
            element={<UserManageRender />}
          ></Route>
          <Route
            exact
            path="/LinkManage"
            element={<LinkManageRender />}
          ></Route>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
