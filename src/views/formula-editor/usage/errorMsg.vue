<template>
  <div>
    <h2>错误信息</h2>
    <demo-block :codehtml="codehtml" :code="code">
      <template #main>
        <rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" errmsg="这里是一些错误信息"></rt-formula-editor>
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "第一个选项", value: "option1" },
        { label: "第二个选项", value: "option2" },
        { label: "第三个选项", value: "option3" },
      ],
      codehtml: `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" errmsg="这里是一些错误信息"></rt-formula-editor>`,
      code:
        `export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "第一个选项", value: "option1" },
        { label: "第二个选项", value: "option2" },
        { label: "第三个选项", value: "option3" },
      ],
    }
  }
}`,
    }
  },
}
</script>

<style scoped></style>