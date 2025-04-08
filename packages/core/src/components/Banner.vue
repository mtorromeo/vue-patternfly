<template>
  <div
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.banner, {
      [styles.modifiers.sticky]: sticky,
      [styles.modifiers[variant as NonNullable<typeof variant>]]: variant,
    }]"
  >
    <span v-if="screenReaderText || $slots['screen-reader-text']" class="pf-v6-screen-reader">
      <slot name="screen-reader-text">
        {{ screenReaderText }}
      </slot>
    </span>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Banner/banner';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { computed, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBanner',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** If set to true, the banner sticks to the top of its container */
  sticky?: boolean;
  /** Text announced by screen readers to indicate the type of banner. This prop should only
   * be passed in when the banner conveys status/severity.
   */
  screenReaderText?: string;
  /** Color options for the banner, will be overwritten by any applied using the status prop. */
  color?: 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple';
  /** Status style options for the banner, will overwrite any color applied using the color prop. */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'custom';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const variant = computed(() => props.status || props.color);

defineSlots<{
  default: (props?: Record<never, never>) => any;
  'screen-reader-text'?: (props?: Record<never, never>) => any;
}>();
</script>
