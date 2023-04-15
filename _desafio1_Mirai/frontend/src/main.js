import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/Login';
import Tasks from '@/views/Tasks';
import Register from '@/views/Register';
import AddTasksForm from '@/views/AddTasksForm';
import EditTasksForm from '@/views/EditTasksForm';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (config.url.includes('login') || config.url.includes('register')) {
    return config;
  }
  return {
    ...config, headers: {
      Authorization: localStorage.getItem("token"),
    }
  }
}, (error) => {
  return Promise.reject(error);
});

const beforeEnter = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    next()
    return true;
  }
  next({ path: '/' });
  return false
}

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/tasks', component: Tasks, beforeEnter },
  { path: '/add-tasks', component: AddTasksForm, beforeEnter },
  { path: '/edit-tasks/:id', component: EditTasksForm, beforeEnter },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.mount('#app')
