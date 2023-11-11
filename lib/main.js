import './useElementUI.js'
import { Testcom } from './components'

const plugin = {
  install(Vue) {
    Vue.component("rt-testcom", Testcom)
  }
}

export default plugin;
