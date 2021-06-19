import { ref } from "vue";
import {
  PfOverflowMenu,
  PfOverflowMenuItem,
  PfOverflowMenuContent,
  PfOverflowMenuDropdownItem,
  PfOverflowMenuGroup,
  PfOverflowMenuControl,
} from "@vue-patternfly/core/src/components/OverflowMenu";
import {PfDropdown, PfKebabToggle} from '@vue-patternfly/core/src/components/Dropdown';
import PfButton from '@vue-patternfly/core/src/components/Button.vue';
import PfAlignLeftIcon from "../../../icons/dist/esm/icons/align-left-icon";
import PfAlignCenterIcon from "../../../icons/dist/esm/icons/align-center-icon";
import PfAlignRightIcon from "../../../icons/dist/esm/icons/align-right-icon";
import { argTypesFromProps } from "@/utils";

const argTypes = argTypesFromProps(PfOverflowMenu.props);

export default {
  title: "Components/Overflow Menu",
  component: PfOverflowMenu,
  subcomponents: {
    PfOverflowMenuItem,
    PfOverflowMenuContent,
    PfOverflowMenuDropdownItem,
    PfOverflowMenuGroup,
    PfOverflowMenuControl,
  },
  argTypes: {
    ...argTypes,
    breakpoint: {
      ...argTypes.breakpoint,
      control: {
        type: "select",
        options: ["md", "lg", "xl", "2xl"],
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="min-height: 350px"><story /></div>' }),
  ],
};

export const Default = (args) => ({
  components: {
    PfOverflowMenu,
    PfOverflowMenuItem,
    PfOverflowMenuContent,
    PfOverflowMenuDropdownItem,
    PfOverflowMenuGroup,
    PfOverflowMenuControl,
    PfDropdown,
    PfKebabToggle,
  },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `
    <pf-overflow-menu v-bind="args">
      <pf-overflow-menu-content>
        <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
        <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
        <pf-overflow-menu-group>
          <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
        </pf-overflow-menu-group>
      </pf-overflow-menu-content>
      <pf-overflow-menu-control>
        <pf-dropdown v-model:open="open" plain>
          <template #toggle>
            <pf-kebab-toggle />
          </template>
          <pf-overflow-menu-dropdown-item shared>Item 1</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item shared>Item 2</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item shared>Item 3</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item shared>Item 4</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item shared>Item 5</pf-overflow-menu-dropdown-item>
        </pf-dropdown>
      </pf-overflow-menu-control>
    </pf-overflow-menu>
  `,
});
Default.args = {
  breakpoint: "lg",
};

export const Persistent = (args) => ({
  components: {
    PfOverflowMenu,
    PfOverflowMenuItem,
    PfOverflowMenuContent,
    PfOverflowMenuDropdownItem,
    PfOverflowMenuGroup,
    PfOverflowMenuControl,
    PfDropdown,
    PfKebabToggle,
    PfButton,
    PfAlignLeftIcon,
    PfAlignCenterIcon,
    PfAlignRightIcon,
  },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `
    <pf-overflow-menu v-bind="args">
      <pf-overflow-menu-content persistent>
        <pf-overflow-menu-group type="button" persistent>
          <pf-overflow-menu-item persistent>
            <pf-button variant="primary">Primary</pf-button>
          </pf-overflow-menu-item>
          <pf-overflow-menu-item>
            <pf-button variant="secondary">Secondary</pf-button>
          </pf-overflow-menu-item>
          <pf-overflow-menu-item>
            <pf-button variant="tertiary">Tertiary</pf-button>
          </pf-overflow-menu-item>
        </pf-overflow-menu-group>
        <pf-overflow-menu-group type="icon" persistent>
          <pf-overflow-menu-item persistent>
            <pf-button variant="plain"><pf-align-left-icon /></pf-button>
          </pf-overflow-menu-item>
          <pf-overflow-menu-item persistent>
            <pf-button variant="plain"><pf-align-center-icon /></pf-button>
          </pf-overflow-menu-item>
          <pf-overflow-menu-item persistent>
            <pf-button variant="plain"><pf-align-right-icon /></pf-button>
          </pf-overflow-menu-item>
        </pf-overflow-menu-group>
      </pf-overflow-menu-content>
      <pf-overflow-menu-control additional-options>
        <pf-dropdown v-model:open="open" plain>
          <template #toggle>
            <pf-kebab-toggle />
          </template>
          <pf-overflow-menu-dropdown-item shared>Secondary</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item shared>Tertiary</pf-overflow-menu-dropdown-item>
          <pf-overflow-menu-dropdown-item>Action 4</pf-overflow-menu-dropdown-item>
        </pf-dropdown>
      </pf-overflow-menu-control>
    </pf-overflow-menu>
  `,
});
Persistent.args = {
  breakpoint: "lg",
};
