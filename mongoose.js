const mongoose = require('mongoose');
const config = require('config');

const db = config.get('db');
mongoose
    .connect(db, {useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false })
    .then(connection => {
        console.log('La coneccion a base de datos ha sido exitosa');
    })
    .catch(err => {
        console.log(err);
        console.log("ERROR al conectar a la base de datos")
    });