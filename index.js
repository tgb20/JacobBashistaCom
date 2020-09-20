const express = require('express')
const app = express()
const port = 1286
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/images/example.gif', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/images/example.gif'))
})

app.get('/images/andy.gif', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/images/andy.gif'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/script.js'))
})

app.get('/error', (req, res) => {
    res.status(500).send('AHHHH!')
})

app.listen(port, () => {
    console.log(`App running on ${port}`)
})