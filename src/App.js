import logo from "./logo.svg";
import "./App.css";
import Hud from "./Pages/Hud/Hud";
import details from "../src/pack.json";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

import rain from "../src/Images/rain.jpg";
import fog from "../src/Images/fog.jpg";
import snow from "../src/Images/snow.jpg";
import wind from "../src/Images/wind.jpg";
import cloudy from "../src/Images/cloudy.png";
import sn from "../src/Images/sn.jpg";

// const apiKey = process.env.WEATHER_APP_API_KEY;
function App() {
  const apiKey = "64ZU445VHVBJWYURF37LZXZYG";
  const [weatherData, setweatherData] = useState(null);
  const [city, setcity] = useState("");
  const [coordinates, setcoordinates] = useState([{}]);
  const [bgTheme, setbgTheme] = useState(null);
  const lat = 11.2492544;
  const lon = 76.2937344;
  let newBg;

  const weatherImgs = {
    rain,
    fog,
    snow,
    wind,
    cloudy,
    sn,
  };

  //fetching data from the api
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chungathara,India?key=${apiKey}`
        );
        // Check if request was successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse JSON response
        const jsonData = await response.json();
        // Update state with fetched data
        setweatherData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call fetchData function when component mounts
    fetchData();
    // Clean up function (optional)
    return () => {
      // Any cleanup code goes here
      setweatherData(details);
    };
  }, []);

  function getWeatherImage(weatherData, defaultImage = "sn") {
    // try to resolve image or fallback to default
    const image =
      weatherImgs[weatherData?.currentConditions?.icon ?? defaultImage];
    // extra check in case there is value from api  we don't have image for.
    return image ?? weatherImgs[defaultImage];
  }

  useEffect(() => {
    setweatherData(details);
  }, []);

  function SetGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setcoordinates(
          (coordinates.lat = latitude),
          (coordinates.lon = longitude)
        );
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("No Geo locatioin found");
    }
  }

  const weatherImage = getWeatherImage(weatherData);

  return (
    <div className="App">
      <div
        className="Hero"
        style={{ backgroundImage: `url(${weatherImage})`, transition: "2.5" }}
      >
        <div className="Darkwraper">
          {weatherData ? <Hud data={weatherData}> </Hud> : <h1>Loading</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
// https://freefrontend.com/css-text-animations/
// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started
