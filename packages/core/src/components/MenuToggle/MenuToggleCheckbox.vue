<template>
  <label v-bind="ouiaProps" :class="[styles.check, { [styles.modifiers.standalone]: !$slots.default }]">
    <input
      v-bind="$attrs"
      :ref="(el) => el ? (el as HTMLInputElement).indeterminate = checked === null : undefined"
      :class="styles.checkInput"
      type="checkbox"
      :checked="Boolean(checked)"
    >
    <span v-if="$slots.default" :class="styles.checkLabel" aria-hidden="true">
      <slot />
    </span>
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
  /** Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state */
  checked?: boolean | null;
}

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
