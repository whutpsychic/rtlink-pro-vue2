<template>
  <div :class="curr ? 'rt-formula-item-can symbol-can current' : 'rt-formula-item-can symbol-can'" @click="$emit('select')">
    <p>{{ label }}</p>
    <div class="icon-can">
      <i class="el-icon-circle-close" @click="onDelete"></i>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    // 文字
    label: { type: String, default: '???' },
    // 值
    value: { type: String, default: '' },
    // 操作位置
    curr: { type: Boolean, default: false }
  },
  methods: {
    onDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    },
  }

}
</script>
