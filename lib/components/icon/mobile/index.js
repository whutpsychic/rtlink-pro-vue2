import Vue from "vue"

// **************************************************************************
import address from "./address.vue"
import arrowRight from "./arrow-right.vue"
import back from "./back.vue"
import calendar from "./calendar.vue"
import craftTable from "./craft-table.vue"
import department from "./department.vue"
import done from "./done.vue"
import email from "./email.vue"
import hide from "./hide.vue"
import home from "./home.vue"
import logisticsComplete from "./logistics-complete.vue"
import logisticsData from "./logistics-data.vue"
import logisticsReservation from "./logistics-reservation.vue"
import logisticsVehicle from "./logistics-vehicle.vue"
import message from "./message.vue"
import mine from "./mine.vue"
import myStateAbnormal from "./my-state-abnormal.vue"
import myStateNormal from "./my-state-normal.vue"

import myRequestDraft from "./myrequest-draft.vue"
import myRequestEnd from "./myrequest-end.vue"
import myRequestRunning from "./myrequest-running.vue"
import passPerusal from "./pass-perusal.vue"
import phoneNumber from "./phone-number.vue"
import readAlready from "./read-already.vue"
import readWait from "./read-wait.vue"
import request from "./request.vue"
import role from "./role.vue"
import search from "./search.vue"
import station from "./station.vue"
import todoAlready from "./todo-already.vue"
import todoWait from "./todo-wait.vue"
import todo from "./todo.vue"
import triangleAbove from "./triangle-above.vue"
import triangleBelow from "./triangle-below.vue"
import triangleUpdown from "./triangle-updown.vue"

import view from "./view.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install() {

    Vue.component('rtmicon-address', address)
    Vue.component('rtmicon-arrow-right', arrowRight)
    Vue.component('rtmicon-back', back)
    Vue.component('rtmicon-calendar', calendar)
    Vue.component('rtmicon-craft-table', craftTable)
    Vue.component('rtmicon-department', department)
    Vue.component('rtmicon-done', done)
    Vue.component('rtmicon-email', email)
    Vue.component('rtmicon-hide', hide)
    Vue.component('rtmicon-home', home)
    Vue.component('rtmicon-logistics-complete', logisticsComplete)
    Vue.component('rtmicon-logistics-data', logisticsData)
    Vue.component('rtmicon-logistics-reservation', logisticsReservation)
    Vue.component('rtmicon-logistics-vehicle', logisticsVehicle)
    Vue.component('rtmicon-message', message)
    Vue.component('rtmicon-mine', mine)
    Vue.component('rtmicon-mystate-abnormal', myStateAbnormal)
    Vue.component('rtmicon-mystate-normal', myStateNormal)
    Vue.component('rtmicon-myrequest-draft', myRequestDraft)
    Vue.component('rtmicon-myrequest-end', myRequestEnd)
    Vue.component('rtmicon-myrequest-running', myRequestRunning)
    Vue.component('rtmicon-pass-perusal', passPerusal)
    Vue.component('rtmicon-phone-number', phoneNumber)
    Vue.component('rtmicon-read-already', readAlready)
    Vue.component('rtmicon-read-wait', readWait)
    Vue.component('rtmicon-request', request)
    Vue.component('rtmicon-role', role)
    Vue.component('rtmicon-search', search)
    Vue.component('rtmicon-station', station)
    Vue.component('rtmicon-todo-already', todoAlready)
    Vue.component('rtmicon-todo-wait', todoWait)
    Vue.component('rtmicon-todo', todo)
    Vue.component('rtmicon-triangle-above', triangleAbove)
    Vue.component('rtmicon-triangle-below', triangleBelow)
    Vue.component('rtmicon-triangle-updown', triangleUpdown)
    Vue.component('rtmicon-view', view)

  }
}

export default RtIcons