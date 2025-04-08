<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.truncate]: truncate,
    }]"
  >
    <div :class="`${styles.expandableSection}__toggle`">
      <pf-button
        variant="link"
        :inline="Boolean(truncate)"
        :aria-controls="contentId"
        :aria-expanded="managedExpanded"
        @click="managedExpanded = !managedExpanded"
      >
        <span
          v-if="!truncate"
          :class="[styles.expandableSectionToggleIcon, {
            [styles.modifiers.expandTop]: managedExpanded && direction === 'up',
          }]"
        >
          <angle-right-icon aria-hidden />
        </span>
        <slot />
      </pf-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfButton from '../Button.vue';
import { useManagedProp } from '../../use';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfExpandableSectionToggle',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to indicate if the content is expanded */
  expanded?: boolean;

  /** ID of the content of the expandable section */
  contentId?: string;

  /** Direction the toggle arrow should point when the expandable section is expanded. */
  direction?: 'up' | 'down';

  /** Flag to determine toggle styling when the expandable content is truncated. */
  truncate?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'down',
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedExpanded = useManagedProp('expanded', false);
</script>
