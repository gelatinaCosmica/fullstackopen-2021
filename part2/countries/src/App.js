import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/countries.component";
import SearchBar from "./components/searchBar.component";

const Axios = require("axios").default;

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const results = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} search={search} />
      <Countries countries={results} setSearch={setSearch} />
    </div>
  );
}

export default App;
