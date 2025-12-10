<template>
  <pf-input-group-item v-bind="ouiaProps" box>
    <component :is="component" :class="[styles.inputGroupText, {
        [styles.modifiers.plain]: plain
      }]">
      <slot />
    </component>
  </pf-input-group-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroupItem from './InputGroupItem.vue';
import type { Component } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfInputGroupText',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfInputGroupItem>, 'box' | 'ouiaId' | 'ouiaSafe'> {
    /** Component that wraps the input group text. */
  component?: string | Component;
    /** Flag to indicate if the input group item is plain. */
  plain?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'span',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
