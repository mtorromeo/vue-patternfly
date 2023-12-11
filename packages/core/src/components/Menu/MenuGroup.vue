<template>
  <section v-bind="(ouiaProps as any)" :class="styles.menuGroup">
    <component :is="labelHeadingLevel" v-if="label || $slots.label" :class="styles.menuGroupTitle">
      <slot name="label">{{ label }}</slot>
    </component>
    <auto-wrap :component="PfMenuList" :include="PfMenuItem">
      <slot />
    </auto-wrap>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfMenuList from './MenuList.vue';
import PfMenuItem from './MenuItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
  /** Group label heading level. Default is h1. */
  labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<Props>(), {
  labelHeadingLevel: 'h1',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  label: (props?: Record<never, never>) => any;
}>();
</script>
