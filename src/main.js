import 'iframe-resizer/js/iframeResizer.contentWindow';
import './utils/initPostBridge';

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
