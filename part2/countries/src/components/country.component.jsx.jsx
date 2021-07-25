import Weather from './weather.component';

const Country = ({ country }) => {
  return (
    <div key={country.numericCode}>
      <h1>{country.name}</h1>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Spoken Languages</h3>
      <ul>
        {country.languages.map((language) => {
          return (
            <li key={language.iso639_1}>{language.name}</li>
          )
        })}
      </ul>
      <img
        src={country.flag}
        alt='' width="300px"
      />
      <Weather country={country} />
    </div>
  )
}

export default Country;