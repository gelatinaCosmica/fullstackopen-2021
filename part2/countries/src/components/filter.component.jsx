const Filter = ({ country, setSearch }) => {
  const showCountry = () => setSearch(country.name)

  return (
    <div>
      {country.name} <button style={{ margin: "10px" }} onClick={showCountry}>show</button>
    </div>
  )
}

export default Filter;