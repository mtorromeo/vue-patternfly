import {
  PfInputGroup,
  PfInputGroupText,
} from '@vue-patternfly/core/src/components/InputGroup';
import PfTextInput from '@vue-patternfly/core/src/components/TextInput.vue';
import PfAtIcon from '../../../icons/dist/esm/icons/at-icon';
import PfSearchIcon from '../../../icons/dist/esm/icons/search-icon';

export default {
  title: 'Components/Input Group',
  component: PfInputGroup,
  subcomponents: { PfInputGroupText, PfTextInput },
};

export const Default = (args) => ({
  components: { PfInputGroup, PfInputGroupText, PfTextInput },
  setup() {
    return { args };
  },
  template: `
    <pf-input-group v-bind="args">
      <pf-text-input type="email" />
      <pf-input-group-text>@example.com</pf-input-group-text>
    </pf-input-group>
  `,
});

export const WithPreIcon = (args) => ({
  components: { PfInputGroup, PfInputGroupText, PfTextInput, PfAtIcon },
  setup() {
    return { args };
  },
  template: `
    <pf-input-group v-bind="args">
      <pf-input-group-text>
        <pf-at-icon />
      </pf-input-group-text>
      <pf-text-input type="email" />
    </pf-input-group>
  `,
});

export const WithPostIcon = (args) => ({
  components: { PfInputGroup, PfInputGroupText, PfTextInput, PfSearchIcon },
  setup() {
    return { args };
  },
  template: `
    <pf-input-group v-bind="args">
      <pf-text-input type="search" />
      <pf-input-group-text>
        <pf-search-icon />
      </pf-input-group-text>
    </pf-input-group>
  `,
});
