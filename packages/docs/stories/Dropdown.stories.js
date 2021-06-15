import { ref } from "vue";
import {
  PfDropdown,
  PfDropdownItem,
  PfDropdownGroup,
  PfDropdownSeparator,
  PfBadgeToggle,
  PfDropdownToggle,
  PfDropdownToggleCheckbox,
} from "../../core/src/components/Dropdown";
import PfAvatar from '../../core/src/components/Avatar.vue';
import PfAngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import PfBellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';
import PfCubesIcon from '@vue-patternfly/icons/dist/esm/icons/cubes-icon';
import { argTypesFromProps } from "../utils";

const argTypes = argTypesFromProps(PfDropdown.props);

export default {
  title: "Components/Dropdown",
  component: PfDropdown,
  subcomponents: { PfDropdownItem, PfDropdownGroup, PfDropdownSeparator },
  argTypes: {
    ...argTypes,
    autoFocusAction: {
      table: {
        disable: true,
      },
    },
    open: {
      ...argTypes.open,
      control: null,
    },
  },
  decorators: [
    () => ({ template: '<div style="min-height: 350px"><story /></div>' }),
  ],
};

const Template = ({ autoFocusAction, ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfDropdownSeparator,
  },
  setup() {
    const open = ref(false);
    return { args, open, autoFocusAction };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open">
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button" :auto-focus="autoFocusAction">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  text: "Dropdown",
  autoFocusAction: false,
};

export const WithInitialSelection = Template.bind({});
WithInitialSelection.args = {
  ...Basic.args,
  autoFocusAction: true,
};

export const WithGroups = ({ ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfDropdownGroup,
  },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open">
      <pf-dropdown-group>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
      </pf-dropdown-group>
      <pf-dropdown-group>
        <template #label>Group 2</template>
        <pf-dropdown-item>
          Group 2 Link
        </pf-dropdown-item>
        <pf-dropdown-item component="button">
          Group 2 Action
        </pf-dropdown-item>
      </pf-dropdown-group>
      <pf-dropdown-group>
        <template #label>Group 3</template>
        <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Group 3 Action Action
        </pf-dropdown-item>
      </pf-dropdown-group>
    </pf-dropdown>
  `,
});
WithGroups.args = {
  ...Basic.args,
};

export const WithBadge = ({ ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfAngleLeftIcon,
    PfBadgeToggle,
  },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open" plain>
      <template #toggle>
        <pf-badge-toggle aria-label="Applications">
          3
        </pf-badge-toggle>
      </template>
      <pf-dropdown-item component="button">
        <template #icon><pf-angle-left-icon /></template>
        Edit
      </pf-dropdown-item>
      <pf-dropdown-item component="button">
        <template #icon><pf-angle-left-icon /></template>
        Deployment
      </pf-dropdown-item>
      <pf-dropdown-item component="button">
        <template #icon><pf-angle-left-icon /></template>
        Applications
      </pf-dropdown-item>
    </pf-dropdown>
  `,
});
WithBadge.args = {
  ...Basic.args,
};

const SplitButtonTemplate = ({ splitButtonText, checked, ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfDropdownToggle,
    PfDropdownToggleCheckbox,
  },
  setup() {
    const open = ref(false);
    return { args, open, splitButtonText, checked };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open">
      <template #toggle>
        <pf-dropdown-toggle>
          <template #buttons>
            <pf-dropdown-toggle-checkbox v-model:checked="checked">
              <template v-if="splitButtonText">{{ splitButtonText }}</template>
            </pf-dropdown-toggle-checkbox>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>
  `,
});

export const SplitButton = SplitButtonTemplate.bind({});
SplitButton.args = {
  ...Basic.args,
  splitButtonText: "",
  checked: false,
};

export const SplitButtonWithText = SplitButtonTemplate.bind({});
SplitButtonWithText.args = {
  ...SplitButton.args,
  splitButtonText: "10 selected",
};

export const SplitButtonThirdState = SplitButtonTemplate.bind({});
SplitButtonThirdState.args = {
  ...SplitButtonWithText.args,
  checked: null,
};

export const WithDescriptions = ({ ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfCubesIcon,
    PfBellIcon,
  },
  setup() {
    const open = ref(false);
    return { args, open };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open">
      <pf-dropdown-item description="This is a description">
        <template #icon>
          <pf-cubes-icon />
        </template>
        Link
      </pf-dropdown-item>
      <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
        <template #icon>
          <pf-bell-icon />
        </template>
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled description="Disabled link description">
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button" description="This is a description">
        Disabled Action
      </pf-dropdown-item>
    </pf-dropdown>
  `,
});
WithDescriptions.args = {
  ...Basic.args,
};

import avatarImg from '../examples/avatar.svg';

export const WithImageAndText = ({ ...args }) => ({
  components: {
    PfDropdown,
    PfDropdownItem,
    PfDropdownSeparator,
    PfDropdownGroup,
    PfDropdownToggle,
    PfAvatar,
  },
  setup() {
    const open = ref(false);
    return { args, open, avatarImg };
  },
  template: `
    <pf-dropdown v-bind="args" v-model:open="open">
      <template #toggle>
        <pf-dropdown-toggle indicator>
          <template #icon>
            <pf-avatar :src="avatarImg" alt="avatar" />
          </template>
          Ned Username
        </pf-dropdown-toggle>
      </template>
      <pf-dropdown-group>
        <pf-dropdown-item component="div" plain-text>Text</pf-dropdown-item>
        <pf-dropdown-item component="div" plain-text>More text</pf-dropdown-item>
      </pf-dropdown-group>
      <pf-dropdown-separator />
      <pf-dropdown-group>
        <pf-dropdown-item>
          My profile
        </pf-dropdown-item>
        <pf-dropdown-item component="button">
          User management
        </pf-dropdown-item>
        <pf-dropdown-item>
          Logout
        </pf-dropdown-item>
      </pf-dropdown-group>
    </pf-dropdown>
  `,
});
WithGroups.args = {
  ...Basic.args,
};
