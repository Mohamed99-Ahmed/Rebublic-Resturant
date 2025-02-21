/* eslint-disable no-undef */
const express = require('express');
const app = express();
// const burgerRoutes = require('./routes/burgerRoutes');

// Adding the data that in conguration to proccess.env
// MiddleWares
// Middle wares
// this is 
let date;
app.use(express.json());
// Add CreatedAt middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); // Store request time as a string
  next();
});
//  Routes


//listen to server
module.exports = app;
