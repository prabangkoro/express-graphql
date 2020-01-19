const express = require('express')
const app = express()
const port = 3000
const { connection } = require('./database')

connection.connect()

connection.query('SELECT * from `users`', (error, results, fields) => {
  if (error) throw error

  console.log(`result: ${JSON.stringify(results)}`)
})

connection.end()

app.get('/', (req, res) => res.send('Express server is ready!'))

app.get('/books/:bookId', (req, res) => {
  res.json(req.params)
})

app.listen(port, () => console.log(`Server listening on port: ${port}`))
