import React from "react";
import "./searchInput.css";
import Search from "../../Images/Icon/search.svg";
import google from "../../Images/Icon/google.svg";
import arrow from "../../Images/Icon/Arrow.svg";


function SerachInput() {
  return (
    <div className="searchInputwrpr" id="seachInput">
      <form action="http://www.google.com/search" method="get" className="searchform">
        <img src={google} alt="Google icon" className="GoogleIcon" />
        <input input type="text" name="q" placeholder="Search"/>
        <img src={Search} alt="search" className="searchIcon" />
        <img src={arrow} alt="search" className="EnterIcon" type="submit" value="search"  />
      </form>
    </div>
  );
}

export default SerachInput;
