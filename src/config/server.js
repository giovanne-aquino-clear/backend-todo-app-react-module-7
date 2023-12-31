const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const routes = require('./routes')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(routes)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server