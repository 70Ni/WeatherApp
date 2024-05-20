import React from "react";
import "./searchInput.css";
import Search from "../../Images/Icon/search.svg";


function SerachInput() {
  return (
    <div className="searchInputwrpr" id="seachInput">
      <form action="" className="searchform">
        <img src={Search} alt="search" className="searchIcon" />
        <input type="text" />
      </form>
    </div>
  );
}

export default SerachInput;
