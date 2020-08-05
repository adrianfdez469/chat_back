const mongoose = require('mongoose');


/*const db = {
    init: () => {

    }
};*/
const ipDb = process.env.MONGODB_ADDON_HOST || 'localhost';
const userDb = process.env.MONGODB_ADDON_USER || '';
const passDb = process.env.MONGODB_ADDON_PASSWORD || '';
const nameDb = process.env.MONGODB_ADDON_DB || 'chatapp';
const port = process.env.MONGODB_ADDON_PORT || 27017;

mongoose
    .connect(`mongodb://${userDb ? `${userDb}:` : ''}${passDb ? `${passDb}@` : ''}${ipDb}:${port}/${nameDb}`, {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(connection => {
        console.log('connected to the database');
    })
    .catch(err => {
        console.log(err);
        console.log("ERROR durante coneccion a base de datos")
    });