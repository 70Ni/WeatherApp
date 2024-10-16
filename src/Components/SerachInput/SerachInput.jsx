import React from "react";
import "./searchInput.css";
import Search from "../../Images/Icon/search.svg";
import google from "../../Images/Icon/google.svg";
import arrow from "../../Images/Icon/Arrow.svg";

function SerachInput() {
  return (
    <div className="searchInputwrpr searchform" id="seachInput">
      <img src={google} alt="Google icon" className="GoogleIcon" />
      <form
        action="http://www.google.com/search"
        method="get"
      
        className="searchform"
      >
        <input type="text" name="q" id='searchbox' placeholder="Search" />
      </form>
      <img src={Search} alt="search" className="searchIcon" />
      <img
        src={arrow}
        alt="search"
        className="EnterIcon"
        type="submit"
        value="search"
      />
    </div>
  );
}

export default SerachInput;
