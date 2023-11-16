<template>
  <div class="page-content-container">
    <h2>快速上手</h2>
    <p>本节将介绍如何在项目中使用 rtlink-pro。</p>
    <h3>使用 npm 安装</h3>
    <!-- --------- -->
    <pre v-highlightjs>
      <code class="javascript">{{ install }}</code>
    </pre>

    <h3>引入组件</h3>
    <p>在 main.js 中写入以下内容：</p>
    <!-- --------- -->
    <pre v-highlightjs>
      <code class="javascript">{{ code }}</code>
    </pre>
    <p> 以上代码便完成了 rtlink-pro 的引入。</p>

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