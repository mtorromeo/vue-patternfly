<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="[styles.expandableSection, styles.modifiers.detached, {
      [styles.modifiers.expanded]: managedExpanded,
    }]"
  >
    <button
      :class="styles.expandableSectionToggle"
      type="button"
      :aria-expanded="managedExpanded"
      :aria-controls="contentId"
      @click="managedExpanded = !managedExpanded"
    >
      <span
        :class="[styles.expandableSectionToggleIcon, {
          [styles.modifiers.expandTop]: direction === 'up',
        }]"
      >
        <pf-angle-right-icon aria-hidden />
      </span>
      <span :class="styles.expandableSectionToggleText">
        <slot />
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
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
