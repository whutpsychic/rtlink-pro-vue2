import{n as o}from"./index.9dfeebb5.js";const r={data(){return{formula:["option2","+","-"],varOptions:[{label:"\u7B2C\u4E00\u4E2A\u9009\u9879",value:"option1"},{label:"\u7B2C\u4E8C\u4E2A\u9009\u9879222",value:"option2"},{label:"\u7B2C\u4E09\u4E2A\u9009\u9879\u9009\u9879\u9009\u9879",value:"option3",children:[{label:"option3_1",value:"option3_1"},{label:"option3_2",value:"option3_2"},{label:"option3_3",value:"option3_3"}]}],extraSymbols:[{label:"\u6076\u610F\u975E\u5E38\u89C4\u7B26\u53F7",value:"option11"},{label:"^",value:"^"},{label:"$",value:"$"}],codehtml:'<rt-formula-editor v-model="formula" :variableOptions="options"></rt-formula-editor>',code:`export default {
  data() {
    return {
      formula: [],
      options: [
        { label: "option1", value: "option1" },
        { label: "option2", value: "option2" },
        {
          label: "option3", value: "option3", children: [
            { label: "option3_1", value: "option3_1" },
            { label: "option3_2", value: "option3_2" },
            { label: "option3_3", value: "option3_3" },
          ]
        },
      ],
    }
  }
}`,attrTableData:[{arg:"value/v-model",des:"\u7ED1\u5B9A\u503C",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"varOptions",des:"\u53D8\u91CF\u503C\u6570\u636E\u6E90",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"varSelectMode",des:"\u9009\u62E9\u53D8\u91CF\u503C\u6A21\u5F0F",type:"string",options:" select | table | custom",default:" select "},{arg:"filterable",des:'\u53D8\u91CF\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879\uFF08\u4EC5\u9002\u7528\u4E8E varSelectMode = "select" \u65F6\uFF09',type:"Boolean",options:" \u2014 ",default:"false"},{arg:"extraSymbols",des:"\u9644\u52A0\u7684\u81EA\u5B9A\u4E49\u7B26\u53F7",type:"Array",options:" \u2014 ",default:" \u2014 "},{arg:"errmsg",des:"\u9519\u8BEF\u4FE1\u606F",type:"string | Boolean",options:" \u2014 ",default:" \u2014 "},{arg:"varOffset",des:"\u53D8\u91CF\u662F\u5426\u6709\u504F\u79FB\u91CF",type:"Boolean",options:" \u2014 ",default:" false "},{arg:"offsetSpliter",des:"\u81EA\u5B9A\u4E49\u53D8\u91CF\u503C\u4E0E\u504F\u79FB\u91CF\u503C\u7684\u5206\u9694\u7B26\u53F7",type:"string",options:" \u2014 ",default:" | "},{arg:"varDecoration",des:"\u53D8\u91CF\u4FEE\u9970\u7B26",type:"string",options:" \u2014 ",default:" \u2014 "}],eventTableData:[{name:"change",des:"\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",arg:"\u5F53\u524D\u503C"}],methodTableData:[{name:"getStrResult",des:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u8868\u793A\u5F0F",arg:" \u2014 "},{name:"validate",des:"\u8FDB\u884C\u4E00\u6B21\u5185\u7F6E\u7684\u9ED8\u8BA4\u6821\u9A8C\u5E76\u8FD4\u56DE\u6821\u9A8C\u7ED3\u679C",arg:" \u2014 "}]}},methods:{look(){let l=this.$refs.fe.getStrResult();console.log(l),console.log(this.formula)}}};var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-content-container"},[t("h1",[e._v("FormulaEditor \u516C\u5F0F\u7F16\u8F91\u5668")]),t("h2",[e._v("\u8BBE\u8BA1\u601D\u8DEF")]),t("ul",[t("li",[e._v("\u516C\u5F0F\u7F16\u8F91\u5668\u5E38\u7528\u4E8E\u8868\u5355\u5185\u6570\u636E\u7F16\u8F91\uFF0C\u56E0\u6B64\u672C\u7EC4\u4EF6\u4FA7\u91CD\u4E8E\u7F16\u8F91\u529F\u80FD\uFF0C\u5373\u6570\u636E\u8F93\u5165\u7684\u624B\u6BB5\u3002")]),t("li",[e._v("\u7F16\u8F91\u516C\u5F0F\u65F6\u5E94\u8BE5\u5728\u5934\u90E8\u5C55\u793A\u7ED3\u679C\u5B57\u7B26\u4E32\u4EE5\u9884\u89C8\u6548\u679C\u3002")]),t("li",[e._v("\u4FEE\u6539\u53D8\u91CF\u5E94\u8BE5\u53EF\u4EE5\u5728\u4EFB\u610F\u4F4D\u7F6E\u4FEE\u6539\u3002")]),t("li",[e._v("\u672C\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u6A21\u5F0F\u7C7B\u4F3C\u4E8E\u539F\u751F\u7684"+e._s(" < select />")+"\uFF0C\u9700\u8981\u88C5\u586B\u53D8\u91CF\u6570\u636E\u6E90\uFF1B\u5355\u9879\u7C7B\u4F3C\u4E8E"+e._s(" < option />")+"\u6839\u636E\u503C\u6E32\u67D3\u6587\u5B57\u3002 ")]),t("li",[e._v("\u56E0\u5728\u5B9E\u9645\u5E94\u7528\u65F6\uFF0C\u53D8\u91CF\u6570\u636E\u5F80\u5F80\u5DE8\u5927\u4E14\u903B\u8F91\u5173\u7CFB\u7EB7\u7E41\u590D\u6742\u3002\u6240\u4EE5\u63D0\u4F9B\u4E24\u79CD\u9ED8\u8BA4\u9009\u62E9\u53D8\u91CF\u7684\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\u3002\u5F53\u53D8\u91CF\u6570\u636E\u8F83\u5C11\u65F6\u53EF\u9009\u7528 select \u6A21\u5F0F\uFF1B\u5F53\u53D8\u91CF\u6570\u636E\u8F83\u591A\u65F6\u53EF\u9009\u7528 table \u6A21\u5F0F\u3002\u5982\u679C\u53D8\u91CF\u7684\u9009\u53D6\u9700\u8981\u8C03\u7528\u591A\u63A5\u53E3\u590D\u6742\u67E5\u8BE2\uFF08\u6216\u524D\u4E24\u79CD\u6A21\u5F0F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF09\u65F6\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\uFF08\u4F8B\u5982\u6839\u636E\u6811\u5F62\u7ED3\u6784\u67E5\u8BE2\u53D8\u91CF\u8868\u683C\uFF09\u3002\u81EA\u5B9A\u4E49\u9009\u62E9\u6A21\u5F0F\u4E0B\u4EC5\u66B4\u9732\u53D8\u91CF\u70B9\u51FB\u4E8B\u4EF6\uFF08\u8981\u9009\u62E9\u65F6\uFF09\u63A5\u53E3\uFF0C\u5177\u4F53UI\u9700\u81EA\u884C\u7F16\u5199\u3002")]),t("li",[e._v("\u516C\u5F0F\u5185\u5BB9\u7531\u56FA\u5B9A\u503C\uFF08\u6570\u5B57\uFF09\u3001\u53D8\u91CF\u3001\u7B26\u53F73\u79CD\u7C7B\u578B\u7EC4\u6210\u3002")]),t("li",[e._v("\u9ED8\u8BA4\u7684\u8FD0\u7B97\u7B26\u53F7\u53EA\u6709+-*/()\uFF0C\u9884\u7559\u4E86 extraSymbols \u5C5E\u6027\u7528\u4EE5\u6DFB\u52A0\u989D\u5916\u7684\u81EA\u5B9A\u4E49\u7B26\u53F7\u3002")]),t("li",[e._v('\u516C\u5F0F\u7F16\u8F91\u5668\u62E5\u6709\u5185\u7F6E\u9ED8\u8BA4\u7684\u516C\u5F0F\u6821\u9A8C\u65B9\u6CD5\uFF1A1.\u53D8\u91CF\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B2.\uFF08\u56FA\u5B9A\u503C\uFF09\u6570\u5B57\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B3.\u7B26\u53F7\u975E "(" \u6216 ")" \u5219\u4E0D\u80FD\u8FDE\u7EED\u51FA\u73B0\uFF1B4.\u4E0D\u80FD\u4EE5\u975E "(" \u7B26\u53F7\u5F00\u5934\u3002\u8FD9\u4E9B\u5185\u7F6E\u7684\u89C4\u5219\u53EA\u662F\u521D\u6B65\u9274\u5B9A\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6240\u7F16\u8F91\u7684\u516C\u5F0F\u7684\u5408\u6CD5\u6027\uFF0C\u5982\u679C\u60A8\u7684\u516C\u5F0F\u6821\u9A8C\u89C4\u5219\u590D\u6742\uFF0C\u9700\u8981\u60A8\u914D\u5408 @change \u4E8B\u4EF6\u81EA\u884C\u7F16\u5199\u6821\u9A8C\u903B\u8F91\u4EE3\u7801\u5E76\u5C06\u7ED3\u8BBA\u53CD\u9988\u7ED9\u9884\u7559\u7684 errmsg \u63A5\u53E3\u3002\u5F53 errmsg \u6709\u503C\u65F6\u5219\u663E\u793A\u5176\u5185\u5BB9\u4F5C\u4E3A\u9519\u8BEF\u4FE1\u606F\uFF1B\u5426\u5219\u6309\u7167\u9ED8\u8BA4\u7684\u5185\u7F6E\u89C4\u5219\u663E\u793A\u516C\u5F0F\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5982\u679C\u7ED9 errmsg \u8D4B\u4E86 false\uFF0C\u5219\u65E0\u8BBA\u5982\u4F55\u4E5F\u4E0D\u4F1A\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002')]),t("li",[e._v("\u9002\u914D\u745E\u592A\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u516C\u5F0F\u53D8\u91CF\u53EF\u80FD\u5B58\u5728\u5E38\u6570\u504F\u79FB\u91CF\uFF0C\u4F7F\u7528 varOffset \u63A7\u5236\u662F\u5426\u5F00\u542F\u4E4B\u3002")]),t("li",[e._v("\u5F00\u542F\u504F\u79FB\u91CF\u6821\u6B63\u540E\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u503C\u5206\u9694\u7B26\u540E\u9762\u7684\u5B57\u7B26\uFF0C\u5E76\u5C06\u4E4B\u8F6C\u4E3A\u6570\u5B57\u4F5C\u4E3A\u504F\u79FB\u91CF\u503C;\u5982\u679C\u521D\u59CB\u503C\u91CC\u9762\u6CA1\u6709\u504F\u79FB\u91CF\uFF0C\u90A3\u4E48\u7EC4\u4EF6\u4F1A\u5C06\u4E4B\u81EA\u52A8\u6821\u6B63\u81F30\u3002")]),t("li",[e._v("\u9884\u7559\u4E86\u53D8\u91CF\u503C\u4FEE\u9970\u7B26\u63A5\u53E3\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u559C\u597D\u5B9A\u4E49\u4E4B\u3002")])]),t("h2",[e._v("\u57FA\u7840\u7528\u6CD5")]),t("demo-block",{attrs:{height:"400"},scopedSlots:e._u([{key:"main",fn:function(){return[t("rt-formula-editor",{ref:"fe",attrs:{varOptions:e.varOptions,filterable:"",extraSymbols:e.extraSymbols,varOffset:"",varDecoration:"[]",errmsg:"\u9519\u8BEF\u4FE1\u606F"},model:{value:e.formula,callback:function(a){e.formula=a},expression:"formula"}}),t("el-button",{on:{click:e.look}},[e._v("\u67E5\u770B\u503C")])]},proxy:!0},{key:"codes",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),t("code",{staticClass:"html"},[e._v(e._s(e.codehtml))]),e._v(`
        `),t("code",{staticClass:"javascript"},[e._v(e._s(e.code))]),e._v(`
      `)])]},proxy:!0}])}),t("h2",[e._v("Attributes")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.attrTableData}},[t("el-table-column",{attrs:{prop:"arg",label:"\u53C2\u6570",width:"180"}}),t("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),t("el-table-column",{attrs:{prop:"type",label:"\u7C7B\u578B",width:"150"}}),t("el-table-column",{attrs:{prop:"options",label:"\u53EF\u9009\u503C"}}),t("el-table-column",{attrs:{prop:"default",label:"\u9ED8\u8BA4\u503C",width:"100"}})],1),t("h2",[e._v("Events")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.eventTableData}},[t("el-table-column",{attrs:{prop:"name",label:"\u4E8B\u4EF6\u540D\u79F0",width:"180"}}),t("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),t("el-table-column",{attrs:{prop:"arg",label:"\u56DE\u8C03\u53C2\u6570",width:"150"}})],1),t("h2",[e._v("Methods")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.methodTableData}},[t("el-table-column",{attrs:{prop:"name",label:"\u65B9\u6CD5\u540D",width:"180"}}),t("el-table-column",{attrs:{prop:"des",label:"\u8BF4\u660E"}}),t("el-table-column",{attrs:{prop:"arg",label:"\u53C2\u6570",width:"150"}})],1)],1)},n=[],i=o(r,s,n,!1,null,"fb528284",null,null);const u=i.exports;export{u as default};