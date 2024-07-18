//require express and all routers
const express = require('express');
const {additionRouter} = require('./Routes/apiRoutes')
//create express app
const app = express();

//mounting routers to correct routes

app.use('/add', additionRouter);




