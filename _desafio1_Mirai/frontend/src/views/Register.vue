<template>
  <div class="menu">
    <h1>Registrarse</h1>
    <form @submit.prevent="register">
      <div class="form-field">
        <label>Nombre de usuario</label>
        <br />
        <input v-model="form.name" type="text" />
      </div>
      <div class="form-field">
        <label>Correo electrónico</label>
        <br />
        <input v-model="form.email" type="text" />
      </div>
      <div class="form-field">
        <label>Contraseña</label>
        <br />
        <input v-model="form.password" type="password" />
      </div>
      <br>
      <div class="btn2">
        <input type="submit" value="Registrar" />
        <button type="button" @click="$router.push('/')">Iniciar sesión</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { APIURL } from "../constants";

export default {
  name: "RegisterForm",
  data() {
    return {
      form: { name: "", email: "", password: "" },
    };
  },
  methods: {
    async register() {
      const { name, email, password } = this.form;
      if (!name || !email || !password) {
        alert("Se requiere nombre, correo electrónico y contraseña.");
      }
      try {
        await axios.post(`${APIURL}/users/register`, {
          name,
          email,
          password,
        });
        alert("Su registro fue exitoso.");
      } catch (error) {
        alert("No fue posible registrar el usuario.");
      }
    },
  },
};
</script>
