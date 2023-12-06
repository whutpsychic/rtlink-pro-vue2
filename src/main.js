import Vue from 'vue';
import App from './App.vue';
import './styles/main.scss';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import RtlinkUI from '$/main.js';

import 'highlight.js/styles/rainbow.min.css'
import 'highlight.js/lib/common'
import VueHighlightJS from 'vue-highlightjs'

import DemoBlock from "@/components/DemoBlock.vue"

Vue.use(router);
Vue.use(store);

Vue.use(ElementUI);
Vue.use(RtlinkUI);
Vue.use(VueHighlightJS)

Vue.component("demo-block", DemoBlock)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
