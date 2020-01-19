var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'express_graphql',
  password: 'Zno2qMyvOozX9xNQ',
  database: 'graphql'
})

module.exports = {
  connection
}