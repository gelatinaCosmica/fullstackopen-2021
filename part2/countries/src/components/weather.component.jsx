import { React, useState, useEffect } from 'react';

const Axios = require("axios").default;

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({
    request: {},
    location: {},
    current: {}
  });

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital,
      unit: "m"
    }

    Axios.get(`http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`)
      .then((response) => {
        setWeather(response.data)
      })
  }, [country])


  return (
    <div>
      <h2>
        <b>Weather in {country.capital}</b>
      </h2>
      <p>
        <b>Temperature: </b> {weather.current.temperature}°C
      </p>
      <img src={weather.current.weather_icons} alt={""} />
      <p>{weather.current.weather_description}</p>
      <p>
        <b>wind: </b>{weather.current.wind_speed} <b>m/s</b> direction {weather.current.wind_dir}
      </p>
    </div >
  )
}

export default Weather;