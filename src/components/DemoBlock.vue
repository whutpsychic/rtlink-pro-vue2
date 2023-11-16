<template>
  <div class="demo-block">
    <div class="demo-instance">
      <slot name="main"></slot>
    </div>
    <div class="collapse-btns">
      <el-button type="text" @click="showCodes = !showCodes">
        <span class="code-ecli">{{ showCodes ? '</>' : '< >' }}</span>
      </el-button>
    </div>
    <div :class="'code-can'"
      :style="`height:${showCodes ? height : 0}px;${showCodes ? 'border-bottom:solid 1px #ddd;' : 'border-bottom:none'};`">
      <slot name="codes"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    height: { type: [Number, String], default: 0 }
  },
  data() {
    return {
      showCodes: false,
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$borderR: 12px;

.collapse-btns {
  display: flex;
  justify-content: flex-end;
  border: solid 1px #ddd;
  border-top: none;
  border-bottom: none;
  padding: 5px 10px;
}

.code-can {
  transition: .3s;
  overflow: hidden;
  border: solid 1px #ddd;
  border-bottom-left-radius: $borderR;
  border-bottom-right-radius: $borderR;
}

.demo-instance {
  padding: 20px;
  border: solid 1px #ddd;
  border-top-left-radius: $borderR;
  border-top-right-radius: $borderR;
}

.code-ecli {
  font-size: 17px;
  font-weight: bold;
}
</style>