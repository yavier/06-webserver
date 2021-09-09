
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})