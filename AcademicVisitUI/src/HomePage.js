import React, { useState, useEffect } from "react";
import { GetLinks } from "./LinkProcess";
import { LinkColumnRender } from "./LinkColumnRender";
import { FilterLinkType } from "./PublicFunctions";

const HomePage = () => {
  const [linkList, setLinkList] = useState([]);
  const [fullLinkList, setFullLinkList] = useState([]);

  useEffect(() => {
    GetLinks(setLinkList, setFullLinkList);
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
              <a className="nav-link active" aria-current="page" href="#">
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
                &nbsp;&nbsp;Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="align-text-bottom"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journal-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>{" "}
                &nbsp;Orders
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[0])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[1])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[2])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[3])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[4])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[5])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[6])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[7])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[8])}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div className="columnFormat">
              {LinkColumnRender(fullLinkList, FilterLinkType(fullLinkList)[9])}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
