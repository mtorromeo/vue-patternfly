<template>
  <component
    v-bind="ouiaProps"
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
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfDivider',
});

export interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role'> {
  component?: 'hr' | 'li' | 'div';
  vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'hr',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
