<template>
<div class="loader">
  <div class="loading loading--double"></div>
</div>
</template>

<script>
export default {
  name: 'loader',
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader{
  display: flex;
  width: 100%;
  min-height: 300px;
  align-items: center;
  justify-content: space-around;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes pulse {
  50% {
    background: white;
  }
}
@keyframes pulse {
  50% {
    background: white;
  }
}
.loading {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 0.25rem solid rgba(90, 90, 90, 0.2);
  border-top-color: #2c3e50;
  -webkit-animation: spin 1s infinite linear;
          animation: spin 1s infinite linear;
}
.loading--double {
  border-style: double;
  border-width: .5rem;
}
</style>
