import {PfGallery, PfGalleryItem} from "../../core/src/layouts/Gallery";

export default {
  title: "Layouts/Gallery Item",
  component: PfGalleryItem,
  subcomponents: {PfGallery},
};

export const Default = (args) => ({
  components: { PfGallery, PfGalleryItem },
  setup() {
    return { args };
  },
  template: `
    <pf-gallery gutter>
      <pf-gallery-item v-bind="args">Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
    </pf-gallery>
  `,
});
