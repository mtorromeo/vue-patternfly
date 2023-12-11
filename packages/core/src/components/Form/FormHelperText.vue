<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[styles.formHelperText, {
      [styles.modifiers.error]: error,
      [styles.modifiers.hidden]: hidden,
    }]"
  >
    <span v-if="$slots.icon" :class="styles.formHelperTextIcon">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormHelperText',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds error styling to the Helper Text  * */
  error?: boolean;
  /** Hides the helper text * */
  hidden?: boolean;
  /** Component type of the form helper text */
  component?: 'p' | 'div';
}

const props = withDefaults(defineProps<Props>(), {
  component: 'p',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();
</script>
