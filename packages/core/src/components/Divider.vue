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
import { inject, type HTMLAttributes, type LiHTMLAttributes } from 'vue';
import { DividerComponentKey } from './Dropdown/Dropdown.vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../breakpoints';

defineOptions({
  name: 'PfDivider',
});

export interface Props extends InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes, /* @vue-ignore */ LiHTMLAttributes {
  component?: 'hr' | 'li' | 'div';
  vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'hr',
});

const injectedComponent = inject(DividerComponentKey, props.component);
</script>
