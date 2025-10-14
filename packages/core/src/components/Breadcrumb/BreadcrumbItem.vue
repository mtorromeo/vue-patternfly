<template>
  <li v-bind="{...ouiaProps, ...liAttrs}" :class="styles.breadcrumbItem">
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
import { computed, type Component, type LiHTMLAttributes, type AnchorHTMLAttributes } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfBreadcrumbItem',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'aria-current' | 'type'> {
  href?: string;
  to?: RouteLocationRaw;
  active?: boolean;
  dropdown?: boolean;
  showDivider?: boolean;
  component?: string | Component;
  liAttrs?: LiHTMLAttributes;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
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
