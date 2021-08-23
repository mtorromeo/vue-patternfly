import PfPopover from '@vue-patternfly/core/src/components/Popover.vue';
import PfButton from '@vue-patternfly/core/src/components/Button';

export default {
  title: 'Components/Popover',
  component: PfPopover,
};

export const Popover = (args) => ({
  components: { PfPopover, PfButton },
  setup() {
    return { args };
  },
  template: `
    <pf-popover v-bind="args" style="margin: 50px">
      <pf-button>Toggle popover</pf-button>

      <template #header>
        <div>Popover header</div>
      </template>

      <template #body>
        <div>Popovers are triggered by click rather than hover.</div>
      </template>

      <template #footer>
        Popover footer
      </template>
    </pf-popover>
  `,
});
