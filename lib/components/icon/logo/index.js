import Vue from "vue"

// **************************************************************************
import vue from "./vue.vue"
import vue2 from "./vue2.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install() {

    Vue.component('rticon-vue-logo', vue)
    Vue.component('rticon-vue', vue2)

  }
}

export default RtIcons