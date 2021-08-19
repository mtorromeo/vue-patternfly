import {
  PfToolbar,
  PfToolbarContent,
  PfToolbarGroup,
  PfToolbarItem,
} from '@vue-patternfly/core/src/components/Toolbar';
import { PfInputGroup } from '@vue-patternfly/core/src/components/InputGroup';
import PfTextInput from '@vue-patternfly/core/src/components/TextInput.vue';
import PfButton from '@vue-patternfly/core/src/components/Button.vue';
import PfSearchIcon from '@vue-patternfly/icons/dist/esm/icons/search-icon';

export default {
  title: 'Components/Toolbar',
  component: PfToolbar,
  subcomponents: {
    PfToolbarContent,
    PfToolbarGroup,
    PfToolbarItem,
  },
  argTypes: {
    collapseListedFiltersBreakpoint: {
      control: {
        type: 'select',
      },
      options: ['', 'all', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
};

export const Simple = (args) => ({
  components: {
    PfToolbar,
    PfToolbarContent,
    PfToolbarGroup,
    PfToolbarItem,
    PfInputGroup,
    PfButton,
    PfTextInput,
    PfSearchIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <pf-toolbar v-bind="args">
      <pf-toolbar-content>
        <pf-toolbar-item>
          <pf-input-group>
            <pf-text-input type="search" aria-label="search input example" />
            <pf-button variant="control" aria-label="search button for search input">
              <pf-search-icon />
            </pf-button>
          </pf-input-group>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>

        <pf-toolbar-item variant="separator" />

        <pf-toolbar-item>
          <pf-button variant="primary">
            Action
          </pf-button>
        </pf-toolbar-item>
      </pf-toolbar-content>
    </pf-toolbar>
  `,
});

export const AdjustingToolbarInset = Simple.bind({});
AdjustingToolbarInset.args = {
  inset: 'none',
  'inset-md': 'sm',
  'inset-xl': '2xl',
  'inset-2xl': 'lg',
};

export const AdjustingItemSpacers = (args) => ({
  components: {
    PfToolbar,
    PfToolbarContent,
    PfToolbarGroup,
    PfToolbarItem,
    PfButton,
  },
  setup() {
    return { args };
  },
  template: `
    <pf-toolbar v-bind="args">
      <pf-toolbar-content>
        <pf-toolbar-item spacer="none">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="sm">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="md">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="lg">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-item spacer="none" spacer-md="sm" spacer-lg="md" spacer-xl="lg">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="primary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-group space-items="lg">
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>
      </pf-toolbar-content>
    </pf-toolbar>
  `,
});
