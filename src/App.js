import logo from "./logo.svg";
import "./App.css";
import Hud from "./Pages/Hud/Hud";
import details from "../src/pack.json";
import { useState } from "react";
import { useEffect, componentDidMount } from "react";
import React from "react";

import rain from "../src/Images/rain.jpg";
import fog from "../src/Images/fog.jpg";
import snow from "../src/Images/snow.jpg";
import wind from "../src/Images/wind.jpg";
import cloudy from "../src/Images/cloudy.png";
import sn from "../src/Images/sn.jpg";

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

  
  console.log(weatherImgs['cloudy'])

  //  componentDidMount=()=>{
  //   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manjeri,India?key=${apiKey}`).then(
  //     // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/11.2492544,76.2937344?key=${apiKey}`).then(
  //       response => response.json()
  //       ).then(
  //         data =>{
  //         console.log("Hell0")
  //         setweatherData(data)
  //       }
  //     )

  //  }

  useEffect(() => {
    // Function to fetch data
    // const fetchData = async () => {
    //   try {
    //     // Fetch data from the API
    //     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manjeri,India?key=${apiKey}`);
    //     // Check if request was successful
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     // Parse JSON response
    //     const jsonData = await response.json();
    //     // Update state with fetched data
    //     setweatherData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // // Call fetchData function when component mounts
    // fetchData();
    // Clean up function (optional)
    // return () => {
    //   // Any cleanup code goes here
    //   setweatherData(details);
    // };
  }, []);

  function getWeatherImage(weatherData, defaultImage = "sn") {
    // try to resolve image or fallback to default
    const image =
      weatherImgs[weatherData?.currentConditions?.icon ?? defaultImage];
    // extra check in case there is value from api  we don't have image for.
    return image ?? weatherImgs[defaultImage];
  }

  useEffect(() => {
    // use async on the function where we are using the `await` keyword
     setweatherData(details);
    // const handleFetchDataAndSetImage = async () => {
    //   // let's wait for the data from API using await
    //   // now we have data
    // };

    // handleFetchDataAndSetImage();
  }, []);

  const handleSetBg = () => {
    switch (weatherData.currentConditions.icon) {
      case "rain":
        setbgTheme(rain);
        break;
      case "fog":
        setbgTheme(fog);
        break;
      case "cloudy":
        setbgTheme(cloudy);
        break;
      case "snow":
        setbgTheme(snow);
        break;
      case "wind":
        setbgTheme(wind);
        break;
      case "sn":
        setbgTheme(sn);
        break;
      default:
        setbgTheme(sn);
    }
  };


  // useEffect(() => {
  //   // SetGeolocation ();
  //   // getWeatherData()
  // }, []);

  // console.log(weatherData?weatherData.currentConditions.icon: "nothing", "current Icons")

  //Setting Geolocation
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

  const citi = "Manjeri";

  // const getWeatherData = () => {
  //   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manjeri,India?key=${apiKey}`).then(
  //   // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/11.2492544,76.2937344?key=${apiKey}`).then(
  //     response => response.json()
  //     ).then(
  //       data =>{
  //       console.log("Hell0")
  //       setweatherData(data)
  //     }
  //   )
  // }

  // const getWeather = (event) => {

  //   if(event.key == 'Enter') {

  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${apiKey}`).then(
  //       response => response.json()
  //       ).then(
  //         data =>{
  //         console.log(event ,"Hell0")
  //         setweatherData(data)
  //       }
  //     )
  //   }
  // }
  let b = false;
  // console.log(weatherData.currentConditions.icon)

  // switch (weatherData? weatherData.currentConditions.icon: "sn") {
  //   case "rain":
  //     newBg = rain;
  //     break;
  //   case "fog":
  //     newBg = fog;
  //     break;
  //   case "cloudy":
  //     newBg = cloudy;
  //     break;
  //   case "snow":
  //     newBg = snow;
  //     break;
  //   case "wind":
  //     newBg = wind;
  //     break;
  //   case "sn":
  //     newBg = sn;
  //     break;
  // }

  const weatherImage = getWeatherImage(weatherData);

  // function ontheme() {
  //   console.log("exe");
  //   return setbgTheme(snow);
  // }
  console.log(weatherData);
  return (
    <div className="App">
      {/* <button onClick={(e)=>ontheme()}>oHel</button> */}
      <div
        className="Hero"
        style={{ backgroundImage: `url(${weatherImage})`, transition: "1.8s" }}
      >
        {/* <img src= {weatherData? weatherData.currentConditions.icon : snow} style = {{height:500}}/> */}
        <div className="Darkwraper">
          {weatherData ? <Hud data={weatherData}> </Hud> : <h1>Loading</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
// https://freefrontend.com/css-text-animations/
