<template>
  <div class="page-content-container">
    <h2>使用图标</h2>
    <p>图标组件已经被内置在本库当中，可直接使用了。</p>
    <p>共有两种调用方法：1.命名式调用；2.组件式调用。您可以按照个人喜好使用。</p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      install: `npm i rtlink-pro-vue2 -s`,
      code:
        `import Vue from 'vue';
import RtlinkUIPro from 'rtlink-pro-vue2';
import App from './App.vue';

Vue.use(RtlinkUIPro);

new Vue({
  el: '#app',
  render: h => h(App)
});`,
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>