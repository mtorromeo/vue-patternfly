<template>
  <li v-bind="ouiaProps" class="pf-v6-c-simple-list__item">
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
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfSimpleListItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /**
   * Identifier fot the item. If the SimpleList has a name it will be used as the form field value.
   */
  value?: string;

  /** Component type of the SimpleList item */
  component?: 'button' | 'a';

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
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const instanceId = Symbol();
const listValue = inject(SimpleListValueKey, undefined);
const current = computed(() => listValue?.value === (props.value ?? instanceId));

function onClick(e: PointerEvent) {
  emit('click', e);
  if (listValue) {
    listValue.value = props.value ?? instanceId;
  }
}
</script>
