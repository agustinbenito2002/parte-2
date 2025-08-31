import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Obtener contactos desde el backend al iniciar
  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error("Error al cargar contactos:", error);
      });
  }, []);

  // Agregar un nuevo contacto
  const addPerson = event => {
    event.preventDefault();

    const existingPerson = persons.find(p => p.name === newName);
    if (existingPerson) {
      alert(`${newName} ya está en la agenda`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    personsService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      })
      .catch(error => {
        console.error("Error al agregar contacto:", error);
      });
  };

  // Eliminar un contacto
  const deletePerson = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`¿Seguro que deseas eliminar a ${person.name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          console.error("Error al eliminar contacto:", error);
        });
    }
  };

  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);
  const handleFilterChange = e => setFilter(e.target.value);

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
