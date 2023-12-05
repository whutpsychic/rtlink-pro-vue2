<template>
  <div class="demo-block">
    <div class="demo-instance">
      <slot name="main"></slot>
    </div>
    <div class="collapse-btns">
      <el-button type="text" @click="showCodes = !showCodes">
        <span class="code-ecli">{{ showCodes ? '</>' : '<>' }}</span>
      </el-button>
    </div>
    <div v-if="codehtml" :class="'code-can'"
      :style="`height:${showCodes ? height1 : 0}px;${showCodes ? 'border-bottom:solid 1px #ddd;' : 'border-bottom:none'};`">
      <pre v-highlightjs>
          <code class="html">{{ codehtml }}</code>
        </pre>
    </div>
    <div v-if="code" :class="'code-can'"
      :style="`height:${showCodes ? height2 : 0}px;${showCodes ? 'border-bottom:solid 1px #ddd;' : 'border-bottom:none'};`">
      <pre v-highlightjs>
          <code class="javascript">{{ code }}</code>
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    codehtml: { type: String, default: '' },
    code: { type: String, default: '' },
  },
  data() {
    return {
      showCodes: false,
    }
  },
  computed: {
    height1() {
      const length = this.codehtml.split('\n').length
      return length * 16 + 50;
    },
    height2() {
      const length = this.code.split('\n').length
      return length * 16 + 50;
    },
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