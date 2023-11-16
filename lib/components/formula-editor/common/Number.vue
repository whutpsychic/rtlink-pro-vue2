<template>
  <div :class="curr ? 'rt-formula-item-can const current' : 'rt-formula-item-can const'" @click="$emit('select')">
    <div>
      <el-input-number :value="value" controls-position="right" @change="handleChange"></el-input-number>
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
    value: { type: Number, default: 0 },
    // 操作位置
    curr: { type: Boolean, default: false }
  },
  methods: {
    onDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    },
    handleChange(v) {
      this.$emit('change', v)
    },
  }
}
</script>
