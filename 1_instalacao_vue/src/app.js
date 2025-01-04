const my_name_app = {
  data() {
    return {
      name: "",
      idade: 22,
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.name = this.input_name;
    }
  }
}

Vue.createApp(my_name_app).mount("#app");
