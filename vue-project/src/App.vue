<template>
  <div>
    <PrimeiroComponente/>
    <p>o dado de app é {{ testing }}</p>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  export default {
    name: "App",
    components: {
      PrimeiroComponente
    },
    data() {
      return{
        testing: "test"
      }
    }
  }
</script>
