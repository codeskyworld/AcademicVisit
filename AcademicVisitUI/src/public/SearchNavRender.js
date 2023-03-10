const SearchNavRender = (props) => {
  return props.searchList.map((search, index) => (
    <li className="nav-item d-flex justify-content-start mx-2" key={index}>
      <button
        className="btn btn-light"
        onClick={() => props.setSearchLinkClick(search.searchLinkAddress)}
      >
        <span className="align-text-bottom"></span>
        <img
          src={search.searchIconAddress}
          alt="X"
          width="20"
          height="20"
        ></img>
        &nbsp;{search.searchName}
      </button>
    </li>
  ));
};

export default SearchNavRender;
