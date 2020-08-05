const mongoose = require('mongoose');


/*const db = {
    init: () => {

    }
};*/


mongoose
    .connect('mongodb://localhost/chatapp', {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(connection => {
        console.log('connected to the database');
    })
    .catch(err => console.log("ERROR durante coneccion a base de datos"));