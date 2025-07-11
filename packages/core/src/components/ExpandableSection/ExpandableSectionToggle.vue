<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.truncate]: truncate,
    }]"
  >
    <div :class="`${styles.expandableSection}__toggle`">
      <pf-button
        variant="link"
        :inline="Boolean(truncate)"
        :aria-controls="contentId"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        <span
          v-if="!truncate"
          :class="[styles.expandableSectionToggleIcon, {
            [styles.modifiers.expandTop]: expanded && direction === 'up',
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
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfExpandableSectionToggle',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** ID of the content of the expandable section */
  contentId?: string;

  /** Direction the toggle arrow should point when the expandable section is expanded. */
  direction?: 'up' | 'down';

  /** Flag to determine toggle styling when the expandable content is truncated. */
  truncate?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'down',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag to indicate if the content is expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
