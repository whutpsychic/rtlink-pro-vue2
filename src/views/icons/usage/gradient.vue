<template>
  <div>
    <h2>渐变色</h2>
    <demo-block height="160">
      <template #main>
        <rticon-add-item size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
        <rticon-escalation size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
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
        <rticon-add-item size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
        <rticon-escalation size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
        `,
    }
  },
}
</script>

<style scoped></style>