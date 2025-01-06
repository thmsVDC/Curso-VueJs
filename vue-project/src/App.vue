<template>
  <div>
    <PrimeiroComponente/>
    <p>o dado de app é {{ testing }}</p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Pessoa from './components/Pessoa.vue';

  export default {
    name: "App",
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    },
    data () {
      return {
        testing: "test"
      }
    }
  }
</script>
