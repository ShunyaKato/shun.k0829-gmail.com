<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";

export default {
  name: "App"
};
</script>

<style lang="scss">
body {
  background-color: #202020;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
