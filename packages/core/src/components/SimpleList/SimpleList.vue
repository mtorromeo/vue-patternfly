<template>
  <div v-bind="ouiaProps" :class="styles.simpleList">
    <input v-if="name" type="hidden" :name="name" :value="typeof value === 'string' ? value : ''" :required="required">
    <component :is="fragment(renderList())" />
  </div>
</template>

<script lang="ts">
export const SimpleListValueKey = Symbol('SimpleListValueKey') as InjectionKey<WritableComputedRef<string | symbol | null>>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Form element name */
  name?: string,
  modelValue?: string | null;
  required?: boolean;
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { type Component, type InjectionKey, provide, type HTMLAttributes, ref, type Ref, computed, type WritableComputedRef, watch, h } from 'vue';
import { findChildrenVNodes, fragment } from '../../util';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';


defineOptions({
  name: 'PfSimpleList',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  /** Callback for when the model value changes */
  (e: 'update:modelValue', value: string): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

/** Value for the selected item */
const innerValue: Ref<string | symbol | null> = ref(props.modelValue ?? null);

const value = computed({
  get: () => innerValue.value,
  set: (v: string | symbol | null) => {
    innerValue.value = v;
    if (typeof v === 'string') {
      emit('update:modelValue', v);
    }
  },
});

watch(() => props.modelValue, (v) => {
  innerValue.value = v ?? null;
});

provide(SimpleListValueKey, value);

function renderList() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];
  if (typeof children[0]?.type === 'object' && (children[0].type as Component).name === 'PfSimpleListGroup') {
    return children;
  }
  return h('ul', { class: 'pf-v6-c-simple-list__list', role: 'list', 'aria-label': props.ariaLabel }, children);
}
</script>
