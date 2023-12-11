<template>
  <component
    :is="component"
    role="separator"
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
import { type LiHTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../breakpoints';

defineOptions({
  name: 'PfDivider',
});

export interface Props extends InsetBreakpointProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role'> {
  component?: 'hr' | 'li' | 'div';
  vertical?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'hr',
});
</script>
