<template>
  <div>
    <div class="menu1" id="box">
    <h1>Tareas</h1>
    <hr>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de vencimiento</th>
          <th>Prioridad</th>
          <th>Hecho</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task of tasks" :key="task._id">
          <td>{{ task.name }}</td>
          <td>{{ task.expiration_date }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.done }}</td>
          <td>
            <button @click="$router.push(`/edit-tasks/${task._id}`)">Editar</button>
          </td>
          <td>
            <button @click="deleteTasks(task._id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn1" @click="$router.push(`/add-tasks`)">Agregar Tareas</button>

    <button class="log_out" @click="logOut">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { APIURL } from "../constants";

export default {
  name: "TasksForm",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async getTasks() {
      const { data: tasks } = await axios.get(`${APIURL}/tasks`);
      this.tasks = tasks;
    },
    async deleteTasks(id) {
      await axios.delete(`${APIURL}/tasks/${id}`);
      this.getTasks();
    },
    logOut() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
  beforeMount() {
    this.getTasks();
  },
};
</script>

<style scoped>
th:first-child,
td:first-child {
  width: 60%;
}

th {
  text-align: left;
}
</style>
