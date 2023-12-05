<template>
  <div>
    <h2>自定义尺寸、颜色</h2>
    <demo-block :codehtml="codehtml">
      <template #main>
        <rticon-distribute size="40" color="red" />
        <rticon-escalation size="50" color="green" />
        <rticon-fault size="60" color="#1e90ff" />
        <rticon-vue size="70" :color="['#1e90ff', 'red']" />
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codehtml: `
        <rticon-distribute size="40" color="red" />
        <rticon-escalation size="50" color="green" />
        <rticon-fault size="60" color="#1e90ff" />
        <rticon-vue size="70" :color="['#1e90ff', 'red']" />
        `,
    }
  },
}
</script>

<style scoped></style>