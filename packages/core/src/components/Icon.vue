<template>
  <span
    v-bind="ouiaProps"
    :class="[styles.icon, size && styles.modifiers[size], {
      [styles.modifiers.inline]: inline,
      [styles.modifiers.inProgress]: inProgress,
    }]"
  >
    <span
      :class="[styles.iconContent, iconSize && styles.modifiers[iconSize], status && styles.modifiers[status], {
        'pf-v6-m-mirror-inline-rtl': shouldMirrorRTL,
      }]"
    >
      <slot />
    </span>
    <span v-if="inProgress" :class="[styles.iconProgress, progressIconSize && styles.modifiers[progressIconSize]]">
      <slot name="progress-icon">
        <pf-spinner diameter="1em" :aria-label="defaultProgressArialabel" />
      </slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Icon/icon';
import type { HTMLAttributes } from 'vue';
import PfSpinner from './Spinner.vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfIcon',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Size of the icon component container and icon. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of icon. Overrides the icon size set by the size property. */
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Size of progress icon. Overrides the icon size set by the size property. */
  progressIconSize?: 'sm' | 'md' | 'lg' | 'xl';
  /** Status color of the icon */
  status?: 'custom' | 'info' | 'success' | 'warning' | 'danger';
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  inline?: boolean;
  /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
  inProgress?: boolean;
  /** Aria-label for the default progress icon */
  defaultProgressArialabel?: string;
  /** @beta Flag indicating whether the icon passed as children should be mirrored for
   * right to left (RTL) languages. This will not mirror the icon passed to progressIcon.
   */
  shouldMirrorRTL?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultProgressArialabel: 'Loading...',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'progress-icon'?: (props?: Record<never, never>) => any;
}>();
</script>
