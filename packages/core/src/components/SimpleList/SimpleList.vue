<template>
  <div v-bind="ouiaProps" :class="styles.simpleList">
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="typeof value === 'symbol' ? '' : (value ?? '')"
      :required="required"
    />
    <component :is="fragment(renderList())" />
  </div>
</template>

<script lang="ts">
export { SimpleListKey, type SimpleListProvide, type SimpleListValue } from './common';

interface Props<T extends SimpleListValue> extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  /** Form element name */
  name?: string;
  /** Value of the current item, bound with v-model. */
  modelValue?: T | null;
  /** Flag indicating the form field is required */
  required?: boolean;
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  ariaLabel?: string;
}
</script>

<script lang="ts" setup generic="T extends SimpleListValue = SimpleListValue">
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { type Component, provide, type HTMLAttributes, ref, computed, watch, h, type VNode } from 'vue';
import { findChildrenVNodes, fragment } from '../../util';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { SimpleListKey, type SimpleListValue } from './common';

defineOptions({
  name: 'PfSimpleList',
});

const props = defineProps<Props<T>>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Callback for when the model value changes */
  (e: 'update:modelValue', value: T): void;
  /** Callback when an item is selected, with the value of the item */
  (e: 'select', event: Event, value: SimpleListValue | undefined): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

/** Value for the selected item */
const innerValue = ref<SimpleListValue | symbol | null>(props.modelValue ?? null);

const value = computed({
  get: () => innerValue.value,
  set: (v: SimpleListValue | symbol | null) => {
    innerValue.value = v;
    if (typeof v === 'string' || typeof v === 'number') {
      emit('update:modelValue', v as T);
    }
  },
});

watch(
  () => props.modelValue,
  v => {
    innerValue.value = v ?? null;
  },
);

provide(SimpleListKey, {
  value,
  select: (event, itemValue) => emit('select', event, itemValue),
});

function renderList() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];
  if (typeof children[0]?.type === 'object' && (children[0].type as Component).name === 'PfSimpleListGroup') {
    return children;
  }
  return h('ul', { class: 'pf-v6-c-simple-list__list', role: 'list', 'aria-label': props.ariaLabel }, children);
}
</script>
