import Vue from 'vue'
import Vuetify from "vuetify";
import App from "./App.vue"
import router from "./router"
import store from "./store"

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router,
})

Vue.use(Vuetify)