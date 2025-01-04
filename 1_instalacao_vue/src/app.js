const my_name_app = {
  data() {
    return {
      name: "Thomas",
      idade: 22
    }
  }
}

Vue.createApp(my_name_app).mount("#app");
