<template>
  <div>
    <h2>组件式</h2>
    <demo-block :codehtml="codehtml">
      <template #main>
        <rticon-distribute />
        <rticon-not-handled />
        <rticon-task-distribution />
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codehtml: `
        <rticon-distribute />
        <rticon-not-handled />
        <rticon-task-distribution />
        `,
    }
  },
}
</script>

<style scoped></style>