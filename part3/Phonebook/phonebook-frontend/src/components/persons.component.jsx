import Person from './person.component';

const Persons = ({ list, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {
        list.map((person) => <Person key={person.id} person={person} handleDelete={handleDelete} />)
      }
    </div>
  );
};

export default Persons