
const express = require('express')
const app = express()
const port = 8080;

//servir contenido estatico

app.use( express.static('public'))



app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/holamundo', function (req, res) {
  res.send('Hello World correctly')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})