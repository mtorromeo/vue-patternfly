<template>
  <doc-page class="page__layouts" title="Split" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **split** layout positions items horizontally in a container, with one item filling the remaining horizontal space as the viewport is resized.
      </pre>
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/layouts/Split/Split.vue" />
      <component-info src="packages/core/src/layouts/Split/SplitItem.vue" />
    </template>

    <story-canvas title="Split">
      <pf-split gutter>
        <pf-split-item>content</pf-split-item>
        <pf-split-item filled>pf-m-fill</pf-split-item>
        <pf-split-item>content</pf-split-item>
      </pf-split>
    </story-canvas>
  </doc-page>
</template>
