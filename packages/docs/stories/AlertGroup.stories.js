import {ref} from 'vue';
import {PfAlert, PfAlertGroup} from "../../core/src/components/Alert";
import PfButton from "../../core/src/components/Button.vue";
import {PfInputGroup} from "../../core/src/components/InputGroup";

export default {
  title: "Components/Alert Group",
  component: PfAlertGroup,
  subcomponents: {PfAlert},
};

export const Static = (args) => ({
  components: { PfAlert, PfAlertGroup },
  setup() {
    return { args };
  },
  template: `
    <pf-alert-group>
      <pf-alert title="Success Alert" variant="success" inline />
      <pf-alert title="Info Alert" variant="info" inline />
    </pf-alert-group>
  `,
});

export const Toast = (args) => ({
  components: { PfAlert, PfAlertGroup, PfInputGroup, PfButton },
  setup() {
    const alerts = ref([]);
    return { args, alerts };
  },
  template: `
    <pf-input-group style="margin-bottom: 16px">
      <pf-button
        variant="secondary"
        @click="alerts.push({
          title: 'Toast Success Alert',
          variant: 'success',
          key: getUniqueId(),
        })"
      >
        Add Toast Success Alert
      </pf-button>
      <pf-button
        variant="secondary"
        @click="alerts.push({
          title: 'Toast Info Alert',
          variant: 'info',
          key: getUniqueId(),
        })"
      >
        Add Toast Info Alert
      </pf-button>
      <pf-button
        variant="secondary"
        @click="alerts.push({
          title: 'Toast Danger Alert',
          variant: 'danger',
          key: getUniqueId(),
        })"
      >
        Add Toast Danger Alert
      </pf-button>
    </pf-input-group>

    <pf-alert-group toast>
      <pf-alert
        v-for="(a, index) of alerts"
        :key="a.key"
        :variant="a.variant"
        :title="a.title"
        live-region
        close
        @close="alerts.splice(index, 1)"
      />
    </pf-alert-group>
  `,

  methods: {
    getUniqueId: () => new Date().getTime(),
  },
});
