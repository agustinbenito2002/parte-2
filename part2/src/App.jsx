import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') // Nuevo estado para el filtro

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

  // Maneja el submit del formulario
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

    // Creamos un nuevo objeto persona
    const personObject = {
      name: newName,
      number: newNumber
    }

    // Actualizamos el estado
    setPersons(persons.concat(personObject))

    // Limpiamos los inputs
    setNewName('')
    setNewNumber('')
  }

  // Filtramos las personas según el término de búsqueda (insensible a mayúsculas)
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Campo de búsqueda */}
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
