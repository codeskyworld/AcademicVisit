import React from "react";
const Header = () => {
  return (
    <div id="Header" className="container-fluid sticky-top bg-dark">
      <header className="d-flex flex-wrap align-items-center justify-content-center py-3  border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 text-white">
              Home
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
          <li>
            <a
              href="https://researchaustralia.org/"
              className="nav-link px-2  text-white"
              target="_blank"
              rel="noreferrer"
            >
              Research
            </a>
          </li>

          <li>
            <a href="/LinkManage" className="nav-link px-2 text-white">
              LinkManage
            </a>
          </li>
          <li>
            <a href="/UserManage" className="nav-link px-2 text-white">
              UserManage
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <a href="/Login">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};
export default Header;
