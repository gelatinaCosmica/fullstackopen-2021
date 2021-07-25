import { useEffect, useState } from "react";
import "./App.css";
import CountryCard from "./components/countryCard.component";
import CountryList from "./components/countryList.component";

const Axios = require("axios").default;

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleCountriesChange = (event) => {
    setFilter(event.target.value);
  };

  const results = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <div>
        find countries <input onChange={handleCountriesChange} />
      </div>
      {results.length === 1 ? (
        <CountryCard results={results} />
      ) : (
        <CountryList results={results} />
      )}
    </div>
  );
}

export default App;
