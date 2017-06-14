<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ecf0f1;
  min-height: 100vh;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: 'Montserrat', sans-serif;
}
strong {
  font-weight: bold;
}
.text-white {
  color: #fff;
}
a:hover, a:focus {
  color: #18bc9c;
   text-decoration: none; 
}
</style>
