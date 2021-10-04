require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 1998;

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const atmRoutes = require('./routes/atmRoutes');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', atmRoutes);

  
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
})