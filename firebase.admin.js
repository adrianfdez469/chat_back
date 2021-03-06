const admin = require("firebase-admin");
const config = require('config');

const serviceAccount = {
        "type": "service_account",
        "project_id": "shut-up-pro",
        "private_key_id": config.get('firebase_admin_private_key_id'),
        "private_key": config.get('firebase_admin_private_key').replace(/\\n/g, '\n'),
        "client_email": "firebase-adminsdk-l7qxu@shut-up-pro.iam.gserviceaccount.com",
        "client_id": "112386174152473228098",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l7qxu%40shut-up-pro.iam.gserviceaccount.com"
      }


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shut-up-pro.firebaseio.com",
  //storageBucket: 'gs://shut-up-pro.appspot.com'
});

module.exports = admin;