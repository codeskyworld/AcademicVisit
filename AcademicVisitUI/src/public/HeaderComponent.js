import { Logout } from "./Functions";

const DisplayLogComponent = () => {
  let userType = localStorage.getItem("userType");
  return userType === "General User" || userType === "Administrator" ? (
    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-primary" onClick={Logout}>
        Logout
      </button>
    </div>
  ) : (
    <div className="col-md-3 text-end">
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
        <a href="/LinkManage" className="nav-link px-2 text-white">
          LinkManage
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
        <a href="/LinkManage" className="nav-link px-2 text-white">
          LinkManage
        </a>
      </li>
      <li>
        <a href="/UserManage" className="nav-link px-2 text-white">
          UserManage
        </a>
      </li>
    </div>
  ) : null;
};

export { DisplayLogComponent, DisplayLinkManange, DisplayAllManange };
