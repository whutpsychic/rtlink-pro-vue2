<template>
  <el-menu :default-active="defaulActiveNav || menuData.components[0]['name']" @select="onChangeMenu">
    <!--  -->
    <el-menu-item-group class="menu-group">
      <template #title>
        <p class="menu-group-title">快速上手</p>
      </template>
      <el-menu-item index="quick-start" class="menu-item-nav">
        安装
      </el-menu-item>
      <el-menu-item index="use-icons" class="menu-item-nav">
        使用图标
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group class="menu-group">
      <template #title>
        <p class="menu-group-title">组件</p>
      </template>
      <el-menu-item v-for="(fn, i) in menuData.components" :key="fn['name']" :index="fn['router']" class="menu-item-nav">
        {{ fn['name'] }}
        {{ fn['explain'] }}
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
import menuData from "@/data/fn-menu.js"

export default {
  data() {
    return {
      menuData,
      defaulActiveNav: null
    }
  },
  mounted() {
    // 匹配刷新时的路由
    this.matchForRoute()
  },
  methods: {
    onChangeMenu(v) {
      if (this.$route.fullPath === `/document/${v}`) {
        return
      }
      this.$router.push({ path: `/document/${v}` })
    },
    matchForRoute() {
      const locationStr = window.location.href

      const dataArr = locationStr.split("/")
      const navStr = dataArr[dataArr.length - 1]

      this.defaulActiveNav = navStr
    },
  }
}
</script>

<style scoped>
* {
  user-select: none;
}

.menu-group-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

.submenu-title {
  font-size: 15px;
  font-weight: bold;
  text-indent: 2em;
  margin-top: 0;
  margin-bottom: 0;
}

.menu-item-nav {
  margin-left: 2em;
  height: 3em;
  line-height: 3em;
}

.with-subtitle {
  margin-bottom: 0.5em;
}
</style>