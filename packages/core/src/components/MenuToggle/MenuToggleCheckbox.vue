<template>
  <label
    :class="[styles.check, $attrs.class, { [styles.modifiers.standalone]: !$slots.default }]"
    :style="$attrs.style"
  >
    <input
      v-bind="{ ...$attrs, ...ouiaProps, class: undefined, style: undefined }"
      :class="styles.checkInput"
      type="checkbox"
      :checked="Boolean(checked)"
      :indeterminate.prop="checked === null"
      :aria-invalid="invalid"
      @change="onChange"
    />
    <span v-if="$slots.default" :class="styles.checkLabel" aria-hidden="true">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
interface Props
  extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'checked' | 'autocomplete' | 'type' | 'onChange'> {
  /** Flag to show if the checkbox selection is invalid */
  invalid?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Check/check';
import type { InputHTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggleCheckbox',
  inheritAttrs: false,
});

const props = defineProps<Props>();

/** Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state */
const checked = defineModel<boolean | null>('checked', { default: false });

const emit = defineEmits<{
  (name: 'change', event: Event): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

function onChange(event: Event) {
  checked.value = (event.currentTarget as HTMLInputElement).checked;
  emit('change', event);
}
</script>
