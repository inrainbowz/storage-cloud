const { Pool, Client } = require('pg')

const express = require('express')
const app = express()
const port = 5050


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})