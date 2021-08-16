import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../src/assets/css/mstepper.css'

import ClickOutside from './directives/click-outside';
import httpClient from './shared/services/httpClient';
import tokenIntercepotor from './core/interceptor/tokenInterceptor';
import errorInterceptor from './core/interceptor/errorInterceptor';


Vue.config.productionTip = false;

Vue.prototype.$http = httpClient;


tokenIntercepotor();
errorInterceptor();

Vue.directive('click-outside', ClickOutside)

new Vue({
  router,
  store,
  render: h => h(App)
})
.$mount('#app')
