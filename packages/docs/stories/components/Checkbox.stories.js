import PfCheckbox from '@vue-patternfly/core/src/components/Checkbox.vue';

export default {
  title: 'Components/Checkbox',
  component: PfCheckbox,
};

const Template = (args) => ({
  components: { PfCheckbox },
  setup() {
    return { args };
  },
  template: `<pf-checkbox v-bind="args" />`,
});

export const Basic = Template.bind({});
Basic.args = {
  id: 'basic-checkbox',
  label: 'Basic checkbox',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  id: 'checkbox-with-description',
  label: 'Checkbox with description',
  description: 'Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.',
};

export const WithDescriptionAndBody = Template.bind({});
WithDescriptionAndBody.args = {
  id: 'checkbox-with-description-and-body',
  label: 'Checkbox with description and body',
  description: 'Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.',
  body: 'This is where custom content goes.',
};
