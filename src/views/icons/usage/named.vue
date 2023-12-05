<template>
  <div>
    <h2>命名式</h2>
    <demo-block :codehtml="codehtml">
      <template #main>
        <rt-icon name="distribute" />
        <rt-icon name="not-handled" />
        <rt-icon name="task-distribution" />
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codehtml: `
        <rt-icon name="distribute" />
        <rt-icon name="not-handled" />
        <rt-icon name="task-distribution" />
        `,
    }
  },
}
</script>

<style scoped></style>