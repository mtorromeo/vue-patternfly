<template>
  <li v-bind="liAttrs" :class="styles.breadcrumbItem">
    <span v-if="showDivider" :class="styles.breadcrumbItemDivider">
      <pf-angle-right-icon />
    </span>
    <component
      :is="tag"
      v-bind="$attrs"
      :to="to"
      :href="href"
      :aria-current="ariaCurrent"
      :class="{
        [styles.breadcrumbDropdown]: dropdown,
      }"
      :type="isButton ? 'button' : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import type { RouteLocationRaw } from 'vue-router';
import { computed } from 'vue';
import PassThrough from '../../helpers/PassThrough';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import type { Component } from 'vue';

defineOptions({
  name: 'PfBreadcrumbItem',
  inheritAttrs: false,
});

const props = defineProps<{
  href?: string;
  to?: RouteLocationRaw;
  active?: boolean;
  dropdown?: boolean;
  showDivider?: boolean;
  component?: string | Component;
  liAttrs: HTMLLIElement['attributes'];
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const ariaCurrent = computed(() => {
  // router-link already handles the aria-current attribute
  return props.active && !props.to ? 'page' : undefined;
});

const isButton = computed(() => {
  if (typeof props.component === 'object') {
    return props.component.name === 'PfButton';
  }
  return props.component === 'button' || props.component === 'pf-button';
});

const tag = computed(() => {
  if (props.component) {
    return props.component;
  }
  if (props.dropdown) {
    return 'span';
  }
  if (props.to) {
    return 'router-link';
  }
  if (props.href) {
    return 'a';
  }
  return PassThrough;
});
</script>
