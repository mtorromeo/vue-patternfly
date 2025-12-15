<template>
  <doc-page class="page__layouts" title="Split" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **split** layout positions items horizontally in a container, with one item filling the remaining horizontal space as the viewport is resized.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfSplit" />
      <component-info name="PfSplitItem" />
    </template>

    <story-canvas title="Basic">
      <pf-split>
        <pf-split-item>content</pf-split-item>
        <pf-split-item filled>pf-m-fill</pf-split-item>
        <pf-split-item>content</pf-split-item>
      </pf-split>
    </story-canvas>

    <story-canvas title="With gutter">
      <pf-split gutter>
        <pf-split-item>content</pf-split-item>
        <pf-split-item filled>pf-m-fill</pf-split-item>
        <pf-split-item>content</pf-split-item>
      </pf-split>
    </story-canvas>

    <story-canvas title="Wrappable">
      <pf-split gutter wrappable>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
        <pf-split-item>content</pf-split-item>
      </pf-split>
    </story-canvas>
  </doc-page>
</template>
