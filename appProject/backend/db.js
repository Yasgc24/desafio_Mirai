// Conección con la base de datos MongoDB con mongoose
const { Schema, createConnection } = require('mongoose');
const connection = createConnection('mongodb://127.0.0.1:27017/registro', { useNewUrlParser: true });

// Creación de los modelos con el constructor (Shema) para crear el esquema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const User = connection.model('User', userSchema);

const taskSchema = new Schema({
  name: String,
  expiration_date: String,
  priority: String,
  done: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Tasks = connection.model('Tasks', taskSchema);

module.exports = {
  User,
  Tasks
}

