<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Note Pro";
    },
    
  },
};
</script>

<style>
#app {
  /* font-family: system-ui, Helvetica, Arial, sans-serif; */
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
