<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-wrapper {
  width: 1366px;
  height: auto;
  margin: 0 auto;
}
</style>
