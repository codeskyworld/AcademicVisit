import { Logout } from "./Functions";

const DisplayLogComponent = () => {
  let userType = localStorage.getItem("userType");
  let userName = localStorage.getItem("userName");
  return userType === "General User" || userType === "Administrator" ? (
    <div className="d-flex col-md-3 justify-content-end align-items-center">
      <div className="text-white ">
        Hello, {userName}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <button type="button" className="btn btn-primary" onClick={Logout}>
        Logout
      </button>
    </div>
  ) : (
    <div className="d-flex col-md-5 col-lg-5 justify-content-end align-items-center mx-1">
      <a href="/Login">
        <button type="button" className="btn btn-primary">
          Login
        </button>
      </a>
    </div>
  );
};

const DisplayLinkManange = () => {
  let userType = localStorage.getItem("userType");
  return userType === "General User" ? (
    <div className="d-flex col-md-3 text-end">
      <li>
        <a href="/linkManage" className="nav-link px-2 text-white">
          LinkManage
        </a>
      </li>
      <li>
        <a href="/SearchManage" className="nav-link px-2 text-white">
          SearchManage
        </a>
      </li>
    </div>
  ) : null;
};

const DisplayAllManange = () => {
  let userType = localStorage.getItem("userType");
  return userType === "Administrator" ? (
    <div className="d-flex col-md-3 text-end">
      <li>
        <a href="/linkManage" className="nav-link px-2 text-white">
          LinkManage
        </a>
      </li>
      <li>
        <a href="/searchManage" className="nav-link px-2 text-white">
          SearchManage
        </a>
      </li>
      <li>
        <a href="/userManage" className="nav-link px-2 text-white">
          UserManage
        </a>
      </li>
    </div>
  ) : null;
};

export { DisplayLogComponent, DisplayLinkManange, DisplayAllManange };
