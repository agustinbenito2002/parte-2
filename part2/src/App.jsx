import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Ada Lovelace' }
  ])
  const [newName, setNewName] = useState('')

  // Manejar el cambio en el input
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Manejar el submit del formulario
  const addPerson = (event) => {
    event.preventDefault()

    // Creamos un nuevo objeto persona
    const nameObject = {
      name: newName
    }

    // Actualizamos el estado, agregando la nueva persona
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

      {/* Temporal: mostramos el estado para depuración */}
      <div>
        <p>Estado actual: {JSON.stringify(persons)}</p>
        <p>Nuevo nombre: {newName}</p>
      </div>
    </div>
  )
}

export default App
