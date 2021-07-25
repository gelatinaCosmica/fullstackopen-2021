const CountryList = ({ results }) => {
  return (
    <>
      {results.length > 10 ? "Too many matches, specify another filter" :
        <ul>
          {results.map((country) => (
            <li key={country.numericCode}>{country.name}</li>
          ))}
        </ul>
      }
    </>

  )
}

export default CountryList;