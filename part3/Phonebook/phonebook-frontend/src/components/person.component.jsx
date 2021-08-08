const Person = ({ person, handleDelete }) => (
  <div>
    {person.name}: {person.number}{" "}
    <button
      onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
          handleDelete(person.id, person.name)
        }
      }}
    >
      delete
    </button>
  </div>
)

export default Person;