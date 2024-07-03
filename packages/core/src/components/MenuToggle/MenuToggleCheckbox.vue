<template>
  <label v-bind="(ouiaProps as any)" :class="styles.check">
    <input
      v-bind="$attrs"
      :ref="(el) => (el as HTMLInputElement).indeterminate = checked === null"
      :class="styles.checkInput"
      type="checkbox"
      :aria-invalid="!valid"
      :checked="Boolean(checked)"
    >
  </label>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Check/check';
import { type InputHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggleCheckbox',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'checked'> {
  /** Flag to show if the checkbox selection is valid or invalid */
  valid?: boolean;

  /** Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state */
  checked?: boolean | null;
}

const props = defineProps<Props>();

defineSlots<Record<string, never>>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
