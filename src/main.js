import Vue from 'vue'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import App from "./App.vue"
import router from "./router"
import store from "./store"
Vue.use(Vuetify)

new Vue({
  vuetify : new Vuetify(),
  el: "#app",
  render: h => h(App),
  store,
  router,
}).$mount('#app')
