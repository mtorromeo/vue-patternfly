<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="styles.helperText"
    :role="component === 'ul' ? 'list' : undefined"
    :aria-live="liveRegion ? 'polite' : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export { HelperTextComponentKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Component type of the helper text container */
  component?: 'div' | 'ul';
  /** Flag for indicating whether the helper text container is a live region. Use this prop when you
   * expect or intend for any helper text items within the container to be dynamically updated.
   */
  liveRegion?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { type HTMLAttributes, computed, provide } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { HelperTextComponentKey } from './common';

defineOptions({
  name: 'PfHelperText',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(
  HelperTextComponentKey,
  computed(() => props.component),
);
</script>
