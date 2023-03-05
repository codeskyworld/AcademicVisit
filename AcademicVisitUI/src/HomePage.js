import React, { useState, useEffect } from "react";
import { GetLinksOnlyForHomePage } from "./LinkComponent/LinkProcess";
import { LinkColumnRender } from "./LinkComponent/LinkColumnRender";
import { FilterLinkType } from "./public/Functions";
import HomeNavRender from "./public/HomeNavRender";
import { SearchBar } from "./public/SearchBar";

const HomePage = () => {
  const [linkList, setLinkList] = useState([]);
  const [fullLinkList, setFullLinkList] = useState([]);

  useEffect(() => {
    GetLinksOnlyForHomePage(setLinkList, setFullLinkList);
  }, []);

  return (
    <div className="container-fluid d-flex" id="homePage">
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light collapse"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <span className="align-text-bottom"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-kanban-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                </svg>
                &nbsp;&nbsp;All
              </a>
            </li>
            <HomeNavRender linkList={linkList} />
          </ul>
        </div>
      </nav>

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <SearchBar />
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[0]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[0])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[1]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[1])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[2]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[2])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[3]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[3])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[4]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[4])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[5]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[5])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[6]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[6])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[7]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[7])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[8]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[8])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div id={FilterLinkType(fullLinkList)[9]} className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[9])}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
