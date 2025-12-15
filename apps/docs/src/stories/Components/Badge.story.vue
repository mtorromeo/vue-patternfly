<template>
  <doc-page title="Badge">
    <template #description>A <b>badge</b> is used to annotate other information like a label or an object name.</template>

    <template #apidocs>
      <component-info name="PfBadge" />
    </template>

    <story-canvas title="Read">
      <pf-badge read>7</pf-badge>
      <pf-badge read>24</pf-badge>
      <pf-badge read>240</pf-badge>
      <pf-badge read>999+</pf-badge>
    </story-canvas>

    <story-canvas title="Unread">
      <pf-badge>7</pf-badge>
      <pf-badge>24</pf-badge>
      <pf-badge>240</pf-badge>
      <pf-badge>999+</pf-badge>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.pf-v6-c-badge + .pf-v6-c-badge {
  margin-left: 0.2rem;
}
</style>
