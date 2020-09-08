const admin = require("firebase-admin");
const config = require('config');
const serviceAccount = config.get('firebaseServiceAccount');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shut-up-pro.firebaseio.com",
  //storageBucket: 'gs://shut-up-pro.appspot.com'
});

module.exports = admin;