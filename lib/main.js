import './useElementUI.js'
import { FormulaEditor } from './components'

const plugin = {
  install(Vue) {
    Vue.component("rt-formula-editor", FormulaEditor)
  }
}

export default plugin;
