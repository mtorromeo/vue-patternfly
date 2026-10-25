<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.banner,
      {
        [styles.modifiers.sticky]: sticky,
        [styles.modifiers.pill]: pill,
        [styles.modifiers[variant as NonNullable<typeof variant>]]: variant,
      },
    ]"
  >
    <span v-if="screenReaderText || $slots['screen-reader-text']" class="pf-v6-screen-reader">
      <slot name="screen-reader-text">
        {{ screenReaderText }}
      </slot>
    </span>
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** If set to true, the banner sticks to the top of its container */
  sticky?: boolean;
  /** If set to true, the banner will have a pill shape */
  pill?: boolean;
  /** Text announced by screen readers to indicate the type of banner. This prop should only
   * be passed in when the banner conveys status/severity.
   */
  screenReaderText?: string;
  /** Color options for the banner, will be overwritten by any applied using the status prop. */
  color?: 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple';
  /** Status style options for the banner, will overwrite any color applied using the color prop. */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'custom';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import { computed, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBanner',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const variant = computed(() => props.status || props.color);

defineSlots<{
  /** Content rendered inside the banner. */
  default?: (props?: Record<never, never>) => VNode[];
  /** Text announced by screen readers, replacing screenReaderText */
  'screen-reader-text'?: (props?: Record<never, never>) => VNode[];
}>();
</script>
