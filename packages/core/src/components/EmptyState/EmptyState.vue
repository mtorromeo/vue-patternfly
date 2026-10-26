<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.emptyState,
      variant !== 'full' && styles.modifiers[variant],
      status && styles.modifiers[status],
      { [styles.modifiers.fullHeight]: fullHeight },
    ]"
  >
    <div :class="styles.emptyStateContent">
      <pf-empty-state-header
        v-if="title || $slots.title || $slots.icon || status"
        :class="headerClass"
        :title="title"
        :title-class="titleClass"
        :heading-level="headingLevel"
      >
        <template v-if="$slots.icon || status" #icon>
          <slot name="icon">
            <component :is="statusIcons[status!]" />
          </slot>
        </template>
        <template v-if="$slots.title" #title>
          <slot name="title" />
        </template>
      </pf-empty-state-header>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import type { HTMLAttributes } from 'vue';
import PfEmptyStateHeader from './EmptyStateHeader.vue';
import { statusIcons } from '../../constants';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfEmptyState',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Cause component to consume the available height of its container */
  fullHeight?: boolean;

  /** Modifies empty state max-width and sizes of icon, title and body */
  variant?: 'xs' | 'sm' | 'lg' | 'xl' | 'full';

  /** Status of the empty state, will set a default status icon and color. Icon can be overwritten using the icon slot */
  status?: 'danger' | 'warning' | 'success' | 'info' | 'custom';

  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  title?: string;

  /** The heading level to use, default is h1 */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /** Additional classes added to the empty state header */
  headerClass?: HTMLAttributes['class'];

  /** Additional classes added to the title inside empty state header */
  titleClass?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'full',
  headingLevel: 'h1',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Empty state icon, wrapped in a pf-empty-state-icon. Can also be a pf-spinner */
  icon?: (props?: Record<never, never>) => any;
  /** Title content, wrapped in headingLevel. Overrides the title prop */
  title?: (props?: Record<never, never>) => any;
}>();
</script>
