/* eslint-disable no-undef */
const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');

// Adding the data that in conguration to proccess.env
// MiddleWares
// Middle wares
// this is 
let date;
app.use(express.json());
app.get((req, res, next) => {
  res.send('Hello from the server app!');
  next();
})
// Add CreatedAt middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); // Store request time as a string
  next();
});
//  Routes
app.use('/items', itemRoutes);

//listen to server
module.exports = app;
