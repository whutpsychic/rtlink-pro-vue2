import Vue from 'vue';
import App from './App.vue';
import './styles/main.scss';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import RtlinkUI from '$/main.js';

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css' // or other highlight.js theme

import DemoBlock from "@/components/DemoBlock.vue"

Vue.use(router);
Vue.use(store);

Vue.use(ElementUI, { size: 'small' });
Vue.use(RtlinkUI);
Vue.use(VueHighlightJS)

Vue.component("demo-block", DemoBlock)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
