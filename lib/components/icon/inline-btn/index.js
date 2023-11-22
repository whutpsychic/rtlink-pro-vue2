import Vue from "vue"

// **************************************************************************
import adjust from "./adjust.vue"
import checkItem from "./check-item.vue"
import configure2 from "./configure2.vue"
import copy from "./copy.vue"
import detail from "./detail.vue"
import disable2 from "./disable2.vue"
import edit from "./edit.vue"
import export2 from "./export2.vue"
import filling from "./filling.vue"
import input from "./input.vue"
import mate from "./mate.vue"
import play from "./play.vue"
import print from "./print.vue"
import process from "./process.vue"
import rule from "./rule.vue"
import stop from "./stop.vue"
import upload from "./upload.vue"
import view from "./view.vue"
import view2 from "./view2.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install() {

    Vue.component('rticon-adjust', adjust)
    Vue.component('rticon-check-item', checkItem)
    Vue.component('rticon-configure2', configure2)
    Vue.component('rticon-copy', copy)
    Vue.component('rticon-detail', detail)
    Vue.component('rticon-disable2', disable2)
    Vue.component('rticon-edit', edit)
    Vue.component('rticon-export2', export2)
    Vue.component('rticon-filling', filling)
    Vue.component('rticon-input', input)
    Vue.component('rticon-mate', mate)
    Vue.component('rticon-play', play)
    Vue.component('rticon-print', print)
    Vue.component('rticon-process', process)
    Vue.component('rticon-rule', rule)
    Vue.component('rticon-stop', stop)
    Vue.component('rticon-upload', upload)
    Vue.component('rticon-view', view)
    Vue.component('rticon-view2', view2)

  }
}

export default RtIcons