<template>
  <div
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.banner, {
      [styles.modifiers.sticky]: sticky,
      [styles.modifiers[variant as 'blue' | 'red' | 'green' | 'gold']]: variant !== 'default',
    }]"
  >
    <span v-if="screenReaderText || $slots['screen-reader-text']" class="pf-v5-screen-reader">
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
import type { HTMLAttributes } from 'vue';

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
  /** Variant styles for the banner. */
  variant?: 'default' | 'blue' | 'red' | 'green' | 'gold';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  'screen-reader-text'?: (props?: Record<never, never>) => any;
}>();
</script>
