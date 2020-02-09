const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

server.listen(5000)