import logo from './logo.svg';
import './App.css';
import Hud from './Pages/Hud/Hud';
import { useState } from 'react';
import { useEffect,componentDidMount } from 'react';




function App() {
  const apiKey = "64ZU445VHVBJWYURF37LZXZYG"
  const [weatherData, setweatherData] = useState("")
  const [city, setcity] = useState("");
  const [coordinates, setcoordinates] = useState([{}])
  const lat = 11.2492544
  const lon = 76.2937344
  
  useEffect(() => {
    SetGeolocation ();
    getWeatherData()
  }, []);
  
  componentDidMount=() => {
  
  };


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

  // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${apiKey}`).then(
  const getWeatherData = () => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/11.2492544,76.2937344?key=${apiKey}`).then(
      response => response.json()
      ).then(
        data =>{
        console.log("Hell0")
        setweatherData(data)
      }
    )
  }

  const getWeather = (event) => {
    
    if(event.key == 'Enter') {
   
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${apiKey}`).then(
        response => response.json()
        ).then(
          data =>{
          console.log(event ,"Hell0")
          setweatherData(data)
        }
      )
    } 
  }
  
  return (
    <div className="App">
      <div>Hll</div>
       <Hud data={weatherData}> </Hud>
    </div>
  );
}

export default App;
