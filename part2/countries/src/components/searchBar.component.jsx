const SearchBar = ({ handleSearch, search }) => {
  return (
    <div>
      <h1>find countries</h1>
      <input onChange={handleSearch} value={search} />
    </div>
  )
}

export default SearchBar;