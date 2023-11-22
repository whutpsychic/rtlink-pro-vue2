import './useElementUI.js'

import global from "./components/icon/global"
import inlineBtn from "./components/icon/inline-btn"
import logo from "./components/icon/logo"
import mobile from "./components/icon/mobile"
import rtIcon from "./components/icon/rt-icon.vue"

import { FormulaEditor } from './components'

const plugin = {
  install(Vue) {
    global.install()
    inlineBtn.install()
    logo.install()
    mobile.install()
    Vue.component("rt-icon", rtIcon)

    Vue.component("rt-formula-editor", FormulaEditor)
  }
}

export default plugin;
