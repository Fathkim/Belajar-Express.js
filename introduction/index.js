// impiort module express
const express = require('express')
const send = require('send')
// default port server 
const port = 3000

// create express app
const app = express()

// create routing / bisa menggunakan express milddleware
app.get('/', (req, res) => {
    res.send('Heri')
})

app.listen(port)