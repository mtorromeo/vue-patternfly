<template>
  <doc-page class="page__layouts" title="Gallery" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **gallery** layout is used to arrange content in a responsive grid. Content will wrap responsively to create uniform rows and columns.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfGallery" />
      <component-info name="PfGalleryItem" />
    </template>

    <story-canvas title="Gallery">
      <pf-gallery gutter>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Responsive widths">
      <pf-gallery gutter min-width-sm="100px" max-width-2xl="390px">
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
      </pf-gallery>
    </story-canvas>
  </doc-page>
</template>
