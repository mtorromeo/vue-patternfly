<template>
  <label v-bind="(ouiaProps as any)" :class="styles.check">
    <input
      v-bind="$attrs"
      :ref="(el) => setIndeterminateState(el)"
      :class="styles.checkInput"
      type="checkbox"
      :checked="Boolean(checked)"
    >
  </label>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Check/check';
import { type ComponentPublicInstance, type InputHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggleCheckbox',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'checked'> {
  /** Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state */
  checked?: boolean | null;
}

const props = defineProps<Props>();

defineSlots<Record<string, never>>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

function setIndeterminateState(el: Element | ComponentPublicInstance | null) {
  if (el instanceof HTMLInputElement) {
    el.indeterminate = props.checked === null;
  }
}
</script>
