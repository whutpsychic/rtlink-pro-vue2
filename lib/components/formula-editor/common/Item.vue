<template>
  <div :class="curr ? 'rt-formula-item-can var current' : 'rt-formula-item-can var'"
    :style="`min-width:${widthWithoutOffset}px;width:${_calcWidth()};`" @click="$emit('select')">
    <div :style="`min-width:${varOffset ? widthWithOffset : widthWithoutOffset}px;width:${_calcWidth()};`"
      class="var-can">
      <el-select style="width:100%;" :value="optionValue" @change="handleChange" placeholder="请选择变量">
        <el-option v-for="(item) in varOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
      <div v-if="varOffset" class="divider"></div>
      <el-input-number v-if="varOffset" :style="`min-width:${offsetMinWidth}px;`" :value="offsetValue"
        controls-position="right" @change="onChangeOffset"></el-input-number>
    </div>
    <div>
      <i class="el-icon-circle-close" @click="onDelete"></i>
    </div>
  </div>
</template>

<script>
// ================= select 模式下 =================
// 无偏移量时的容器默认宽度 px
const widthWithoutOffset = 130;

// 有偏移量时的容器默认宽度 px
const widthWithOffset = 240;

// 偏移量最小宽度 px
const offsetMinWidth = 100;
// =================================================

export default {
  props: {
    // 值
    value: { type: String, default: "" },
    // 操作位置
    curr: { type: Boolean, default: false },
    // 变量可选值
    varOptions: { type: Array, default: () => ([]) },
    // 是否带有偏移量
    varOffset: { type: Boolean, default: false },
    // 偏移量分隔符
    offsetSpliter: { type: String, default: "" },
  },
  data() {
    return {
      widthWithoutOffset,
      widthWithOffset,
      offsetMinWidth,
    }
  },
  computed: {
    optionValue() {
      const { value, varOffset, offsetSpliter } = this;
      if (!value) return null;
      if (varOffset) {
        const arr = value.split(offsetSpliter);
        return arr[0];
      } else {
        return value;
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
      this.$emit('change', v)
    },
    // 计算下拉选择框的宽度
    _calcWidth() {
      const { varOptions, value, varOffset } = this;
      const { widthWithoutOffset, widthWithOffset } = this;
      const target = varOptions.find((item) => { return item.value === value });

      // 检查是否是默认无偏移量且开启了偏移量功能
      const { optionValue } = this;
      const target2 = varOptions.find((item) => { return item.value === optionValue });

      const finalTarget = target || target2;

      // 没找到label的情况
      if (!finalTarget) {
        return varOffset ? `${widthWithOffset}px` : `${widthWithoutOffset}px`;
      }
      // 根据值找到label
      else {
        const L = finalTarget.label.length;
        // 根据label长度设置宽度
        return varOffset ? `calc(${L * 1}em + ${offsetMinWidth + 60}px)` : `calc(${L * 1}em + 30px)`;
      }
    },
    // 改变偏移量时
    onChangeOffset(v) {
      let { value, offsetSpliter } = this;
      const arr = value.split(offsetSpliter);
      const result = `${arr[0]}${offsetSpliter}${v}`;
      this.$emit('change', result);
    },
    // 矫正偏移量的值
    correctValueWithOffset() {
      const { varOffset } = this;
      if (!varOffset) {
        return;
      }
      else {
        let { value, offsetSpliter } = this;
        const arr = value.split(offsetSpliter);
        if (!arr[1]) {
          this.onChangeOffset(0);
        }
      }
    },
  }
}
</script>

<style scoped>
.var-can {
  display: flex;
  align-items: center;
}

.divider {
  display: inline-block;
  width: 1px;
  height: 100%;
  background-color: #ddd;
  margin: 0 10px;
}
</style>