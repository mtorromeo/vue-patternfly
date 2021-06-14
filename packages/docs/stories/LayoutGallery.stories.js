import {PfGallery, PfGalleryItem} from "../../core/src/layouts/Gallery";
import {argTypesFromProps} from '../utils';

export default {
  title: "Layouts/Gallery",
  component: PfGallery,
  subcomponents: {PfGalleryItem},
  argTypes: argTypesFromProps(PfGallery.props),
};

const Template = (args) => ({
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

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
