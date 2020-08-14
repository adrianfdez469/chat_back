const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
require('./mongoose');
const path = require('path');
//const multer = require('multer');

//const LoginRouter = require('./login/login.router');
const UserRouter = require('./user/user.router');

const app = express();
/*
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if(
    file.mimetype ===  'image/png' ||
    file.mimetype ===  'image/jpg' ||
    file.mimetype ===  'image/jpeg'  
  ){
    cb(null, true);
  }else{
    cb(null, false);
  }
}*/

app.use(express.json());
//app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('avatar'));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
/*
const send = require('./user/sendmail');
app.use('/sendemail', (req, resp, next) => {
  send();
  resp.status(200).json({
    msg: 'parece que se mando'
  })
});*/
//app.use('/login', LoginRouter);
app.use('/users', UserRouter);

app.get('/*', (req,resp) => {
  resp.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err.message);
  // render the error page
  res.status(err.statusCode || err.status || 500).json({
    message: err.message
  });
});

module.exports = app;
