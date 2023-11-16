<template>
  <div :class="curr ? 'rt-formula-item-can var current' : 'rt-formula-item-can var'"
    :style="`min-width:130px;width:${_calcWidth()};`" @click="$emit('select')">
    <div>
      <el-select :style="`min-width:130px;width:${_calcWidth()};`" :value="value" @change="handleChange"
        placeholder="请选择变量">
        <el-option v-for="(item) in varOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
    </div>
    <div>
      <i class="el-icon-circle-close" @click="onDelete"></i>
    </div>
  </div>
</template>

<script>

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
      const { varOptions, value } = this;
      const target = varOptions.find((item) => { return item.value === value });
      // 根据值找到label
      if (!target) {
        return '130px';
      } else {
        const L = target.label.length;
        // 根据label长度设置宽度
        return `${L * 1.2}em`;
      }
    },
  }
}
</script>
