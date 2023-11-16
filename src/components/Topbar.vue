<template>
  <div class="top-bar-container">
    <div class="logo-part">
      <p># Rtlink-pro-vue2</p>
    </div>
    <div class="right-content">
      <el-menu :default-active="'2'" class="top-menu-can" mode="horizontal" @select="handleSelect" :ellipsis="false"
        :active-text-color="nightMode ? 'orange' : undefined">
        <el-menu-item index="1" disabled>指南</el-menu-item>
        <el-menu-item index="2">文档</el-menu-item>
      </el-menu>
      <span>{{ version }}</span>
      <el-icon>
        <sunny />
      </el-icon>
      <el-switch :value="nightMode" active-color="#000" inactive-color="#ddd" @change="toggleViewMode"
        :border-color="nightMode ? '#aaa' : '#eee'" />
      <el-icon>
        <moon />
      </el-icon>
    </div>
  </div>
</template>

<script>
import config from "@/config.js"

export default {
  data() {
    return {
      // ---------- 静态数据 ----------
      version: `v${config.version}`,
    }
  },
  computed: {
    // ---------- 控制键 ----------
    nightMode() {
      return this.$store ? this.$store.state.nightMode : null
    }
  },
  methods: {
    // 切换黑夜模式
    toggleViewMode(v) {
      this.$store.commit("toggleViewMode", v)
    },
    // 切换标签页
    handleSelect(v) {
      // 指南
      if (v === "1") {
        this.$router.replace("/guide")
      }
      // 文档
      else if (v === "2") {
        this.$router.replace("/document")
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  >div {
    margin: 0 3em;
  }

  p {
    font-weight: bold;

    span {
      margin-left: 1em;
      font-size: 0.8em;
      font-weight: normal;
    }
  }

  .right-content {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 50vw;

    >* {
      margin-left: 1em;
    }
  }

  .top-menu-can {
    border-bottom: none;
  }

  .lang-selector {
    width: 7em;
  }
}
</style>