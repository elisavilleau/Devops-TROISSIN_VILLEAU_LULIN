'use strict';

const express = require('express');
const client = require('./dbClient');

<<<<<<< HEAD
const PORT = 5000;
=======
const PORT = 8080;
>>>>>>> b88e036be032c0b576d773ac52932870b89c51b7

function get_hit_count(callback) {
  client.incr('hits', (err) => {
    client.get('hits', (err, res) => {
      console.log(res)
      callback(res)
    })
  });
}

const app = express();
app.get('/', (req, res) => {
  get_hit_count((count) => {
<<<<<<< HEAD
    res.send('Elisa, Joanne and Alexis! I have been seen ' + count + ' times');
=======
    res.send('Hello World from Docker! I have been seen ' + count + ' times');
>>>>>>> b88e036be032c0b576d773ac52932870b89c51b7
  })
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
