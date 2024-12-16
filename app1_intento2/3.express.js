const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    res.status(201).json(data)
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`servido corriendo en puerto http//localhost:${PORT}`)
})
