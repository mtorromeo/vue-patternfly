<template>
  <doc-page title="Badge">
    <component-title name="pf-badge" />

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
.pf-v5-c-badge + .pf-v5-c-badge {
  margin-left: 0.2rem;
}
</style>
