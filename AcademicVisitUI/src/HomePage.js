import React, { useState, useEffect } from "react";
import { GetLinksOnlyForHomePage } from "./LinkComponent/LinkProcess";
import { LinkColumnRender } from "./LinkComponent/LinkColumnRender";
import { FilterLinkType } from "./public/Functions";
import HomeNavRender from "./public/HomeNavRender";
import { SearchBar } from "./public/SearchBar";

const HomePage = () => {
  const [linkList, setLinkList] = useState([]);
  const [fullLinkList, setFullLinkList] = useState([]);
  const [typeClick, setTypeClick] = useState("NoValue");

  useEffect(() => {
    GetLinksOnlyForHomePage(setLinkList, setFullLinkList);
  }, []);

  return (
    <div className="container-fluid d-flex" id="homePage">
      <nav
        id="sidebarMenu"
        className="col-md-2 col-lg-1 d-md-block bg-light collapse py-4"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button
                className="btn btn-light mx-2"
                onClick={() => setTypeClick("NoValue")}
              >
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
              </button>
            </li>
            <HomeNavRender linkList={linkList} setTypeClick={setTypeClick} />
          </ul>
        </div>
      </nav>

      <main className="col-md-10 col-lg-10 ms-md-5 ms-lg-5 px-md-5 px-lg-5">
        <SearchBar />
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[0]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[0]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[1]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[1]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[2]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[2]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[3]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[3]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[4]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[4]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[5]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[5]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[6]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[6]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[7]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[7]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[8]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[8]
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container text-center">
            <div
              id={FilterLinkType(fullLinkList, typeClick)[9]}
              className="columnFormat"
            >
              {LinkColumnRender(
                fullLinkList,
                FilterLinkType(fullLinkList, typeClick)[9]
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
