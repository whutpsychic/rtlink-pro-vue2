import Vue from 'vue'

import global from "./global"
import inlineBtn from "./inline-btn"
import logo from "./logo"
import mobile from "./mobile"
import rtIcon from "./rt-icon.vue"

const RtIcons = {
  // 注册所有图标
  install() {
    global.install()
    inlineBtn.install()
    logo.install()
    mobile.install()
    Vue.component("rt-icon", rtIcon)
  }
}

export default RtIcons