const express = require('express')
const app = express()

/**
 * @constant express This is the require (package/module) that's installed with express package
 * @constant app This is a constant that refers to server initialization (express)
 */
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080)