<template>
  <div>
    <h2>组件式</h2>
    <demo-block height="160">
      <template #main>
        <rticon-distribute />
        <rticon-not-handled />
        <rticon-task-distribution />
      </template>
      <template #codes>
        <pre v-highlightjs>
          <code class="html">{{ codehtml }}</code>
        </pre>
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