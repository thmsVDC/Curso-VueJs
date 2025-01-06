<template>
  <div>
    <PrimeiroComponente/>
    <p>o dado de app é {{ testing }}</p>
    <LifeCycle/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import LifeCycle from './components/LifeCycle.vue';

  export default {
    name: "App",
    components: {
      PrimeiroComponente,
      LifeCycle
    },
    data () {
      return {
        testing: "test"
      }
    }
  }
</script>
