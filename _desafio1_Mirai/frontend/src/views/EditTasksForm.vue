<template>
  <div class="menu">
    <TasksForm edit :id='$route.params.id'></TasksForm>
  </div>
</template>

<script>
import TasksForm from "@/components/TasksForm";

export default {
  components: {
    TasksForm,
  },
};
</script>
