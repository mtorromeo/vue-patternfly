<template>
  <pf-input-group-item v-bind="ouiaProps" :class="$attrs.class" box :plain="plain" :disabled="disabled">
    <component :is="component" v-bind="textAttrs" :class="styles.inputGroupText">
      <slot />
    </component>
  </pf-input-group-item>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Component that wraps the input group text. */
  component?: string | Component;
  /** Flag to indicate if the input group item is plain. */
  plain?: boolean;
  /** Flag to indicate if the input group text is disabled. */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroupItem from './InputGroupItem.vue';
import { computed, useAttrs, type Component, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfInputGroupText',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'span',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const attrs = useAttrs();
const textAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
