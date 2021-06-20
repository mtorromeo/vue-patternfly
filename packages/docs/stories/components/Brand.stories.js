import PfBrand from '@vue-patternfly/core/src/components/Brand';

export default {
  title: 'Components/Brand',
  component: PfBrand,
};

export const Brand = ({ ...args }) => ({
  components: { PfBrand },
  setup() {
    return { args };
  },
  template: `<pf-brand v-bind="args" />`,
});
Brand.args = {
  src: 'https://www.patternfly.org/assets/images/pf_logo.svg',
  alt: 'Patternfly Logo',
};
