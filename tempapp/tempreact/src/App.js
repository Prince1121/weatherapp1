import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState} from "react";
import './App.css';

function App() {

const apiKey = "5f6dedcee759c1bbd3c4fc7e3ea78dbe"
const [inputCity,setInputCity] = useState({})
const [data, setData] = useState({})

const getWeatherDetails = (cityName) => {
  if(!cityName) return
  const apiURL ="http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +apiKey
  axios.get(apiURL).then((res) => {
    console.log("response", res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err", err)
  })
}

const handleChangeInput= (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  getWeatherDetails(inputCity)
}

useEffect(() => {
  getWeatherDetails("delhi")
}, [])


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-4 col-4 mt-4">
          <input type="text" className="form-control" 
          value={inputCity}
          onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>

    <div className="col-md-12 text-center mt-5">

      <div className="shadow rounded wetherResultBox">

        <img className="weathericon"
        src="https://i.pinimg.com/originals/c3/b9/8c/c3b98cc2efc97ebce0c517fe6023ca8b.jpg" />

        <h4 className="weathercity">
          {data?.name}
        </h4>
        <h4 className="weathertemperature">{((data?.main?.temp)-273.15).toFixed(2)}°C</h4>

      </div>
    </div>

    </div>
  );
}

export default App;
