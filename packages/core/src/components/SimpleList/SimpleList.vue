<template>
  <div v-bind="ouiaProps" :class="styles.simpleList">
    <input v-if="name" type="hidden" :name="name" :value="value" :required="required">
    <wrap>
      <default-slot />

      <template v-if="!grouped" #with>
        <ul class="pf-v6-c-simple-list__list" role="list" :aria-label="ariaLabel" />
      </template>
    </wrap>
  </div>
</template>

<script lang="ts">
export const SimpleListValueKey = Symbol('SimpleListValueKey') as InjectionKey<Ref<string | number | boolean | object | symbol | undefined | null>>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Form element name */
  name?: string,
  required?: boolean;
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { type Component, type InjectionKey, provide, type HTMLAttributes, ref, type Ref } from 'vue';
import { findChildrenVNodes } from '../../util';
import Wrap from '../../helpers/Wrap.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';


defineOptions({
  name: 'PfSimpleList',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Value for the selected item */
const value = defineModel<string | number | boolean | object | null>({ default: null });

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const grouped = ref(false);
provide(SimpleListValueKey, value);

function defaultSlot() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];
  grouped.value = children.length === 0 ? false : typeof children[0].type === 'object' && (children[0].type as Component).name === 'PfSimpleListGroup';
  return children;
}
</script>
