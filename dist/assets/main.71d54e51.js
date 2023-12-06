import{n as o}from"./index.787e5401.js";const n={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u6BD4\u8F83\u957F\u7684\u9009\u9879",value:"option2"},{label:"\u4E24\u5B57",value:"option4"},{label:"\u4E09\u4E2A\u5B57",value:"option5"},{label:"\u56DB\u4E2A\u5927\u5B57",value:"option6"},{label:"\u4E94\u4E2A\u6492\u7684\u5B57",value:"option7"},{label:"\u516D\u4E2A\u963F\u677E\u5927\u5B57",value:"option8"},{label:"\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u5B57",value:"option9"},{label:"\u516B\u4E2A\u554A\u624B\u52A8\u9600\u53D1\u5B57",value:"option10"},{label:"\u4E5D\u4E2A\u963F\u677E\u5927\u5730\u65B9\u7ED9\u5B57",value:"option11"},{label:"\u5341\u4E2A\u6253\u7B97\u53D1\u94FE\u63A5\u5730\u65B9\u5B57",value:"option12"},{label:"\u5341\u4E00\u5B89\u629A\u514B\u91CC\u65AF\u8482\u90E1\u4E2A\u5B57",value:"option13"},{label:"\u5341\u4E8C\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57",value:"option14"},{label:"\u5341\u4E09\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5C3E\u90E8",value:"option15"},{label:"\u5341\u56DB\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5C3E\u90E8",value:"option16"},{label:"\u5341\u4E94\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u662F\u5C3E\u90E8",value:"option17"},{label:"\u5341\u516D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u5C3E\u90E8",value:"option18"},{label:"\u5341\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u6C34\u5C3E\u90E8",value:"option19"},{label:"\u5341\u516B\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5927\u5927\u5927\u5927\u5C3E\u90E8",value:"option20"},{label:"\u5341\u4E5D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u963F\u677E\u5927\u554A\u5B9E\u5C3E\u90E8",value:"option21"},{label:"\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u5C3E\u90E8",value:"option3"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u6BD4\u8F83\u957F\u7684\u9009\u9879", value: "option2" },
        { label: "\u4E24\u5B57", value: "option4" },
        { label: "\u4E09\u4E2A\u5B57", value: "option5" },
        { label: "\u56DB\u4E2A\u5927\u5B57", value: "option6" },
        { label: "\u4E94\u4E2A\u6492\u7684\u5B57", value: "option7" },
        { label: "\u516D\u4E2A\u963F\u677E\u5927\u5B57", value: "option8" },
        { label: "\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u5B57", value: "option9" },
        { label: "\u516B\u4E2A\u554A\u624B\u52A8\u9600\u53D1\u5B57", value: "option10" },
        { label: "\u4E5D\u4E2A\u963F\u677E\u5927\u5730\u65B9\u7ED9\u5B57", value: "option11" },
        { label: "\u5341\u4E2A\u6253\u7B97\u53D1\u94FE\u63A5\u5730\u65B9\u5B57", value: "option12" },
        { label: "\u5341\u4E00\u5B89\u629A\u514B\u91CC\u65AF\u8482\u90E1\u4E2A\u5B57", value: "option13" },
        { label: "\u5341\u4E8C\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57", value: "option14" },
        { label: "\u5341\u4E09\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5C3E\u90E8", value: "option15" },
        { label: "\u5341\u56DB\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5C3E\u90E8", value: "option16" },
        { label: "\u5341\u4E94\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u662F\u5C3E\u90E8", value: "option17" },
        { label: "\u5341\u516D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u5C3E\u90E8", value: "option18" },
        { label: "\u5341\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u6C34\u5C3E\u90E8", value: "option19" },
        { label: "\u5341\u516B\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5927\u5927\u5927\u5927\u5C3E\u90E8", value: "option20" },
        { label: "\u5341\u4E5D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u963F\u677E\u5927\u554A\u5B9E\u5C3E\u90E8", value: "option21" },
        { label: "\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u5C3E\u90E8", value: "option3" },
      ],
    }
  }
}`}}};var u=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u57FA\u7840\u7528\u6CD5")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},i=[],s=o(n,u,i,!1,null,"49217574",null,null);const v=s.exports;const p={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u9009\u9879",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u9009\u9879",value:"option3"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" filterable></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u9009\u9879", value: "option3" },
      ],
    }
  }
}`}}};var c=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u53D8\u91CF\u9009\u9879\u53EF\u641C\u7D22")]),l("p",[e._v("\u4EC5 mode \u4E3A select \u65F6")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,filterable:""},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},f=[],d=o(p,c,f,!1,null,"aaf27554",null,null);const m=d.exports;const _={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u9009\u9879",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u9009\u9879",value:"option3"}],extraSymbols:[{label:"$",value:"$"},{label:"^",value:"^"},{label:"&",value:"&"},{label:"\u6076\u610F\u7684\u975E\u5E38\u89C4\u7B26\u53F7",value:"hell1"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :extraSymbols="extraSymbols"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u9009\u9879", value: "option3" },
      ],
      extraSymbols: [
        { label: '$', value: '$' },
        { label: '^', value: '^' },
        { label: '&', value: '&' },
        { label: '\u6076\u610F\u7684\u975E\u5E38\u89C4\u7B26\u53F7', value: 'hell1' },
      ],
    }
  }
}`}}};var b=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u81EA\u5B9A\u4E49\u9644\u52A0\u7B26\u53F7")]),l("p",[e._v("\u4EC5 mode \u4E3A select \u65F6")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,extraSymbols:e.extraSymbols},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},h=[],x=o(_,b,h,!1,null,"7a8bfb54",null,null);const y=x.exports;const g={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u9009\u9879",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u9009\u9879",value:"option3"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" errmsg="\u8FD9\u91CC\u662F\u4E00\u4E9B\u9519\u8BEF\u4FE1\u606F"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u9009\u9879", value: "option3" },
      ],
    }
  }
}`}}};var O=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u9519\u8BEF\u4FE1\u606F")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,errmsg:"\u8FD9\u91CC\u662F\u4E00\u4E9B\u9519\u8BEF\u4FE1\u606F"},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},$=[],S=o(g,O,$,!1,null,"e4605a8b",null,null);const k=S.exports;const A={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u6BD4\u8F83\u957F\u7684\u9009\u9879",value:"option2"},{label:"\u4E24\u5B57",value:"option4"},{label:"\u4E09\u4E2A\u5B57",value:"option5"},{label:"\u56DB\u4E2A\u5927\u5B57",value:"option6"},{label:"\u4E94\u4E2A\u6492\u7684\u5B57",value:"option7"},{label:"\u516D\u4E2A\u963F\u677E\u5927\u5B57",value:"option8"},{label:"\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u5B57",value:"option9"},{label:"\u516B\u4E2A\u554A\u624B\u52A8\u9600\u53D1\u5B57",value:"option10"},{label:"\u4E5D\u4E2A\u963F\u677E\u5927\u5730\u65B9\u7ED9\u5B57",value:"option11"},{label:"\u5341\u4E2A\u6253\u7B97\u53D1\u94FE\u63A5\u5730\u65B9\u5B57",value:"option12"},{label:"\u5341\u4E00\u5B89\u629A\u514B\u91CC\u65AF\u8482\u90E1\u4E2A\u5B57",value:"option13"},{label:"\u5341\u4E8C\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57",value:"option14"},{label:"\u5341\u4E09\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5C3E\u90E8",value:"option15"},{label:"\u5341\u56DB\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5C3E\u90E8",value:"option16"},{label:"\u5341\u4E94\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u662F\u5C3E\u90E8",value:"option17"},{label:"\u5341\u516D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u5C3E\u90E8",value:"option18"},{label:"\u5341\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u6C34\u5C3E\u90E8",value:"option19"},{label:"\u5341\u516B\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5927\u5927\u5927\u5927\u5C3E\u90E8",value:"option20"},{label:"\u5341\u4E5D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u963F\u677E\u5927\u554A\u5B9E\u5C3E\u90E8",value:"option21"},{label:"\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u5C3E\u90E8",value:"option3"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" varOffset></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u6BD4\u8F83\u957F\u7684\u9009\u9879", value: "option2" },
        { label: "\u4E24\u5B57", value: "option4" },
        { label: "\u4E09\u4E2A\u5B57", value: "option5" },
        { label: "\u56DB\u4E2A\u5927\u5B57", value: "option6" },
        { label: "\u4E94\u4E2A\u6492\u7684\u5B57", value: "option7" },
        { label: "\u516D\u4E2A\u963F\u677E\u5927\u5B57", value: "option8" },
        { label: "\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u5B57", value: "option9" },
        { label: "\u516B\u4E2A\u554A\u624B\u52A8\u9600\u53D1\u5B57", value: "option10" },
        { label: "\u4E5D\u4E2A\u963F\u677E\u5927\u5730\u65B9\u7ED9\u5B57", value: "option11" },
        { label: "\u5341\u4E2A\u6253\u7B97\u53D1\u94FE\u63A5\u5730\u65B9\u5B57", value: "option12" },
        { label: "\u5341\u4E00\u5B89\u629A\u514B\u91CC\u65AF\u8482\u90E1\u4E2A\u5B57", value: "option13" },
        { label: "\u5341\u4E8C\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57", value: "option14" },
        { label: "\u5341\u4E09\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5C3E\u90E8", value: "option15" },
        { label: "\u5341\u56DB\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5C3E\u90E8", value: "option16" },
        { label: "\u5341\u4E94\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u662F\u5C3E\u90E8", value: "option17" },
        { label: "\u5341\u516D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u5C3E\u90E8", value: "option18" },
        { label: "\u5341\u4E03\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u6C34\u6C34\u6C34\u5C3E\u90E8", value: "option19" },
        { label: "\u5341\u516B\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u5927\u5927\u5927\u5927\u5C3E\u90E8", value: "option20" },
        { label: "\u5341\u4E5D\u4E2A\u554A\u624B\u52A8\u9600\u7684\u9996\u53D1\u5F0F\u5B57\u963F\u677E\u5927\u554A\u5B9E\u5C3E\u90E8", value: "option21" },
        { label: "\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u9009\u9879\u5C3E\u90E8", value: "option3" }
      ],
    }
  }
}`}}};var V=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u5E26\u504F\u79FB\u91CF\u7684\u53D8\u91CF")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,varOffset:""},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},R=[],C=o(A,V,R,!1,null,"120db88f",null,null);const F=C.exports;const w={data(){return{formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u9009\u9879",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u9009\u9879",value:"option3"}],rules:[{fn:a=>a.length>5,msg:"\u516C\u5F0F\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC75!"},{fn:a=>{const e=a.map(l=>l.value);for(let l=0;l<a.length;l++){let t=e[l],r=e[l+1];return t===5&&r==="*"}},msg:"\u516C\u5F0F\u5185\u5BB9\u91CC\u4E0D\u80FD\u5305\u542B5*"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u9009\u9879", value: "option3" },
      ],
      rules: [
        {
          fn: (elementArr) => {
            return elementArr.length > 5;
          },
          msg: '\u516C\u5F0F\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC75!'
        },
        {
          fn: (elementArr) => {
            const valueArr = elementArr.map((item) => { return item.value; });

            for (let i = 0; i < elementArr.length; i++) {
              let currV = valueArr[i];
              let nextV = valueArr[i + 1];

              return currV === 5 && nextV === '*'
            }
          },
          msg: '\u516C\u5F0F\u5185\u5BB9\u91CC\u4E0D\u80FD\u5305\u542B5*'
        },
      ],
    }
  }
}`}}};var T=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,rules:e.rules},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},I=[],D=o(w,T,I,!1,null,"86316c4f",null,null);const B=D.exports;const M={data(){return{formula:[],varOptions:[],extraSymbols:[{label:"$",value:"$"},{label:"^",value:"^"},{label:"&",value:"&"}],codehtml:'<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :extraSymbols="extraSymbols" mode="list"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u9009\u9879", value: "option3" },
      ],
      extraSymbols: [
        { label: '$', value: '$' },
        { label: '^', value: '^' },
        { label: '&', value: '&' },
        { label: '\u6076\u610F\u7684\u975E\u5E38\u89C4\u7B26\u53F7', value: 'hell1' },
      ],
    }
  },
  mounted() {
    let result = []
    for (let i = 1; i < 33; i++) {
      result.push({ label: \`\u7B2C\${i}\u4E2A\u9009\u9879\`, value: \`option\${i}\` })
    }
    for (let i = 33; i < 67; i++) {
      result.push({ label: \`\u7B2C\${i}\u4E2A\u6076\u610F\u7684\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009\`, value: \`option\${i}\` })
    }
    for (let i = 67; i < 100; i++) {
      result.push({ label: \`\u7B2C\${i}\u4E2A\u9009\u9879\`, value: \`option\${i}\` })
    }
    this.varOptions = result;
  },
}`}},mounted(){let a=[];for(let e=1;e<33;e++)a.push({label:`\u7B2C${e}\u4E2A\u9009\u9879`,value:`option${e}`});for(let e=33;e<67;e++)a.push({label:`\u7B2C${e}\u4E2A\u6076\u610F\u7684\u5DE8\u957F\u65E0\u6BD4\u7684\u9009\u9879\u9009\u9879\u9009\u9879\u9009`,value:`option${e}`});for(let e=67;e<100;e++)a.push({label:`\u7B2C${e}\u4E2A\u9009\u9879`,value:`option${e}`});this.varOptions=a}};var E=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u5217\u8868\u6A21\u5F0F\u9009\u62E9\u53D8\u91CF")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,extraSymbols:e.extraSymbols,mode:"list"},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})]},proxy:!0}])})],1)},L=[],z=o(M,E,L,!1,null,"14f1d28f",null,null);const U=z.exports;const j={data(){return{selecting:!1,currentIndex:0,formula:[],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879",value:"option3"}],rules:[{fn:a=>a.length>5,msg:"\u516C\u5F0F\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC75!"},{fn:a=>{const e=a.map(l=>l.value);for(let l=0;l<a.length;l++){let t=e[l],r=e[l+1];return t===5&&r==="*"}},msg:"\u516C\u5F0F\u5185\u5BB9\u91CC\u4E0D\u80FD\u5305\u542B5*"}],codehtml:`<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules" mode="custom"
          @select="onSelect"></rt-formula-editor>
        <el-dialog :visible.sync="selecting" title="\u9009\u62E9\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF">
          <el-button v-for="(item) in varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>`,code:`export default {
  data() {
    return {
      selecting: false,
      currentIndex: 0,
      formula: [],
      varOptions: [
        { label: "\u7B2C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879", value: "option1" },
        { label: "\u7B2C\u4E8C\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879", value: "option2" },
        { label: "\u7B2C\u4E09\u4E2A\u81EA\u5B9A\u4E49\u7684\u9009\u9879", value: "option3" },
      ],
      rules: [
        {
          fn: (elementArr) => {
            return elementArr.length > 5;
          },
          msg: '\u516C\u5F0F\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC75!'
        },
        {
          fn: (elementArr) => {
            const valueArr = elementArr.map((item) => { return item.value; });

            for (let i = 0; i < elementArr.length; i++) {
              let currV = valueArr[i];
              let nextV = valueArr[i + 1];

              return currV === 5 && nextV === '*'
            }
          },
          msg: '\u516C\u5F0F\u5185\u5BB9\u91CC\u4E0D\u80FD\u5305\u542B5*'
        },
      ],
    }
  },
  methods: {
    onSelect(index) {
      this.selecting = true;
      this.currentIndex = index;
    },
    onChoose(v) {
      const { currentIndex, formula } = this;
      let result = [...formula];
      result[currentIndex] = v;
      this.formula = result;
      this.selecting = false;
    },
  }
}`}},methods:{onSelect(a){this.selecting=!0,this.currentIndex=a},onChoose(a){const{currentIndex:e,formula:l}=this;let t=[...l];t[e]=a,this.formula=t,this.selecting=!1}}};var q=function(){var e=this,l=e._self._c;return l("div",[l("h2",[e._v("\u81EA\u5B9A\u4E49\u53D8\u91CF\u9009\u62E9")]),l("demo-block",{attrs:{codehtml:e.codehtml,code:e.code},scopedSlots:e._u([{key:"main",fn:function(){return[l("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,rules:e.rules,mode:"custom"},on:{select:e.onSelect},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}}),l("el-dialog",{attrs:{visible:e.selecting,title:"\u9009\u62E9\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF"},on:{"update:visible":function(t){e.selecting=t}}},e._l(e.varOptions,function(t){return l("el-button",{key:t.value,on:{click:()=>e.onChoose(t.value)}},[e._v(" "+e._s(t.label)+" ")])}),1)]},proxy:!0}])})],1)},G=[],H=o(j,q,G,!1,null,"249a44e5",null,null);const J=H.exports;const K={components:{Basic:v,Filterable:m,CustomSymbols:y,ErrorMsg:k,Offsets:F,CustomRules:B,ListTable:U,CustomVarSelector:J},data(){return{attrTableData:[{arg:"value/v-model",des:"\u7ED1\u5B9A\u503C",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"varOptions",des:"\u53D8\u91CF\u503C\u6570\u636E\u6E90",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"mode",des:"\u9009\u62E9\u53D8\u91CF\u503C\u6A21\u5F0F",type:"string",options:" select | list | custom",default:" select "},{arg:"filterable",des:'\u53D8\u91CF\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879\uFF08\u4EC5\u9002\u7528\u4E8E varSelectMode = "select" \u65F6\uFF09',type:"Boolean",options:" \u2014 ",default:"false"},{arg:"extraSymbols",des:"\u9644\u52A0\u7684\u81EA\u5B9A\u4E49\u7B26\u53F7",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"errmsg",des:"\u9519\u8BEF\u4FE1\u606F",type:"string | Boolean",options:" \u2014 ",default:" \u2014 "},{arg:"varOffset",des:"\u53D8\u91CF\u662F\u5426\u6709\u504F\u79FB\u91CF",type:"Boolean",options:" \u2014 ",default:" false "},{arg:"offsetSpliter",des:"\u81EA\u5B9A\u4E49\u53D8\u91CF\u503C\u4E0E\u504F\u79FB\u91CF\u503C\u7684\u5206\u9694\u7B26\u53F7",type:"string",options:" \u2014 ",default:" | "},{arg:"varDecoration",des:"\u53D8\u91CF\u4FEE\u9970\u7B26",type:"string",options:" \u2014 ",default:" \u2014 "},{arg:"rules",des:"\u9644\u52A0\u7684\u5224\u65AD\u89C4\u5219\uFF0C\u7528\u4E8E\u5224\u65AD\u516C\u5F0F\u7684\u5408\u6CD5\u6027",type:"Array<function(elArr)>",options:" \u2014 ",default:" \u2014 "}],eventTableData:[{name:"change",des:"\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",arg:"\u5F53\u524D\u503C"},{name:"select",des:"\u914D\u5408mode=custom\u65F6\u4F7F\u7528",arg:"\u5F53\u524D\u64CD\u4F5C\u9879\u7D22\u5F15"}],methodTableData:[{name:"getStrResult",des:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u8868\u793A\u5F0F",arg:" \u2014 "}]}}};var N=function(){var e=this,l=e._self._c;return l("div",{staticClass:"page-content-container"},[l("h1",[e._v("FormulaEditor \u516C\u5F0F\u7F16\u8F91\u5668")]),l("h2",[e._v("\u8BBE\u8BA1\u601D\u8DEF")]),l("ul",[l("li",[e._v("\u516C\u5F0F\u7F16\u8F91\u5668\u5E38\u7528\u4E8E\u8868\u5355\u5185\u6570\u636E\u7F16\u8F91\uFF0C\u56E0\u6B64\u672C\u7EC4\u4EF6\u4FA7\u91CD\u4E8E\u7F16\u8F91\u529F\u80FD\uFF0C\u5373\u6570\u636E\u8F93\u5165\u7684\u624B\u6BB5\u3002")]),l("li",[e._v("\u7F16\u8F91\u516C\u5F0F\u65F6\u5E94\u8BE5\u5728\u5934\u90E8\u5C55\u793A\u7ED3\u679C\u5B57\u7B26\u4E32\u4EE5\u9884\u89C8\u6548\u679C\u3002")]),l("li",[e._v("\u4FEE\u6539\u53D8\u91CF\u5E94\u8BE5\u53EF\u4EE5\u5728\u4EFB\u610F\u4F4D\u7F6E\u4FEE\u6539\u3002")]),l("li",[e._v("\u672C\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u6A21\u5F0F\u7C7B\u4F3C\u4E8E\u539F\u751F\u7684"+e._s(" < select />")+"\uFF0C\u9700\u8981\u88C5\u586B\u53D8\u91CF\u6570\u636E\u6E90\uFF1B\u5355\u9879\u7C7B\u4F3C\u4E8E"+e._s(" < option />")+"\u6839\u636E\u503C\u6E32\u67D3\u6587\u5B57\u3002 ")]),l("li",[e._v("\u56E0\u5728\u5B9E\u9645\u5E94\u7528\u65F6\uFF0C\u53D8\u91CF\u6570\u636E\u5F80\u5F80\u5DE8\u5927\u4E14\u903B\u8F91\u5173\u7CFB\u7EB7\u7E41\u590D\u6742\u3002\u6240\u4EE5\u63D0\u4F9B\u4E24\u79CD\u9ED8\u8BA4\u9009\u62E9\u53D8\u91CF\u7684\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\u3002\u5F53\u53D8\u91CF\u6570\u636E\u8F83\u5C11\u65F6\u53EF\u9009\u7528 select \u6A21\u5F0F\uFF1B\u5F53\u53D8\u91CF\u6570\u636E\u8F83\u591A\u65F6\u53EF\u9009\u7528 list \u6A21\u5F0F\u3002\u5982\u679C\u53D8\u91CF\u7684\u9009\u53D6\u9700\u8981\u8C03\u7528\u591A\u63A5\u53E3\u590D\u6742\u67E5\u8BE2\uFF08\u6216\u524D\u4E24\u79CD\u6A21\u5F0F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF09\u65F6\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\uFF08\u4F8B\u5982\u6839\u636E\u6811\u5F62\u7ED3\u6784\u67E5\u8BE2\u53D8\u91CF\u8868\u683C\uFF09\u3002\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\u4E0B\u4EC5\u66B4\u9732\u53D8\u91CF\u70B9\u51FB\u4E8B\u4EF6\uFF08\u8981\u9009\u62E9\u65F6\uFF09\u63A5\u53E3\uFF0C\u5177\u4F53UI\u9700\u81EA\u884C\u7F16\u5199\u3002")]),l("li",[e._v("\u516C\u5F0F\u5185\u5BB9\u7531\u56FA\u5B9A\u503C\uFF08\u6570\u5B57\uFF09\u3001\u53D8\u91CF\u3001\u7B26\u53F73\u79CD\u7C7B\u578B\u7EC4\u6210\u3002")]),l("li",[e._v("\u9ED8\u8BA4\u7684\u8FD0\u7B97\u7B26\u53F7\u53EA\u6709+-*/()\uFF0C\u9884\u7559\u4E86 extraSymbols \u5C5E\u6027\u7528\u4EE5\u6DFB\u52A0\u989D\u5916\u7684\u81EA\u5B9A\u4E49\u7B26\u53F7\u3002")]),l("li",[e._v('\u516C\u5F0F\u7F16\u8F91\u5668\u62E5\u6709\u5185\u7F6E\u9ED8\u8BA4\u7684\u516C\u5F0F\u6821\u9A8C\u65B9\u6CD5\uFF1A1.\u53D8\u91CF\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B2.\u5E38\u91CF\uFF08\u6570\u5B57\uFF09\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B3.\u7B26\u53F7\u975E "(" \u6216 ")" \u5219\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B4.\u4E0D\u80FD\u4EE5\u975E "(" \u7B26\u53F7\u5F00\u5934;5.\u53D8\u91CF\u548C\u5E38\u91CF\uFF08\u6570\u5B57\uFF09\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\u3002\u8FD9\u4E9B\u5185\u7F6E\u7684\u89C4\u5219\u53EA\u662F\u521D\u6B65\u9274\u5B9A\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6240\u7F16\u8F91\u7684\u516C\u5F0F\u7684\u5408\u6CD5\u6027\uFF0C\u5982\u679C\u60A8\u7684\u516C\u5F0F\u6821\u9A8C\u89C4\u5219\u590D\u6742\uFF0C\u9700\u8981\u60A8\u914D\u5408 @change \u4E8B\u4EF6\u81EA\u884C\u7F16\u5199\u6821\u9A8C\u903B\u8F91\u4EE3\u7801\u5E76\u5C06\u7ED3\u8BBA\u53CD\u9988\u7ED9\u9884\u7559\u7684 errmsg \u63A5\u53E3\u3002\u5F53 errmsg \u6709\u503C\u65F6\u5219\u663E\u793A\u5176\u5185\u5BB9\u4F5C\u4E3A\u9519\u8BEF\u4FE1\u606F\uFF1B\u5426\u5219\u6309\u7167\u9ED8\u8BA4\u7684\u5185\u7F6E\u89C4\u5219\u663E\u793A\u516C\u5F0F\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5982\u679C\u7ED9 errmsg \u8D4B\u4E86 false\uFF0C\u5219\u65E0\u8BBA\u5982\u4F55\u4E5F\u4E0D\u4F1A\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002')]),l("li",[e._v("\u9002\u914D\u745E\u592A\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u516C\u5F0F\u53D8\u91CF\u53EF\u80FD\u5B58\u5728\u5E38\u6570\u504F\u79FB\u91CF\uFF0C\u4F7F\u7528 varOffset \u63A7\u5236\u662F\u5426\u5F00\u542F\u4E4B\u3002")]),l("li",[e._v("\u5F00\u542F\u504F\u79FB\u91CF\u6821\u6B63\u540E\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u503C\u5206\u9694\u7B26\u540E\u9762\u7684\u5B57\u7B26\uFF0C\u5E76\u5C06\u4E4B\u8F6C\u4E3A\u6570\u5B57\u4F5C\u4E3A\u504F\u79FB\u91CF\u503C;\u5982\u679C\u521D\u59CB\u503C\u91CC\u9762\u6CA1\u6709\u504F\u79FB\u91CF\uFF0C\u90A3\u4E48\u7EC4\u4EF6\u4F1A\u5C06\u4E4B\u81EA\u52A8\u6821\u6B63\u81F30\u3002")]),l("li",[e._v("\u9884\u7559\u4E86\u53D8\u91CF\u503C\u4FEE\u9970\u7B26\u63A5\u53E3\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u559C\u597D\u5B9A\u4E49\u4E4B\u3002")])]),l("Basic"),l("div",{staticStyle:{height:"30px"}}),l("Filterable"),l("div",{staticStyle:{height:"30px"}}),l("CustomSymbols"),l("div",{staticStyle:{height:"30px"}}),l("ErrorMsg"),l("div",{staticStyle:{height:"30px"}}),l("Offsets"),l("div",{staticStyle:{height:"30px"}}),l("CustomRules"),l("div",{staticStyle:{height:"30px"}}),l("ListTable"),l("div",{staticStyle:{height:"30px"}}),l("CustomVarSelector"),l("div",{staticStyle:{height:"30px"}}),l("h2",[e._v("Attributes")]),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.attrTableData}},[l("el-table-column",{attrs:{prop:"arg",label:"\u53C2\u6570",width:"180"}}),l("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),l("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B",width:"150"}}),l("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009\u503C"}}),l("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4\u503C",width:"100"}})],1),l("h2",[e._v("Events")]),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.eventTableData}},[l("el-table-column",{attrs:{prop:"name",label:"\u4E8B\u4EF6\u540D\u79F0",width:"180"}}),l("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),l("el-table-column",{attrs:{prop:"arg",label:"\u56DE\u8C03\u53C2\u6570",width:"150"}})],1),l("h2",[e._v("Methods")]),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.methodTableData}},[l("el-table-column",{attrs:{prop:"name",label:"\u65B9\u6CD5\u540D",width:"180"}}),l("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),l("el-table-column",{attrs:{prop:"arg",label:"\u53C2\u6570",width:"150"}})],1)],1)},P=[],Q=o(K,N,P,!1,null,"6f26d87f",null,null);const X=Q.exports;export{X as default};
