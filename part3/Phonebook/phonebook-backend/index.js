// Imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Instantiate app
const app = express()

app.use(cors())

morgan.token('bodyJSON', (req) => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :status :res[content-length] - :response-time ms :bodyJSON'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122'
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`
    <p>Phoneboox has info for ${persons.length} people</p>
    <p>${new Date()}</p>
  `)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find((person) => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  const result = persons.find((person) => person.name === body.name)

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'information is missing'
    })
  } else if (result) {
    return response.status(405).json({
      error: 'name must be unique'
    })
  }

  const ids = persons.map((person) => person.id)
  const maxId = Math.max(...ids)

  const newPerson = {
    id: maxId + 1,
    name: body.name,
    number: body.number
  }
  persons = [...persons, newPerson]

  response.json(newPerson)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'not found'
  })
})

// Port
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
