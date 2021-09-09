
const express = require('express')
const app = express()
const port = 8080;

//servir contenido estatico

app.set('view engine', 'hbs')

app.use( express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Francisco Garcia',
    titulo: 'Curso node'
  })
})


app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})