<template>
  <section :class="styles.menuGroup">
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

defineOptions({
  name: 'PfMenuGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
  /** Group label heading level. Default is h1. */
  labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

withDefaults(defineProps<Props>(), {
  labelHeadingLevel: 'h1',
});
</script>
