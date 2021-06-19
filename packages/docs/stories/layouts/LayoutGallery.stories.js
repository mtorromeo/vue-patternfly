import {
  PfGallery,
  PfGalleryItem,
} from "@vue-patternfly/core/src/layouts/Gallery";

export default {
  title: "Layouts/Gallery",
  component: PfGallery,
  subcomponents: { PfGalleryItem },
};

export const Default = (args) => ({
  components: { PfGallery, PfGalleryItem },
  setup() {
    return { args };
  },
  template: `
    <pf-gallery v-bind="args">
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
    </pf-gallery>
  `,
});
Default.args = {
  gutter: true,
};
