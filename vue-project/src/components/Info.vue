<template>
  <div>
    <p>Nome: {{ nome }}</p>
    <p>Estou trabalhando no momento.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Python</li>
      <li>JavaScript</li>
      <li>Java</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        nome: "Thomas"
      }
    }

  }
</script>
