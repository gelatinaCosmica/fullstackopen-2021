const PersonForm = ({
  handleNameChange,
  handleNumberChange,
  addName,
  newName,
  newNumber
}) => {
  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} placeholder={"name"} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} placeholder={"number"} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div >
  )
}

export default PersonForm;