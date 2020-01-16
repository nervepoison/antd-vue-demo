// with polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { vueAxios } from "./utils/request";

import bootstrap from "./core/bootstrap";
import "./core/lazy_use";

Vue.config.productionTip = false;

Vue.use(vueAxios);

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount("#app");
