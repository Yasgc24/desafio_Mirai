var express = require('express');
var router = express.Router();
const { Tasks } = require('../db');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');

// Método para verificar el token con la clave
const verifyToken = (req, res, next) => {
  try {
    req.user = jwt.verify(req.headers.authorization, SECRET);
    return next();
  } catch (err) {
    console.log(err)
    return res.status(401);
  }
}

// Rutas y solicitudes HTTP
router.get('/', verifyToken, async (req, res) => {
  const { _id } = req.user;
  const tasks = await Tasks.find({ user: _id })
  res.json(tasks);
});

router.get('/:id', verifyToken, async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const tasks = await Tasks.findOne({ _id: id, user: _id })
  res.json(tasks);
});

router.post('/', verifyToken, async (req, res) => {
  const { name } = req.body;
  const { expiration_date } = req.body;
  const { priority } = req.body;
  const { done } = req.body;
  const { _id } = req.user;
  const tasks = new Tasks({ name, expiration_date, priority, done, user: _id })
  await tasks.save()
  res.json(tasks);
});

router.put('/:id', verifyToken, async (req, res) => {
  const { name, expiration_date, priority, done } = req.body;
  const { id } = req.params;
  const tasks = await Tasks.findOneAndUpdate({ _id: id }, { name, expiration_date, priority, done })
  await tasks.save();
  res.json(tasks);
});

router.delete('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  await Tasks.deleteOne({ _id: id })
  res.status(200).send();
});

module.exports = router;
