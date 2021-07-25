const CountryCard = ({ results }) => {
  return (
    <>
      {results.map((result) => {
        return (
          <div key={result.numericCode}>
            <h1>{result.name}</h1>
            <div>Capital: {result.capital}</div>
            <div>Population: {result.population}</div>
            <h3>languages</h3>
            <ul>
              {result.languages.map((language) => {
                return (
                  <li key={language.iso639_1}>{language.name}</li>
                )
              })}
            </ul>
            <img src={result.flag} width="250px" />
          </div>
        )
      })}
    </>
  )
}

export default CountryCard;