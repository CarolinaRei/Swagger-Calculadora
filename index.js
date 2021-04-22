// Imports

const express = require("express");
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');


// SUM ROUTE

app.get("/sum/:a-:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b)
    res.send(c.toString())
  });


// SUBTRACTION ROUTE

app.get("/subtract/:a-:b", (req, res) => {
    const c = parseInt(req.params.a) - parseInt(req.params.b)
    res.send(c.toString())
  });


// MULTIPLICATION ROUTE

app.get("/mult/:a-:b", (req, res) => {
    const c = parseInt(req.params.a) * parseInt(req.params.b)
    res.send(c.toString())
  });


// DIVISION ROUTE

app.get("/div/:a-:b", (req, res) => {
    const c = parseInt(req.params.a) / parseInt(req.params.b)
    res.send(c.toString())
  });


// Use API docs

app.use(
  '/calculator',
  swaggerUI.serve, 
  swaggerUI.setup(swaggerDoc)
);


// Server port

var port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});