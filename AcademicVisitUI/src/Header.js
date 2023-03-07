import React from "react";
import {
  DisplayLogComponent,
  DisplayLinkManange,
  DisplayAllManange,
} from "./public/HeaderComponent";
const Header = () => {
  return (
    <div id="Header" className="container-fluid sticky-top bg-dark">
      <header className="d-flex flex-wrap align-items-center justify-content-center py-3  border-bottom">
        <ul className="nav col-md-6 col-lg-6 justify-content-center">
          <li>
            <a href="/" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li>
            <a
              href="/search"
              className="nav-link px-2  text-white"
              target="_blank"
              rel="noreferrer"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Academy"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              Academic
            </a>
          </li>
          <li>
            <a
              href="https://www.science.org/"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              Science
            </a>
          </li>
          <DisplayLinkManange />
          <DisplayAllManange />
        </ul>
        <DisplayLogComponent />
      </header>
    </div>
  );
};
export default Header;
