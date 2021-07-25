import Country from './country.component.jsx';
import Filter from './filter.component.jsx';

const Countries = ({ countries, setSearch }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return <Country key={countries.name} country={countries[0]} />
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <Filter
        key={country.name}
        country={country}
        setSearch={setSearch}
      />
    ))
  } else {
    return <div>No countries match your search</div>
  }
}

export default Countries;