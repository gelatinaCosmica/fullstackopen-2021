import ListItem from './listItem.component';

const PersonList = ({ list, filter }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {list.map((person) => (
        <ListItem key={person.id} name={person.name} number={person.number} />
      ))
      }
    </div>
  );
};

export default PersonList