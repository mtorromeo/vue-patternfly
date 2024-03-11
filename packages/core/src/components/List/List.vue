<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :type="component === 'ol' ? type : undefined"
    :class="[styles.list, variant && styles.modifiers[variant], {
      [styles.modifiers.bordered]: bordered,
      [styles.modifiers.plain]: plain,
      [styles.modifiers.iconLg]: iconSize === 'large',
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds list variant styles */
  variant?: 'inline';
  /** Modifies the list to add borders between items */
  bordered?: boolean;
  /** Modifies the list to include plain styling */
  plain?: boolean;
  /** Modifies the size of the icons in the list */
  iconSize?: 'default' | 'large';
  /** Sets the way items are numbered if variant is set to ordered */
  type?: '1' | 'a' | 'A' | 'i' | 'I';
  component?: 'ol' | 'ul';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/List/list';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfList',
});

const props = withDefaults(defineProps<Props>(), {
  iconSize: 'default',
  type: '1',
  component: 'ul',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
