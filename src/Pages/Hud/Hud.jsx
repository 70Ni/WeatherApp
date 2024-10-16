import React from "react";
import Text from "../../Components/Text/Text";
import "./Hud.css";
import "../../Components/Text/text.css";
import SerachInput from "../../Components/SerachInput/SerachInput";
import BottomSlider from "../../Components/Slider/BottomSlider";
import Icon from "../../Images/Icon/location.svg";

// const getWeather = (event)=> {
//   if(event.key == 'Enter'){
//     fetch
//   }
// }

//shifting time

function Hud({ data }) {
  let secFromUTC = data.timezone;
  function convertShiftToTime(seconds) {
    // Get current time in milliseconds
    const utc = new Date();

    // Get the difference in minutes between UTC and local time.
    const offset = utc.getTimezoneOffset();

    // Calculate the shift in seconds from UTC to local time.
    const shift = offset * 60;

    // Add the shift to the UTC time to get the local time.
    const localTime = utc.getTime() + shift * 1000;

    // Return the local time in seconds.
    return localTime;
  }
  const epochTime = data.currentConditions.datetimeEpoch;
  const date = new Date(epochTime * 1000);
  const localString = date.toLocaleString();
  // var Celcius = Math.round(data.main.temp -  273.15)
  console.log(data);

  let fahrenheit = data.currentConditions.temp;
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  const celsius = Math.round(fahrenheitToCelsius(fahrenheit));
  console.log(celsius);
  console.log(convertShiftToTime(19800), "Current time");
  return (
    <div className="HudCover">
      <div className="Hudwrpr">
        <div className="topSectin">
          <div className="LocationSection">
            <Text
              text={data.currentConditions.datetime}
              className="regularText"
            />
            <Text
              text={data.currentConditions.conditions}
              className="regularText"
            />
          </div>
          <div className="WeatherDetails">
            <div className="weatherDetwrpr">
              <Text text="Precipitation:" className="light " id="Precipit" />
              <Text
                text={`${data.currentConditions.precipprob} %`}
                className="regularText"
              />
            </div>
            <div className="weatherDetwrpr">
              <Text text="Humidity" className="light" />
              <Text
                text={`${data.currentConditions.humidity} %`}
                className="regularText"
              />
            </div>
            <div className="weatherDetwrpr">
              <Text text="Wind" className="light" />
              <Text
                text={`${data.currentConditions.windspeed} km/h`}
                className="regularText"
              />
            </div>
          </div>
        </div>
        <div className="centerSection">
          <SerachInput />
        </div>
        <div className="Bottomsection">
          <div className="weatherDegWrpr">
            <Text text={`${celsius}°C`} className="weatherFont" />
            <Text text={data.resolvedAddress} className="mediumText cursor" />
          hello there
          </div>
        </div>
        {/* <BottomSlider /> */}
      </div>
    </div>
  );
}

export default Hud;
