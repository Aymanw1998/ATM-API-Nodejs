const mongoose = require('mongoose');

//Connection with MongoDB
const uri = process.env.DB_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.log("Error");
});