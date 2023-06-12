<template>
  <li :class="styles.simpleListSection">
    <component
      :is="component"
      v-bind="componentAttrs"
      :class="[styles.simpleListItemLink, componentClass, {
        [styles.modifiers.current]: current,
      }]"
      aria-hidden="true"
      :type="component === 'button' ? type : undefined"
      :href="component === 'a' ? href : undefined"
      :tabindex="component === 'a' ? 0 : undefined"
      @click="onClick"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { computed, inject } from 'vue';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, LiHTMLAttributes } from 'vue';
import { SimpleListValueKey } from './SimpleList.vue';

defineOptions({
  name: 'PfSimpleListItem',
});

export interface Props extends /* @vue-ignore */ LiHTMLAttributes {
  /**
   * Identifier fot the item. If the SimpleList has a name it will be used as the form field value.
   */
  value: string;

  /** Component type of the SimpleList item */
  component: 'button' | 'a';

  /** Additional classes added to the SimpleList <a> or <button> */
  componentClass?: string | string[] | Record<string, string>;

  /** Additional attrs added to the SimpleList <a> or <button> */
  componentAttrs?: ButtonHTMLAttributes | AnchorHTMLAttributes;

  /** Type of button SimpleList item */
  type?: 'button' | 'a';

  /** Default hyperlink location */
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'button',
  type: 'button',
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const instanceId = Symbol();
const listValue = inject(SimpleListValueKey, undefined);
const current = computed(() => listValue?.value === (props.value ?? instanceId));

function onClick(e: MouseEvent | TouchEvent) {
  emit('click', e);
  if (listValue) {
    listValue.value = props.value ?? instanceId;
  }
}
</script>
