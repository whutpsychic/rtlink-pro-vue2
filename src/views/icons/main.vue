<template>
  <div class="page-content-container">
    <h1>Icon 图标</h1>
    <p>图标组件已经被内置在本库当中，可直接使用了。</p>
    <p>共有两种调用方法：1.命名式调用；2.组件式调用。您可以按照个人喜好使用。</p>
    <!-- 命名式 -->
    <Named />
    <div style="height:30px;" />
    <!-- 组件式 -->
    <Componented />
    <div style="height:30px;" />
    <!-- 自定义颜色、尺寸 -->
    <ColorSize />
    <div style="height:30px;" />
    <!-- 渐变色 -->
    <Gradient />
    <div style="height:30px;" />

    <h2>Attributes</h2>
    <el-table :data="attrTableData" style="width: 100%">
      <el-table-column prop="arg" label="参数" width="180">
      </el-table-column>
      <el-table-column prop="des" label="说明">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="150">
      </el-table-column>
      <el-table-column prop="options" label="可选值">
      </el-table-column>
      <el-table-column prop="default" label="默认值" width="100">
      </el-table-column>
    </el-table>

    <h2>图标集合</h2>
    <p>命名式 <el-switch v-model="usingNameMode" active-color="#13ce66" inactive-color="#ff4949" @change="onChangeMode">
      </el-switch></p>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="图标合集1" name="icons1">
        <IconTable />
      </el-tab-pane>
      <el-tab-pane label="图标合集2" name="icons2">
        <IconTable2 />
      </el-tab-pane>
      <el-tab-pane label="mobile" name="icons3">
        <IconTable3 />
      </el-tab-pane>
      <el-tab-pane label="logo合集" name="icons4">
        <IconTable4 />
      </el-tab-pane>
    </el-tabs>
    <div class="designer">
      <p>designed by</p>
      <img alt="lyy" :src="lyy" />
    </div>
  </div>
</template>

<script>
import Named from './usage/named.vue';
import Componented from './usage/componented.vue';
import ColorSize from './usage/colorSize.vue';
import Gradient from './usage/gradient.vue';

import IconTable from "./icon-table.vue"
import IconTable2 from "./icon-table2.vue"
import IconTable3 from "./icon-table3.vue"
import IconTable4 from "./icon-table4.vue"
import lyy from "@/assets/personIcon-lyy.jpg"

export default {
  components: { Named, Componented, ColorSize, Gradient, IconTable, IconTable2, IconTable3, IconTable4, lyy },
  data() {
    const usingNameMode = this.$store.state.usingIconNameMode;
    return {
      lyy,
      activeTab: 'icons1',
      usingNameMode,
      attrTableData: [
        {
          arg: 'size',
          des: '尺寸',
          type: 'Number/String',
          options: ' — ',
          default: '30'
        },
        {
          arg: 'color',
          des: '图标颜色',
          type: 'String',
          options: ' — ',
          default: '#000'
        },
        {
          arg: 'linear-gradient',
          des: '渐变色色值及变色位置信息 [ x1, y1, x2, y2 ]',
          type: 'String[]',
          options: ' — ',
          default: ' — '
        },
        {
          arg: 'gradient-position',
          des: '渐变色点位方向信息 [ ...[ position, color ] ]',
          type: 'Array[]',
          options: ' — ',
          default: ' — '
        }
      ],
    }
  },
  methods: {
    onChangeMode(mode) {
      this.$store.commit('changeIconMode', mode)
    }
  },
}

</script>

<style scoped>
p {
  font-size: 15px;
}

.designer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.designer img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>