<template>
  <div class="rt-formula-editor-container">
    <!-- 顶部操作条 -->
    <div class="top-section">
      <p class="left-title">{{ title }}</p>
      <div class="right-btns">
        <el-button v-for="(item, i) in calcSymbols" :key="i" @click="addSymbol(item.value)">{{
          item.label }}</el-button>
        <el-button @click="addItem">添加变量</el-button>
        <el-button @click="addNumber">添加常量</el-button>
        <el-button @click="backspace" :disabled="!(value && value.length > 0)">退格</el-button>
        <el-button @click="clear" :disabled="!(value && value.length > 0)">清空</el-button>
      </div>
    </div>
    <!-- 分割线 -->
    <div v-if="!(extraSymbols && extraSymbols.length > 0)" class="spliter"></div>
    <!-- 额外的符号显示栏 -->
    <el-collapse v-if="extraSymbols && extraSymbols.length > 0" :value="showAllSymbols ? 'extraSymbols' : null">
      <el-collapse-item title="其他符号" name="extraSymbols">
        <el-button v-for="(item, i) in extraSymbols" :key="i" class="extra-symbol-btn" @click="addSymbol(item.value)">{{
          item.label }}</el-button>
      </el-collapse-item>
    </el-collapse>
    <div v-show="showAllSymbols" class="spliter"></div>
    <!-- 错误信息提示处 -->
    <div v-if="errorMessage" class="fmerror-msg-tips">
      <el-alert :title="errorMessage" type="error" show-icon :closable="false" />
    </div>
    <!-- 公式字符串预览 -->
    <div class="formulastr-previewer">
      <p v-if="formulaStr">
        <span>{{ formulaStr }}</span>
      </p>
      <p v-else class="placeholder">公式预览</p>
    </div>
    <div class="spliter"></div>
    <!-- 公式值编辑处 -->
    <div class="rt-formula-main-content">
      <component v-for="(item, i) in value" :key="i" :is="_judgeItemTypeByValue(item)" :label="_getItemLabelByValue(item)"
        :value="item" @delete="() => onDeleteItem(i)" @select="() => onSelectItem(i)" :curr="currIndex === i"
        @change="(v) => onChangeItemValue(v, i)" :varOptions="varOptions" :varOffset="varOffset"
        :offsetSpliter="offsetSpliter" :varDecoration="varDecoration" />
    </div>
  </div>
</template>

<script>
import SymbolItem from "./common/Symbol.vue";
import NumberItem from "./common/Number.vue";
import Item from "./common/Item.vue";

export default {
  components: { Item, NumberItem, SymbolItem },
  props: {
    // v-model
    value: { type: Array, default: () => ([]) },
    // 变量数据源
    varOptions: { type: Array, default: () => ([]) },
    // 变量选择模式
    varSelectMode: { type: String, default: "select" },
    // 变量数据过多，需要顶部快捷搜索定位（仅 varSelectMode = select）
    filterable: { type: Boolean, default: false },
    // 额外符号
    extraSymbols: { type: Array, default: () => ([]) },
    // 错误信息
    errmsg: { type: [String, Boolean], default: null },
    // 变量偏移量
    varOffset: { type: Boolean, default: false },
    // 偏移量分隔符
    offsetSpliter: { type: String, default: "|" },
    // 变量修饰符
    varDecoration: { type: String, default: "" },
  },
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    formulaStr() {
      const { value, _getItemLabelByValue } = this;
      let result = value.map((item) => {
        return _getItemLabelByValue(item);
      })
      return result.join("");
    },
    preVarDecoration() {
      const { varDecoration } = this;
      return varDecoration[0] || "";
    },
    suffVarDecoration() {
      const { varDecoration } = this;
      return varDecoration[1] || "";
    },
    errorMessage() {
      const { errmsg, error } = this;
      // 如果被关闭了则始终不显示
      if (typeof (errmsg) === 'boolean' && !errmsg) {
        return
      }
      return errmsg || error;
    }
  },
  data() {
    return {
      title: "计算公式",
      // 展示所有计算符号
      showAllSymbols: false,
      // 计算符号（默认）
      calcSymbols: [
        { label: "+", value: "+" },
        { label: "-", value: "-" },
        { label: "*", value: "*" },
        { label: "/", value: "/" },
        { label: "(", value: "(" },
        { label: ")", value: ")" },
      ],
      // 当前操作的节点索引
      currIndex: -1,
      // 默认的错误信息
      error: ""
    }
  },
  watch: {
    value(newv, oldv) {
      console.log(newv);
    }
  },
  mounted() {
    // 加载后调整一次当前操作的项索引
    const { value } = this;
    this.currIndex = value.length - 1;
  },
  methods: {
    // 外部暴露
    getStrResult() {
      return this.formulaStr;
    },
    // =================== v-model ===================
    addSymbol(s) {
      const { value, currIndex } = this;
      value.splice(currIndex + 1, 0, s);
      this.$emit('change', value);
      this.currIndex++;
    },
    addNumber() {
      const { value, currIndex } = this;
      value.splice(currIndex + 1, 0, 0);
      this.$emit('change', value);
      this.currIndex++;
    },
    addItem() {
      const { value, currIndex } = this;
      value.splice(currIndex + 1, 0, null);
      this.$emit('change', value);
      this.currIndex++;
    },
    backspace() {
      const position = this.value.length - 1;
      this.onDeleteItem(position);
    },
    clear() {
      this.currIndex = -1;
      this.$emit('change', []);
    },
    // 值改变时
    onChangeItemValue(v, index) {
      const { value } = this;
      let result = [...value]
      result[index] = v
      this.$emit('change', result);
    },
    // 删除某一项
    onDeleteItem(index) {
      // 将当前操作项提前一位
      const _curri = index - 1;
      this.currIndex = _curri < -1 ? -1 : _curri;

      const { value } = this;
      value.splice(index, 1);
      this.$emit('change', value);
    },
    // =================== v-model ===================
    // 选择某项
    onSelectItem(index) {
      this.currIndex = index;
    },
    // 判断是否是符号类型
    _isSymbol(item) {
      const { calcSymbols, extraSymbols } = this;
      const targetOfDefaults = calcSymbols.find((_item) => { return _item.value === item });
      const targetOfExtras = extraSymbols.find((_item) => { return _item.value === item });

      return targetOfDefaults || targetOfExtras;
    },
    // 判断是否是常量类型
    _isConst(item) {
      const result = typeof (item) === 'number';
      return result;
    },
    // 根据项类型渲染item
    _judgeItemTypeByValue(item) {
      const { _isSymbol, _isConst } = this;
      if (_isConst(item)) {
        return NumberItem;
      }
      else if (_isSymbol(item)) {
        return SymbolItem;
      }
      // 其余都认为是变量
      else {
        return Item;
      }
    },
    // 根据项的值获取其label
    _getItemLabelByValue(rawitem) {
      const { _isSymbol, _isConst, varOptions, offsetSpliter } = this;
      const { preVarDecoration, suffVarDecoration } = this;
      if (!rawitem) {
        return "未选择的变量";
      }
      else if (_isConst(rawitem)) {
        return rawitem;
      }
      else {
        const item = rawitem.replace(preVarDecoration, '').replace(suffVarDecoration, '')
        const symbolTarget = _isSymbol(item);
        if (symbolTarget) {
          return symbolTarget.label;
        }
        else {
          const target = varOptions.find((_item) => {
            return _item.value === item;
          })
          // 偏移量功能
          const target2 = varOptions.find((_item) => {
            if (!item) {
              return
            }
            const arr = item.split(offsetSpliter);
            return _item.value === arr[0];
          });
          const finalTarget = target || target2;
          if (finalTarget) {
            return finalTarget.label;
          }
          else {
            return "未知变量";
          }
        }
      }
    },
  }
}
</script>
<style src="./style.css"></style>
<style>
.rt-formula-editor-container {
  margin: 0;
  padding: 20px;
  border: dashed 1px #ddd;
  min-width: 800px;
}

.rt-formula-editor-container .top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: orange; */
}

.rt-formula-editor-container .spliter {
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;
}

.rt-formula-editor-container .rt-formula-main-content {
  display: flex;
  flex-wrap: wrap;
}

.rt-formula-editor-container .placeholder {
  color: #ddd;
}
</style>
