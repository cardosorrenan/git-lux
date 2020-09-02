import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Animate from 'animate.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false;
Vue.use(Animate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
