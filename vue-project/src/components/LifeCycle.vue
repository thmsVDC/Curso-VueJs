<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
  export default {
    name: "LifeCycle",
    data() {
      return {
        nome: "Ainda não sei"
      }
    },
    created() {
      setTimeout(() => {
        this.nome = "Thomas Victor"
      }, 1000);
    },
    mounted() {
      setTimeout(() => {
        this.nome = "Thomas Victor Dias Carvalho"
      }, 2000);
    }
  }
</script>
