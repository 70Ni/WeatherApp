import logo from './logo.svg';
import './App.css';
import Hud from './Pages/Hud/Hud';
import { useState } from 'react';
import { useEffect,componentDidMount } from 'react';
import React from 'react';



function App() {
  const apiKey = "64ZU445VHVBJWYURF37LZXZYG"
  const [weatherData, setweatherData] = useState(null)
  const [city, setcity] = useState("");
  const [coordinates, setcoordinates] = useState([{}])
  const lat = 11.2492544
  const lon = 76.2937344



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
  const fetchData = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manjeri,India?key=${apiKey}`);
      // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse JSON response
      const jsonData = await response.json();
      // Update state with fetched data
      setweatherData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData function when component mounts
  fetchData();

  // Clean up function (optional)
  return () => {
    // Any cleanup code goes here
  };
}, []);

  // useEffect(() => {
  //   // SetGeolocation ();
  //   // getWeatherData()
  // }, []);




  //Setting Geolocation
  function SetGeolocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setcoordinates(
          coordinates.lat = latitude,
          coordinates.lon = longitude,
          )
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
      } else {
        console.log("No Geo locatioin found")
      };
  }
  console.log(weatherData)

  const citi = "Manjeri"

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

  return  (

    <div className="App">
    {weatherData?
       (<Hud data={weatherData}> </Hud>)
       :
    (<h1>Loading</h1> )}
    </div>
  )
}

export default App;
