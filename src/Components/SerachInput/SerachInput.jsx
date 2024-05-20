import React from "react";
import "./searchInput.css";
import Search from "../../Images/Icon/search.svg";
import google from "../../Images/Icon/google.svg";
import arrow from "../../Images/Icon/Arrow.svg";


function SerachInput() {
  return (
    <div className="searchInputwrpr" id="seachInput">
      <form action="" className="searchform">
        <img src={Search} alt="search" className="searchIcon" />
        <input type="text" placeholder="search"/>
        <img src={google} alt="Google icon" className="GoogleIcon" />
        <img src={arrow} alt="search" className="EnterIcon" />
      </form>
    </div>
  );
}

export default SerachInput;
