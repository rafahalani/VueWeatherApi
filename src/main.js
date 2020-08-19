import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
//import Zaza from "./assets/zaza.js"
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");