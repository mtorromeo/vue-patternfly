<template>
  <label v-bind="(ouiaProps as any)" :class="styles.check">
    <input
      v-bind="$attrs"
      :class="styles.checkInput"
      type="checkbox"
      :aria-invalid="!valid"
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

export interface Props extends OUIAProps, /* @vue-ignore */ InputHTMLAttributes {
  /** Flag to show if the checkbox selection is valid or invalid */
  valid?: boolean;
  /** Flag to set the default checked value of the checkbox when it is uncontrolled by React state.
   * To make the checkbox controlled instead use the isChecked prop, but do not use both.
   */
  defaultChecked?: boolean | null;
}

const props = defineProps<Props>();

defineSlots<Record<string, never>>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
