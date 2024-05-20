import React from "react";
import Text from "../Text/Text";
import "./bottomSlider.css";
import location from "../../Images/Icon/locations.svg";
import loading from "../../Images/Icon/IconLoad.svg";
import close from "../../Images/Icon/close.svg";

function BottomSlider() {
  return (
    <div className="bottomSldwrp">
      <div className="dragClose">
        <div className="drgbarwrapper">
            <div className="dragbar"></div>
        </div>
        <div className="closesection">
            <img src={close} alt=""  className="closeIcon"/>
        </div>
      </div>
      <div className="slidewrprHeader">
        <Text
          text={"Search for a location"}
          className="regularText locationHeader"
        />
      </div>
      <div className="contentSection">
        {/* //input and loader */}
        <div className="locationInputwrpr">
          <div className="inputsection">
            <div className="locationSetwrpr">
              <img src={location} alt="" className="locationset" />
              <input
                type="text"
                className="locationInput"
                placeholder="Manjeri"
              />
            </div>
            <button className="Submit">Submit</button>
          </div>
          <div className="note margL38">
            You should search for the nerest city
          </div>
        </div>
        <div className="locationLoadwrpr">
          <div className="locatinLoad">
            {/* <img src={loading} alt="" className="locatInptIcon"/> */}
            <img src={location} alt="" className="locatInptIcon"/>
          </div>
          <div className="note">Auto Select</div>
        </div>
      </div>
    </div>
  );
}

export default BottomSlider;
