<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :role="component !== 'hr' ? role : undefined"
    :class="[
      styles.divider,
      classesFromBreakpointProps($props, ['inset'], styles),
      classesFromBreakpointProps($props, ['orientation'], styles, { short: true }),
      {
        [styles.modifiers.vertical]: vertical,
      },
    ]"
  />
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    InsetBreakpointProps,
    OrientationBreakpointProps,
    /* @vue-ignore */ Omit<LiHTMLAttributes, 'role'> {
  /** The component type to use */
  component?: 'hr' | 'li' | 'div';
  /** Shorthand for a vertical orientation at every breakpoint. A vertical divider must be in a flex layout. */
  vertical?: boolean;
  /** The ARIA role of the divider when the component property has a value other than "hr". */
  role?: 'separator' | 'presentation' | 'none';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import type { LiHTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps, type OrientationBreakpointProps } from '../breakpoints';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfDivider',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'hr',
  role: 'separator',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>
