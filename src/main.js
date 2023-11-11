import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'

import RtlinkUI from '$/main.js'

Vue.use(RtlinkUI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
