<template>
  <doc-page title="Badge">
    <template #description
      >A <b>badge</b> is used to annotate other information like a label or an object name.</template
    >

    <template #apidocs>
      <component-info name="PfBadge" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `screen-reader-text` slot can replace the `screen-reader-text` prop.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Read">
      <pf-badge read>7</pf-badge>
      <pf-badge read>24</pf-badge>
      <pf-badge read>240</pf-badge>
      <pf-badge read>999+</pf-badge>
    </story-canvas>

    <story-canvas title="Unread">
      <pf-badge screen-reader-text="Unread Messages">7</pf-badge>
      <pf-badge screen-reader-text="Unread Messages">24</pf-badge>
      <pf-badge screen-reader-text="Unread Messages">240</pf-badge>
      <pf-badge screen-reader-text="Unread Messages">999+</pf-badge>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-badge disabled read>7</pf-badge>
      <pf-badge disabled read>24</pf-badge>
      <pf-badge disabled>240</pf-badge>
      <pf-badge disabled>999+</pf-badge>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.pf-v6-c-badge {
  margin-inline-end: var(--pf-t--global--spacer--xs);
  margin-block-end: var(--pf-t--global--spacer--xs);
}
</style>
