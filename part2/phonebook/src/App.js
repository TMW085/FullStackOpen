import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const hook = (() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const persons = response.data
      setPersons(persons)
    })
  })

  useEffect(hook, [])

  const addPerson = (event) =>
  {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const nameExists = persons.filter(person => person.name === newPerson.name).length > 0
    if (!nameExists)
    {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    else 
    {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) =>
  {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>
  {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) =>
  {
    setFilterName(event.target.value)

  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={filterName} handle={handleFilter}/>
      <h3>Add a new Person</h3>
      <PersonForm 
        name={newName} number={newNumber}
        handleName={handleNameChange} handleNumber={handleNumberChange} 
        handleAddPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
