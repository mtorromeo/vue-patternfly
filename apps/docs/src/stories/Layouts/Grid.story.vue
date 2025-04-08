<template>
  <doc-page class="page__layouts" title="Grid" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **grid** layout places content on a fixed 12 column grid.
      </pre>
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/layouts/Grid/Grid.vue" />
      <component-info src="packages/core/src/layouts/Grid/GridItem.vue" />
    </template>

    <story-canvas title="Grid">
      <pf-grid gutter>
        <pf-grid-item span="8">span = 8</pf-grid-item>
        <pf-grid-item span="4" row-span="2">span = 4, rowSpan = 2</pf-grid-item>
        <pf-grid-item span="2" row-span="3">span = 2, rowSpan = 3</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
      </pf-grid>
    </story-canvas>
  </doc-page>
</template>
