const express = require('express')
const app = express()
const port = 3000
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello () {
    return 'Hello there!'
  }
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000)
console.log(`listening to http://localhost:4000/graphql`)