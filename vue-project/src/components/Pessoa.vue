<template>
  <div>
    <h2>Esta é a descrição da pessoa:</h2>
    <Info />
    <Form />
  </div>
</template>

<script>
  import Info from './Info.vue';
  import Form from './Form.vue';

  export default {
    name: "Pessoa",
    components: {
      Info,
      Form
    }
  }
</script>
