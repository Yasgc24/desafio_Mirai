<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.form-field input {
  width: 100%;
}

#app {
  margin: 1024 auto;
  width: 70vw;
}

h1 {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}

.btn1 {
  margin: 30px;
  float: center;
}

.menu {
  background-color: rgb(161, 205, 205, 0.4);;
  width: 100%;
  width: 500px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
  display: inline-block;
}

.sizeinput {
  width: 100px;
}

.btn2 {
  align-content: center;
}

label {
  font-size: larger;
}
th, td {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
}
table {
  border-spacing: 4px;
}

.menu1 {
  background-color: rgb(161, 205, 205, 0.4);;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: inline-block;
}

</style>
