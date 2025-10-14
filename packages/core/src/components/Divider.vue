<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :role="component !== 'hr' ? 'separator' : undefined"
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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import { type LiHTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps, type OrientationBreakpointProps } from '../breakpoints';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfDivider',
});

interface Props extends OUIAProps, InsetBreakpointProps, OrientationBreakpointProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role'> {
  component?: 'hr' | 'li' | 'div';
  vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'hr',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
