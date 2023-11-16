import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)
// 创建一个新的 store 实例
const store = new Vuex.Store({
  state: {
    // 是否开启黑夜模式
    nightMode: false,
    // 图标使用命名式操作
    usingIconNameMode: false,
  },
  mutations: {
    toggleViewMode(state, mode) {
      state.nightMode = mode
      let bodyNode = document.getElementsByTagName('body')[0]
      if (mode) {
        bodyNode.className = 'nightMode'
      }
      else {
        bodyNode.className = ''
      }
    },
    changeIconMode(state, mode) {
      state.usingIconNameMode = mode
    },
  }
})

export default store
