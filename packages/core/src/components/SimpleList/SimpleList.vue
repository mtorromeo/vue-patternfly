<template>
  <div :class="styles.simpleList" :role="grouped ? 'list' : undefined">
    <input v-if="name" type="hidden" :name="name" :value="value" :required="required">
    <wrap>
      <default-slot />

      <template v-if="!grouped" #with>
        <ul />
      </template>
    </wrap>
  </div>
</template>

<script lang="ts">
export const SimpleListValueKey = Symbol('SimpleListValueKey') as InjectionKey<WritableComputedRef<string | number | boolean | object | symbol | null>>;

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /**
   * value of the selected item
   * @model
   */
  modelValue?: string | number | boolean | object,

  /** Form element name */
  name?: string,
  required?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { type Component, type InjectionKey, provide, type WritableComputedRef, type HTMLAttributes, ref } from 'vue';
import { findChildrenVNodes } from '../../util';
import { useManagedProp } from '../../use';
import Wrap from '../../helpers/Wrap.vue';


defineOptions({
  name: 'PfSimpleList',
});

defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const value = useManagedProp('modelValue', null);
const grouped = ref(false);
provide(SimpleListValueKey, value);

function defaultSlot() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];
  grouped.value = children.length === 0 ? false : typeof children[0].type === 'object' && (children[0].type as Component).name === 'PfSimpleListGroup';
  return children;
}
</script>
