import { PfBreadcrumb, PfBreadcrumbItem } from '@vue-patternfly/core/src/components/Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: PfBreadcrumb,
  subcomponents: { PfBreadcrumbItem },
};

export const Breadcrumb = (args) => ({
  components: { PfBreadcrumb, PfBreadcrumbItem },
  setup() {
    return { args };
  },
  template: `
    <pf-breadcrumb v-bind="args">
      <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
    </pf-breadcrumb>
  `,
});
