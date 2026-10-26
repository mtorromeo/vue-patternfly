<template>
  <li v-bind="ouiaProps" class="pf-v6-c-simple-list__item">
    <component
      :is="component"
      v-bind="componentAttrs"
      :class="[
        styles.simpleListItemLink,
        componentClass,
        {
          [styles.modifiers.current]: current,
          [styles.modifiers.link]: component !== 'button',
        },
      ]"
      :type="component === 'button' ? type : undefined"
      :href="component === 'a' ? href : undefined"
      :tabindex="component === 'a' ? 0 : undefined"
      @click="onClick"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /** Identifier of the item, set as the value of the SimpleList when selected. It is the form field value when the SimpleList has a name. */
  value?: SimpleListValue;
  /** Component type of the SimpleList item */
  component?: 'button' | 'a';
  /** Additional classes added to the SimpleList <a> or <button> */
  componentClass?: HTMLAttributes['class'];
  /** Additional attrs added to the SimpleList <a> or <button> */
  componentAttrs?: ButtonHTMLAttributes | AnchorHTMLAttributes;
  /** Type of button SimpleList item */
  type?: 'button' | 'submit' | 'reset';
  /** Default hyperlink location */
  href?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import {
  computed,
  inject,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type LiHTMLAttributes,
  type VNode,
} from 'vue';
import { SimpleListKey, type SimpleListValue } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfSimpleListItem',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'button',
  type: 'button',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', e: MouseEvent): void;
}>();

defineSlots<{
  /** Content of the item */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const instanceId = Symbol();
const list = inject(SimpleListKey, undefined);
const current = computed(() => list?.value.value === (props.value ?? instanceId));

function onClick(e: MouseEvent) {
  emit('click', e);
  if (list) {
    list.value.value = props.value ?? instanceId;
    list.select(e, props.value);
  }
}
</script>
