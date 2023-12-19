/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
