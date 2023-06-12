<template>
  <label :class="styles.dropdownToggleCheck">
    <input
      v-bind="$attrs"
      ref="checkbox"
      type="checkbox"
      :aria-label="ariaLabel"
      :checked="checked"
      @change="$emit('change', ($event.currentTarget as HTMLInputElement).checked)"
    >
    <children />
  </label>
</template>

<script lang="ts" setup>
import { findChildrenVNodes } from '../../util';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { h, ref, watch, type Ref, onMounted, type InputHTMLAttributes, type VNode } from 'vue';
import { isDefined } from '@vueuse/shared';

defineOptions({
  name: 'PfDropdownToggleCheckbox',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  checked?: boolean;
  ariaLabel?: string,
}

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: 'Actions',
});

defineEmits<{
  (name: 'change', value: boolean): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const checkbox: Ref<HTMLInputElement | undefined> = ref();

watch(() => props.checked, () => {
  if (checkbox.value) {
    checkbox.value.indeterminate = !isDefined(props.checked);
  }
});

onMounted(() => {
  if (checkbox.value) {
    checkbox.value.indeterminate = !isDefined(props.checked);
  }
});

function children() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];

  let text = null;
  if (children.length) {
    text = h('span', {
      class: styles.dropdownToggleText,
      'aria-hidden': true,
    }, children);
  }
  return text;
}
</script>
