const express = require('express');
const app = express()
const port = 3000

app.get('/prueba', (re, res) => {
    res.send('Buenas noches Stiven!')
})

app.listen(port, () => {
    console.log('La app se esta ejecutando en el puerto ' + `${port}`)
})