<template>
  <div>
    <h2>命名式</h2>
    <demo-block height="160">
      <template #main>
        <rt-icon name="distribute" />
        <rt-icon name="not-handled" />
        <rt-icon name="task-distribution" />
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
        <rt-icon name="distribute" />
        <rt-icon name="not-handled" />
        <rt-icon name="task-distribution" />
        `,
    }
  },
}
</script>

<style scoped></style>