const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
require('./mongoose');
const path = require('path');
const compression = require('compression');
//const LoginRouter = require('./login/login.router');
const UserRouter = require('./user/user.router');
const MessageRouter = require('./message/message.router');
const BugRouter = require('./bugreport/bug.router');
const {redirectToHttps} = require('./middlewares/redirectHttps');

const app = express();

// Middleware para redireccionar siempre a https
//app.use(redirectToHttps); Esto no lo necesito ahora porque abro el servicio mediante github pages que por defecto son https

app.use(compression());
app.use(express.json());



//app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.use('/users', UserRouter);
app.use('/messages', MessageRouter);
app.use('/bugs', BugRouter);



/*
Front end va estar en las github pages
app.get('/*', (req, resp) => {
        resp.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
);*/


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
