<template>
  <pf-input-group-item v-bind="ouiaProps" box>
    <component :is="component" :class="styles.inputGroupText">
      <slot />
    </component>
  </pf-input-group-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroupItem, { type Props as PfInputGroupItemProps } from './InputGroupItem.vue';
import type { Component } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfInputGroupText',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<PfInputGroupItemProps, 'box'> {
    /** Component that wraps the input group text. */
  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'span',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
