import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  // Maneja cambios en el input
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Maneja el submit del formulario
  const addPerson = (event) => {
    event.preventDefault()

    // Verificamos si el nombre ya existe en la lista
    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    // Si no existe, lo agregamos
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('') // Limpiamos el input
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
