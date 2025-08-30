import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Maneja cambios en el input de nombre
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Maneja cambios en el input de número
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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

    // Creamos un nuevo objeto persona con nombre y número
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
