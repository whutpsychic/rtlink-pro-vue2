<template>
  <div :class="curr ? 'rt-formula-item-can var current' : 'rt-formula-item-can var'"
    :style="`min-width:${widthWithoutOffset}px;width:${outerWidth};`" @click="$emit('select')">
    <div :style="`min-width:${varOffset ? widthWithOffset : widthWithoutOffset}px;width:${innerWidth};`" class="var-can">
      <el-select v-if="mode === 'select'" style="width:100%;" :value="optionValue" @change="handleChange"
        :placeholder="placeholder" :filterable="filterable">
        <el-option v-for="(item) in varOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
      <el-button v-else-if="mode === 'list'" @click="selecting = true">{{ _getLabelByValue() }}</el-button>
      <el-button v-else-if="mode === 'custom'" @click="$emit('select')">{{ _getLabelByValue() }}</el-button>
      <div v-if="varOffset" class="divider"></div>
      <el-input-number v-if="varOffset" :style="`min-width:${offsetWidth}px;width:${offsetWidth}px;`" :value="offsetValue"
        controls-position="right" @change="onChangeOffset"></el-input-number>
    </div>
    <div>
      <i class="el-icon-circle-close" @click="onDelete"></i>
    </div>
    <el-dialog v-if="mode === 'list'" :visible.sync="selecting" title="选择变量">
      <ListTable :varOptions="varOptions" :varOffset="varOffset" :offsetSpliter="offsetSpliter"
        :varDecoration="varDecoration" @select="handleSelect" />
    </el-dialog>
  </div>
</template>

<script>
import ListTable from '../common/ListTable.vue';

export default {
  components: { ListTable },
  props: {
    // 值
    value: { type: String, default: "" },
    // 操作位置
    curr: { type: Boolean, default: false },
    // 变量可选值
    varOptions: { type: Array, default: () => ([]) },
    // 变量数据过多，需要顶部快捷搜索定位（仅 mode = select）
    filterable: { type: Boolean, default: false },
    // 变量选择模式
    mode: { type: String, default: "" },
    // 是否带有偏移量
    varOffset: { type: Boolean, default: false },
    // 偏移量分隔符
    offsetSpliter: { type: String, default: "" },
    // 变量修饰符
    varDecoration: { type: String, default: "" },
  },
  data() {
    const { mode } = this;
    return {
      // ================= 通用 =================
      placeholder: '请选择变量',
      // 偏移量宽度 px
      offsetWidth: 100,
      // 无偏移量时的容器默认宽度 px
      widthWithoutOffset: mode === 'select' ? 130 : 92,
      // 有偏移量时的容器默认宽度 px
      widthWithOffset: mode === 'select' ? 240 : 215,
      // ================= mode==='list' =================
      selecting: false,

    }
  },
  computed: {
    optionValue() {
      const { value, varOffset, offsetSpliter } = this;
      const { preVarDecoration } = this
      const { suffVarDecoration } = this

      if (!value) return null;
      if (varOffset) {
        const arr = value.split(offsetSpliter);
        return arr[0].replace(preVarDecoration, '');
      } else {
        return value.replace(preVarDecoration, '').replace(suffVarDecoration, '');
      }
    },
    offsetValue() {
      const { value, offsetSpliter } = this;
      if (!value) return 0;
      const arr = value.split(offsetSpliter);
      let result = 0;
      if (arr[1]) {
        // 看看是否是小数
        if (arr[1].indexOf('.') > -1) {
          result = parseFloat(arr[1]);
        } else {
          result = parseInt(arr[1]);
        }
      }
      return result;
    },
    preVarDecoration() {
      const { varDecoration } = this;
      return varDecoration[0] || "";
    },
    suffVarDecoration() {
      const { varDecoration } = this;
      return varDecoration[1] || "";
    },
    // 下拉框宽度
    innerWidth() {
      const { varOptions, value, varOffset } = this;
      const { widthWithoutOffset, widthWithOffset, offsetWidth } = this;
      const { mode } = this;
      const target = varOptions.find((item) => { return item.value === value });

      // 检查是否是默认无偏移量且开启了偏移量功能
      const { optionValue } = this;
      const target2 = varOptions.find((item) => { return item.value === optionValue });

      const finalTarget = target || target2;

      if (mode === 'select') {
        // 没找到label的情况
        if (!finalTarget) {
          return varOffset ? `${widthWithOffset}px` : `${widthWithoutOffset}px`;
        }
        // 根据值找到label
        else {
          const L = finalTarget.label.length;
          // 根据label长度设置宽度
          return varOffset ? `calc(${L * 1}em + ${offsetWidth + 60}px)` : `calc(${L * 1}em + 30px)`;
        }
      }
      // button 模式
      else {
        return 'auto';
      }
    },
    outerWidth() {
      const { varOptions, value, varOffset } = this;
      const { widthWithoutOffset, widthWithOffset, offsetWidth } = this;
      const { mode } = this;
      const target = varOptions.find((item) => { return item.value === value });

      // 检查是否是默认无偏移量且开启了偏移量功能
      const { optionValue } = this;
      const target2 = varOptions.find((item) => { return item.value === optionValue });

      const finalTarget = target || target2;

      if (mode === 'select') {
        let result;
        // 没找到label的情况
        if (!finalTarget) {
          result = (varOffset ? `${widthWithOffset}px` : `${widthWithoutOffset}px`);
          return result;
        }
        // 根据值找到label
        else {
          const L = finalTarget.label.length;
          // 根据label长度设置宽度
          result = (varOffset ? `calc(${L * 1}em + ${offsetWidth + 74}px)` : `calc(${L * 1}em + 30px)`);
          return result;
        }
      }
      // button 模式
      else {
        return 'auto';
      }
    },
  },
  mounted() {
    // 初始化矫正一次偏移量的值
    const { varOffset } = this;
    if (varOffset) {
      this.correctValueWithOffset();
    }
  },
  methods: {
    onDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    },
    handleChange(v) {
      const { varOffset, preVarDecoration, suffVarDecoration, offsetSpliter, offsetValue } = this;
      if (varOffset) {
        this.$emit('change', `${preVarDecoration}${v}${offsetSpliter}${offsetValue}${suffVarDecoration}`);
      }
      else {
        this.$emit('change', `${preVarDecoration}${v}${suffVarDecoration}`);
      }
    },
    // 改变偏移量时
    onChangeOffset(v) {
      const { value, offsetSpliter, preVarDecoration, suffVarDecoration } = this;
      if (!value) return;
      const arr = value.split(offsetSpliter);
      const result = `${arr[0]}${offsetSpliter}${v}`.replace(preVarDecoration, '').replace(suffVarDecoration, '');
      const decoratedResult = `${preVarDecoration}${result}${suffVarDecoration}`;
      this.$emit('change', decoratedResult);
    },
    // 矫正偏移量的值
    correctValueWithOffset() {
      const { varOffset } = this;
      if (!varOffset) {
        return;
      }
      else {
        let { value, offsetSpliter } = this;
        if (!value) return;
        const arr = value.split(offsetSpliter);
        if (!arr[1]) {
          this.onChangeOffset(0);
        }
      }
    },
    // 根据变量值找到其label
    _getLabelByValue() {
      const { value, varOptions, placeholder } = this;
      if (!value && value !== 0) {
        return placeholder;
      }
      const { varOffset, offsetSpliter, preVarDecoration, suffVarDecoration } = this;

      let targetValue = value.replace(preVarDecoration, '').replace(suffVarDecoration, '');

      if (varOffset) {
        targetValue = targetValue.split(offsetSpliter)[0]
      }

      const target = varOptions.find((item) => {
        return item.value === targetValue;
      })

      if (!!target) {
        return target.label;
      } else {
        return value;
      }
    },
    handleSelect(v) {
      this.handleChange(v);
      this.selecting = false;
    },
  }
}
</script>

<style>
.rt-formula-item-can .var-can {
  display: flex;
  align-items: center;
}

.rt-formula-item-can .divider {
  display: inline-block;
  width: 1px;
  height: 100%;
  background-color: #ddd;
  margin: 0 10px;
}
</style>