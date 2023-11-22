import Vue from "vue"

// **************************************************************************
import addItem from "./add-item.vue"
import addOuterSampling from "./add-outer-sampling.vue"
import add from "./add.vue"

import back from "./back.vue"

import calcAuto from "./calc-auto.vue"
import calcBalance from "./calc-balance.vue"
import cancel from "./cancel.vue"
import certificateConfirm from "./certificate-confirm.vue"
import clear from "./clear.vue"
import configure from "./configure.vue"
import confirm from "./confirm.vue"

import dataCollect from "./data-collect.vue"
import dataSynchronous from "./data-synchronous.vue"
import defectConversion from "./defect-conversion.vue"
import deleteItem from "./delete-item.vue"
import delete0 from "./delete.vue"
import detailInventory from "./detail-inventory.vue"
import detailTemplate from "./detail-template.vue"
import disable from "./disable.vue"
import distributeAuto from "./distribute-auto.vue"
import distributeCancel from "./distribute-cancel.vue"
import distributeConfirm from "./distribute-confirm.vue"
import distribute from "./distribute.vue"

import enable from "./enable.vue"
import escalation from "./escalation.vue"
import examine from "./examine.vue"
import execute from "./execute.vue"
import export0 from "./export.vue"

import fault from "./fault.vue"
import fillinData from "./fillin-data.vue"

import generateBarcode from "./generate-barcode.vue"
import grant from "./grant.vue"

import importDetail from "./import-detail.vue"
import import0 from "./import.vue"

import mixin from "./mixin.vue"
import modify from "./modify.vue"

import nothandled from "./not-handled.vue"

import relatedDefects from "./related-defects.vue"

import reset from "./reset.vue"
import return0 from "./return.vue"
import revoke from "./revoke.vue"
import run from "./run.vue"
import runningRecord from "./running-record.vue"

import samplingCancel from "./sampling-cancel.vue"
import samplingCompositeCancel from "./sampling-composite-cancel.vue"
import samplingCompositeConfirm from "./sampling-composite-confirm.vue"
import samplingReceiveConfirm from "./sampling-receive-confirm.vue"
import samplingReceive from "./sampling-receive.vue"
import samplingSend from "./sampling-send.vue"
import samplingSpot from "./sampling-spot.vue"
import saveCase from "./save-case.vue"
import save from "./save.vue"
import search from "./search.vue"
import sendCancel from "./send-cancel.vue"
import send from "./send.vue"
import storageInConfirm from "./storageIn-confirm.vue"
import storageInRevoke from "./storageIn-revoke.vue"
import storageOutConfirm from "./storageOut-confirm.vue"
import storageOutRevoke from "./storageOut-revoke.vue"
import submitRepository from "./submit-repository.vue"
import submit from "./submit.vue"

import taskDistribution from "./task-distribution.vue"
import taskFeedback from "./task-feedback.vue"
import template from "./template.vue"

import viewDetail from "./view-detail.vue"

import weighCancel from "./weigh-cancel.vue"
import weighComplete from "./weigh-complete.vue"
import weighStart from "./weigh-start.vue"
import weightConfirm from "./weight-confirm.vue"
import withdraw from "./withdraw.vue"
// **************************************************************************


const RtIcons = {
  // 注册所有图标
  install() {
  
    Vue.component('rticon-add-item', addItem)
    Vue.component('rticon-add-outer-sampling', addOuterSampling)
    Vue.component('rticon-add', add)
    Vue.component('rticon-back', back)
    Vue.component('rticon-calc-auto', calcAuto)
    Vue.component('rticon-calc-balance', calcBalance)
    Vue.component('rticon-cancel', cancel)
    Vue.component('rticon-certificate-confirm', certificateConfirm)
    Vue.component('rticon-clear', clear)
    Vue.component('rticon-configure', configure)
    Vue.component('rticon-confirm', confirm)
    Vue.component('rticon-data-collect', dataCollect)
    Vue.component('rticon-data-synchronous', dataSynchronous)
    Vue.component('rticon-defect-conversion', defectConversion)
    Vue.component('rticon-delete-item', deleteItem)
    Vue.component('rticon-delete', delete0)
    Vue.component('rticon-detail-inventory', detailInventory)
    Vue.component('rticon-detail-template', detailTemplate)
    Vue.component('rticon-disable', disable)
    Vue.component('rticon-distribute-auto', distributeAuto)
    Vue.component('rticon-distribute-cancel', distributeCancel)
    Vue.component('rticon-distribute-confirm', distributeConfirm)
    Vue.component('rticon-distribute', distribute)
    Vue.component('rticon-enable', enable)
    Vue.component('rticon-escalation', escalation)
    Vue.component('rticon-examine', examine)
    Vue.component('rticon-execute', execute)
    Vue.component('rticon-export', export0)
    Vue.component('rticon-fault', fault)
    Vue.component('rticon-fillin-data', fillinData)
    Vue.component('rticon-generate-barcode', generateBarcode)
    Vue.component('rticon-grant', grant)
    Vue.component('rticon-import-detail', importDetail)
    Vue.component('rticon-import', import0)
    Vue.component('rticon-mixin', mixin)
    Vue.component('rticon-modify', modify)
    Vue.component('rticon-not-handled', nothandled)
    Vue.component('rticon-related-defects', relatedDefects)
    Vue.component('rticon-reset', reset)
    Vue.component('rticon-return', return0)
    Vue.component('rticon-revoke', revoke)
    Vue.component('rticon-run', run)
    Vue.component('rticon-running-record', runningRecord)
    Vue.component('rticon-sampling-cancel', samplingCancel)
    Vue.component('rticon-sampling-composite-cancel', samplingCompositeCancel)
    Vue.component('rticon-sampling-composite-confirm', samplingCompositeConfirm)
    Vue.component('rticon-sampling-receive-confirm', samplingReceiveConfirm)
    Vue.component('rticon-sampling-receive', samplingReceive)
    Vue.component('rticon-sampling-send', samplingSend)
    Vue.component('rticon-sampling-spot', samplingSpot)
    Vue.component('rticon-save-case', saveCase)
    Vue.component('rticon-save', save)
    Vue.component('rticon-search', search)
    Vue.component('rticon-send-cancel', sendCancel)
    Vue.component('rticon-send', send)
    Vue.component('rticon-storageIn-confirm', storageInConfirm)
    Vue.component('rticon-storageIn-revoke', storageInRevoke)
    Vue.component('rticon-storageOut-confirm', storageOutConfirm)
    Vue.component('rticon-storageOut-revoke', storageOutRevoke)
    Vue.component('rticon-submit-repository', submitRepository)
    Vue.component('rticon-submit', submit)
    Vue.component('rticon-task-distribution', taskDistribution)
    Vue.component('rticon-task-feedback', taskFeedback)
    Vue.component('rticon-template', template)
    Vue.component('rticon-view-detail', viewDetail)
    Vue.component('rticon-weigh-cancel', weighCancel)
    Vue.component('rticon-weigh-complete', weighComplete)
    Vue.component('rticon-weigh-start', weighStart)
    Vue.component('rticon-weight-confirm', weightConfirm)
    Vue.component('rticon-withdraw', withdraw)

  }
}

export default RtIcons