const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
require('./mongoose');

const LoginRouter = require('./login/login.router');
const UserRouter = require('./user/user.router');

const app = express();



app.use(express.json());
app.use(cors());

app.use('/login', LoginRouter);
app.use('/users', UserRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.send('error');
});

module.exports = app;
