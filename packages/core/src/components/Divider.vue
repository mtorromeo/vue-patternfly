<template>
  <component
    :is="injectedComponent"
    :role="injectedComponent == 'hr' ? undefined : 'separator'"
    :class="[
      styles.divider,
      classesFromBreakpointProps($props, ['inset'], styles),
      {
        [styles.modifiers.vertical]: vertical,
      },
    ]"
  />
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import { inject } from 'vue';
import { DividerComponentKey } from './Dropdown/Dropdown';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../breakpoints';

defineOptions({
  name: 'PfDivider',
});

const props = withDefaults(defineProps<{
  component?: 'hr' | 'li' | 'div';
  vertical?: boolean;
} & InsetBreakpointProps>(), {
  component: 'hr',
});

const injectedComponent = inject(DividerComponentKey, props.component);
</script>
