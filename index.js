// import express at the top of the file
const express = require('express');

// import fruits from fruits.js
const fruits = require('./fruits');

// define a PORT constant variable
const PORT = process.env.PORT || 3000;

// Init an app instance
const app = express();

// Bing the app to a port
app.listen(PORT, () => console.log(`up on port ${PORT}`));

// Define a simple ping-pong route
app.get('/ping', (req, res) => {
  res.send('pong');
})

// add more routes
app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`);
})

app.get('/five', (req, res) => {
  res.send(['1', '2', '3', '4', '5']);
})

app.get('/evens/:n', (req, res) => {
  let n = (req.params.n)
  let evensArray = []
  for (let i = 2; i <= n; i++) {
    i % 2 == 0 ? evensArray.push(i) : null
  }
  res.send(evensArray)
})

app.get('/namelength/:name', (req, res) => {
  let length = req.params.name.length; 
  res.send(`${length}`);
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why Hello there, ${req.params.name}!`);
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  res.send(fruits.filter(fruits => fruits.name === req.params.name ? fruits : null))
})