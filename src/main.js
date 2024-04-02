import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from "./store";
import axios from 'axios';
import router from "./router";
import "./assets/css/reset.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
