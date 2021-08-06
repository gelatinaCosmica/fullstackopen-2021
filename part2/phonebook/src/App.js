import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm.component";
import Persons from "./components/persons.component";
import Notification from "./components/notification.component";

import personService from "./services/names/personsIndex";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personService.getAllNames().then((initialNames) => {
      setPersons(initialNames);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.map((person) => person.name).includes(newName)) {
      const indexSameNamePerson = persons
        .map((person) => person.name)
        .indexOf(newName);
      const id = persons[indexSameNamePerson].id;
      const person = persons.find((index) => index.id === id);
      const changedNumber = { ...person, number: newNumber };

      if (
        window.confirm(
          `${person.name} is already added the phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .updateName(id, changedNumber)
          .then(() => {
            personService.getAllNames().then((initialNames) => {
              setPersons(initialNames);
              setNewName("");
              setNewNumber("");
            });
          })
          .catch((error) => {
            setErrorMessage(
              `Contact '${person.name}' was already removed from the server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else if (persons.map((person) => person.number).includes(newNumber)) {
      alert(`${newNumber} is already added to the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      personService.createName(nameObject).then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
        setNewName("");
        setNewNumber("");
        setSuccessMessage(`Added ${nameObject.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const handleDelete = (id) => {
    personService
      .deleteName(id)
      .then(() => setPersons(persons.filter((person) => id !== person.id)));
  };

  const results = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Notification
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
        newName={newName}
        newNumber={newNumber}
      />
      <Persons list={results} handleDelete={handleDelete} />
    </>
  );
};

export default App;
