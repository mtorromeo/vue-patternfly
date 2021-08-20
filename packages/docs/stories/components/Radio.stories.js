import PfRadio from '@vue-patternfly/core/src/components/Radio.vue';

export default {
  title: 'Components/Radio',
  component: PfRadio,
};

const Template = (args) => ({
  components: { PfRadio },
  setup() {
    return { args };
  },
  template: `<pf-radio v-bind="args" />`,
});

export const Basic = Template.bind({});
Basic.args = {
  id: 'basic-radio',
  label: 'Basic radio',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  id: 'radio-with-description',
  label: 'Radio with description',
  description: 'Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.',
};

export const WithDescriptionAndBody = Template.bind({});
WithDescriptionAndBody.args = {
  id: 'radio-with-description-and-body',
  label: 'Radio with description and body',
  description: 'Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.',
  body: 'This is where custom content goes.',
};
