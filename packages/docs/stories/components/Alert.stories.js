import { PfAlert, PfAlertActionLink } from "@vue-patternfly/core/src/components/Alert";

export default {
  title: "Components/Alert",
  component: PfAlert,
  subcomponents: { PfAlertActionLink },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "success", "danger", "warning", "info"],
      },
    },
  },
};

export const Default = ({ text, ...args }) => ({
  components: { PfAlert },
  setup() {
    return { args, text };
  },
  template: '<pf-alert v-bind="args">{{ text }}</pf-alert>',
});
Default.args = {
  title: "Alert title",
  text: "Alert text",
};

export const WithActionLinks = ({ text, ...args }) => ({
  components: { PfAlert, PfAlertActionLink },
  setup() {
    return { args, text };
  },
  template: `
    <pf-alert v-bind="args" @close="alert('Clicked the close button')">
      <template #action-links>
        <pf-alert-action-link @click="alert('Clicked on View details')">
          View details
        </pf-alert-action-link>
        <pf-alert-action-link @click="alert('Clicked on Ignore')">
          Ignore
        </pf-alert-action-link>
      </template>

      <p>{{ text }}</p>
    </pf-alert>
  `,
  methods: {
    alert,
  },
});
WithActionLinks.args = {
  title: "Alert title",
  text: "Alert text",
};
