import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Maneja cambios en el input de nombre
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Maneja cambios en el input de número
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // Maneja cambios en el campo de búsqueda
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // Maneja la adición de una nueva persona
  const addPerson = (event) => {
    event.preventDefault()

    // Verificamos si el nombre ya existe
    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // Filtramos las personas según el término de búsqueda
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Filtro de búsqueda */}
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      {/* Formulario para agregar personas */}
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      {/* Lista de personas */}
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
