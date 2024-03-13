<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[styles.form, {
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.limitWidth]: widthLimited || maxWidth,
    }]"
    :style="{ [cssMaxWidth.name]: maxWidth }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import cssMaxWidth from '@patternfly/react-tokens/dist/esm/c_form_m_limit_width_MaxWidth';
import type { Component, FormHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { provideChildrenTracker } from '../../use';
import { FormInputsKey } from './common';

defineOptions({
  name: 'PfForm',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FormHTMLAttributes {
  component?: string | Component;
  /** Sets the Form to horizontal. */
  horizontal?: boolean;
  /** Limits the max-width of the form. */
  widthLimited?: boolean;
  /** Sets a custom max-width for the form. */
  maxWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'form',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const elements = provideChildrenTracker(FormInputsKey);

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

defineExpose({
  elements,
})
</script>
