// Comunicar el backend con el frontend
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var tasksrouter = require('./routes/tasks');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
// ver la configuración del motor
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', tasksrouter);
app.use('/users', usersRouter);

// Captura 404 y reenvía al controlador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Controlador de errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
