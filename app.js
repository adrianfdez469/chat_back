const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
require('./mongoose');
const path = require('path');

//const LoginRouter = require('./login/login.router');
const UserRouter = require('./user/user.router');
const MessageRouter = require('./message/message.router');

const app = express();


app.use(express.json());



app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.use('/users', UserRouter);
app.use('/messages', MessageRouter);

app.get('/*', (req,resp) => {
  resp.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // render the error page
  res.status(err.statusCode || err.status || 500).json({
    message: err.message
  });
});

module.exports = app;
