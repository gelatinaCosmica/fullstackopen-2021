const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      filter shown with <input onChange={handleFilterChange} placeholder={"filter name"} />
    </div>
  )
}

export default Filter;