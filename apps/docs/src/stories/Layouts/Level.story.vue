<template>
  <doc-page class="page__layouts" title="Level" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **level** layout is designed to distribute space evenly between sections of content and center them horizontally.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfLevel" />
      <component-info name="PfLevelItem" />
    </template>

    <story-canvas title="Level">
      <pf-level gutter>
        <pf-level-item>Level Item</pf-level-item>
        <pf-level-item>Level Item</pf-level-item>
        <pf-level-item>Level Item</pf-level-item>
      </pf-level>
    </story-canvas>
  </doc-page>
</template>
