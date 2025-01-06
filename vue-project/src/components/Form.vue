<template>
  <div>
    <h2>Meu Formulário:</h2>
    <form>
      <div>
        <InputText />
      </div>
      <div>
        <InputText />
      </div>
      <Submit />
    </form>
  </div>

</template>

<script>
  import InputText from './form/InputText.vue';
  import Submit from './form/Submit.vue';
  export default {
    name: "Form",
    components: {
      InputText,
      Submit
    },
  }
</script>
