import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm.component";
import PersonList from "./components/personList.component";
import axios from "axios";

const Axios = require("axios").default;

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    Axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  // console.log("render", persons.length, "persons");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    persons.find((person) => {
      return person.name === newName;
    })
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const results = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
        newName={newName}
        newNumber={newNumber}
      />
      <PersonList list={results} filter={filter} />
    </>
  );
};

export default App;
