var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../db');
const { SECRET } = require('../constants');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

// Verificar si el usuario existe con el email
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ err: 'El usuario ya existe.' }).status(401);
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({
    name,
    email,
    password: hashedPassword
  })
  await user.save();
  res.json(user).status(201);
});

// Solicitud de inicio de sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { _id, password: userPassword } = await User.findOne({ email });
  const match = await bcrypt.compare(password, userPassword);
  if (match) {
    const token = await jwt.sign({ email, _id }, SECRET);
    return res.json({ token });
  }
  res.status(401);
});

module.exports = router;
