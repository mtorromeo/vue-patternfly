import { PfExpandableSection, PfExpandableSectionToggle } from '@vue-patternfly/core/src/components/ExpandableSection';
import { PfStack, PfStackItem } from '@vue-patternfly/core/src/layouts/Stack';
import { ref } from 'vue';

export default {
  title: 'Components/Expandable Section',
  component: PfExpandableSection,
  subcomponents: { PfExpandableSectionToggle },
};

export const Basic = (args) => ({
  components: { PfExpandableSection },
  setup() {
    return { args };
  },
  template: `
    <pf-expandable-section v-bind="args">
      This content is visible only when the component is expanded.
    </pf-expandable-section>
  `,
});
Basic.args = {
  expanded: undefined,
  toggleTextExpanded: 'Show less',
  toggleTextCollapsed: 'Show more',
};

export const Detached = (args) => ({
  components: {
    PfExpandableSection,
    PfExpandableSectionToggle,
    PfStack,
    PfStackItem,
  },
  setup() {
    const expanded = ref(false);
    return { args, expanded };
  },
  template: `
    <pf-stack gutter>
      <pf-stack-item>
        <pf-expandable-section :expanded="expanded" detached content-id="detached-toggle-content">
          This content is visible only when the component is expanded.
        </pf-expandable-section>
      </pf-stack-item>
      <pf-stack-item>
        <pf-expandable-section-toggle v-model:expanded="expanded" direction="up" content-id="detached-toggle-content">
          <template v-if="expanded">Show less</template>
          <template v-else>Show more</template>
        </pf-expandable-section-toggle>
      </pf-stack-item>
    </pf-stack>
  `,
});
Basic.args = {
  expanded: undefined,
  toggleTextExpanded: 'Show less',
  toggleTextCollapsed: 'Show more',
};
