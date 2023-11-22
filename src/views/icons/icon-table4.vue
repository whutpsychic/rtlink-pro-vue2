<template>
  <div class="icon-table">

    <icon-block name="vue-logo" :usingNameMode="usingNameMode" des="Vue 彩色"><rticon-vue-logo /></icon-block>
    <icon-block name="vue" :usingNameMode="usingNameMode" des="Vue 自定义颜色"><rticon-vue /></icon-block>

    <!-- -------- -->
  </div>
</template>

<script>
import IconBlock from "@/components/IconBlock.vue"

export default {
  components: {
    IconBlock
  },
  computed: {
    usingNameMode() {
      return this.$store.state.usingIconNameMode
    },
  },
}

</script>


<style scoped>
.icon-table {
  width: 876px;
  border-top: solid 1px #eee;
  border-left: solid 1px #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;
}
</style>