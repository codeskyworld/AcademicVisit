import React, { useState, useEffect } from "react";
import { GetLinksOnlyForHomePage } from "./LinkComponent/LinkProcess";
import { LinkColumnRender } from "./LinkComponent/LinkColumnRender";
import { FilterLinkType } from "./public/Functions";
import SearchNavRender from "./public/SearchNavRender";
import { SearchBar } from "./public/SearchBar";

const SearchPage = () => {
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
        className="col-lg-2 col-md-2 col-lg-2 d-md-block bg-light collapse py-4"
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
                &nbsp;&nbsp;SearchList
              </button>
            </li>
            <SearchNavRender linkList={linkList} setTypeClick={setTypeClick} />
          </ul>
        </div>
      </nav>
      <div className="col-md-12 col-lg-12 ">
        <iframe
          height="100%"
          width="100%"
          src="https://www.bing.com/academic/?mkt=zh-CN"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </div>
  );
};
export default SearchPage;
