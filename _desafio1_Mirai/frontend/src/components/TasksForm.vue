<template>
  <div class="menu">
    <h1>{{ edit ? "Editar" : "Agregar" }} Tareas</h1>
    <form @submit.prevent="submit">
      <div class="form-field">
        <label>Nombre</label>
        <br />
        <input v-model="form.name" />
      </div>
      <br>
      <div class="form-field">
        <label>Fecha de vencimiento</label>
        <br />
        <input v-model="form.expiration_date" />
      </div>
      <br>
      <div>
        <label>Prioridad</label>
        <select v-model="form.priority">
          <option>Si</option>
          <option>No</option>
        </select>
      </div>
      <br>
      <div>
        <label>Hecho</label>
        <select v-model="form.done">
          <option> Si </option>
          <option> No </option>
        </select>
      </div>
      <div>
        <br>
        <input type="submit" value="Guardar" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { APIURL } from "../constants";

export default {
  name: "TasksForm",
  data() {
    return {
      form: { name: "", expiration_date: "", priority: "", done:""},
    };
  },
  props: {
    edit: Boolean,
    id: String,
  },
  methods: {
    async submit() {
      const { name, expiration_date, priority, done } = this.form;
      if (!name) {
        return alert("Name is required");
      }
      if (this.edit) {
        await axios.put(`${APIURL}/tasks/${this.id}`, { name, expiration_date, priority, done });
      } else {
        await axios.post(`${APIURL}/tasks`, { name, expiration_date, priority, done });
      }
      this.$router.push("/tasks");
    },
    async getTasks() {
      const { data } = await axios.get(`${APIURL}/tasks/${this.id}`);
      this.form = data;
    },
  },
  beforeMount() {
    if (this.edit) {
      this.getTasks();
    }
  },
};
</script>
