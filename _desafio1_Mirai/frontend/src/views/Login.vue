<template>
  <div class="container">
    <div class="menu">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div class="form-field">
        <label>Correo electrónico</label>
        <br />
        <input class="sizeinput" v-model="form.email" type="text" />
      </div>
      <br>
      <div class="form-field">
        <label>Contraseña</label>
        <br />
        <input v-model="form.password" type="password" />
      </div>
      <br>
      <div>
        <input type="submit" value="Iniciar sesión" /> <br />
        <br>
        <button type="button" @click="$router.push('/register')">
          Registrar
        </button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { APIURL } from "../constants";

export default {
  name: "LoginForm",
  data() {
    return {
      form: { name: "", password: "" },
    };
  },
  methods: {
    async login() {
      const { email, password } = this.form;
      if (!email || !password) {
        alert("Se requiere correo electrónico y contraseña.");
      }
      try {
        const {
          data: { token },
        } = await axios.post(`${APIURL}/users/login`, {
          email,
          password,
        });
        localStorage.setItem("token", token);
        this.$router.push("/tasks");
      } catch (error) {
        alert("Usuario o contraseña inválidos.");
      }
    },
  },
};
</script>
