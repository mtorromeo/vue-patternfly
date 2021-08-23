import PfModal from '@vue-patternfly/core/src/components/Modal/Modal.vue';
import PfButton from '@vue-patternfly/core/src/components/Button';
import PfTooltip from '@vue-patternfly/core/src/components/Tooltip/Tooltip.vue';
import PfHelpIcon from '@vue-patternfly/icons/dist/esm/icons/help-icon';
import { ref } from 'vue';

export default {
  title: 'Components/Modal',
  component: PfModal,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'small', 'medium', 'large'] },
    titleIconVariant: { control: { type: 'select' }, options: [null, '', 'default', 'success', 'danger', 'warning', 'info'] },
    position: {
      control: { type: 'select' },
      options: ['default', 'top'],
    },
  },
};

export const Default = ({ sample_content, ...args }) => ({
  components: { PfModal, PfButton },
  setup() {
    const open = ref(false);
    return { args, open, sample_content };
  },
  template: `
    <pf-button @click="open = !open">Toggle Modal</pf-button>

    <pf-modal v-bind="args" v-model:open="open">
      {{ sample_content }}
    </pf-modal>
  `,
});
Default.args = {
  title: 'Simple modal header',
  sample_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum.`,
};

export const WithDescription = ({ sample_content, ...args }) => ({
  components: { PfModal, PfButton },
  setup() {
    const open = ref(false);
    return { args, open, sample_content };
  },
  template: `
    <pf-button @click="open = !open">Toggle Modal</pf-button>

    <pf-modal v-bind="args" v-model:open="open">
      {{ sample_content }}

      <template #description>
        A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.
      </template>

      <template #footer>
        <pf-button variant="primary" @click="open = !open">
          Confirm
        </pf-button>
        <pf-button variant="link" @click="open = !open">
          Cancel
        </pf-button>
      </template>
    </pf-modal>
  `,
});
WithDescription.args = {
  title: 'Simple modal header',
  sample_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum.`,
  variant: 'small',
};

export const WithHelp = ({ sample_content, ...args }) => ({
  components: { PfModal, PfButton, PfTooltip, PfHelpIcon },
  setup() {
    const open = ref(false);
    return { args, open, sample_content };
  },
  template: `
    <pf-button @click="open = !open">Toggle Modal</pf-button>

    <pf-modal v-bind="args" v-model:open="open">
      {{ sample_content }}

      <template #help>
        <pf-tooltip>
          <pf-button variant="plain" aria-help="help">
            <pf-help-icon />
          </pf-button>

          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
            turpis.
          </template>
        </pf-tooltip>
      </template>
    </pf-modal>
  `,
});
WithHelp.args = {
  title: 'Simple modal header',
  sample_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum.`,
};
