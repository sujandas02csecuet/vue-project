<template>
  <div class="container">
    <div class="navbar-header">
      <router-link to="/Employee">Employee</router-link>
      <router-link to="/School">School</router-link>
      <router-link to="/Student">Student</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
a {
  display: inline-block;
  background-color: black;
  border: solid 1px black;
  color: white;
  padding: 5px;
  margin: 10px;
}

a:hover,
a.router-link-active {
  background-color: rgb(110, 79, 13);
}
</style>   