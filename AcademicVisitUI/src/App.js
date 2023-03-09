import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LinkManageRender from "./LinkComponent/LinkManageRender";
import Login from "./Login";
import UserManageRender from "./UserComponent/UserManageRender";
import SearchManageRender from "./SearchComponent/SearchManageRender";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route
            exact
            path="/userManage"
            element={<UserManageRender />}
          ></Route>
          <Route
            exact
            path="/linkManage"
            element={<LinkManageRender />}
          ></Route>
          <Route
            exact
            path="/searchManage"
            element={<SearchManageRender />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
