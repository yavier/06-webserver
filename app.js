
const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

//servir contenido estatico
//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Francisco Garcia',
    titulo: 'Curso node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Francisco Garcia',
    titulo: 'Curso node'
  })
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Francisco Garcia',
    titulo: 'Curso node'
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})