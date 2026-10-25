<template>
  <li v-bind="{ ...ouiaProps, ...(tag ? {} : $attrs), ...liAttrs }" :class="styles.breadcrumbItem">
    <span v-if="showDivider" :class="styles.breadcrumbItemDivider">
      <angle-right-icon />
    </span>
    <h1 :class="styles.breadcrumbHeading">
      <component
        :is="tag"
        v-if="tag"
        v-bind="$attrs"
        :to="to"
        :href="href"
        :class="[styles.breadcrumbLink, styles.modifiers.current]"
        :aria-current="to ? undefined : isButton ? 'true' : 'page'"
        :type="isButton ? 'button' : undefined"
      >
        <slot />
      </component>
      <slot v-else />
    </h1>
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'aria-current' | 'type'> {
  /** URL of a plain link. */
  href?: string;
  /** Route of a router-link. */
  to?: RouteLocationRaw;
  /** Internal prop set by pf-breadcrumb on all but the first crumb */
  showDivider?: boolean;
  /** Sets the base component to render, such as "button". */
  component?: string | Component;
  /** Attributes added to the list item. Other attributes go on the link, or on the list item without a link. */
  liAttrs?: LiHTMLAttributes;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import type { RouteLocationRaw } from 'vue-router';
import { computed, type Component, type LiHTMLAttributes, type AnchorHTMLAttributes, type VNode } from 'vue';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfBreadcrumbHeading',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Title of the current page */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isButton = computed(() => {
  if (typeof props.component === 'object') {
    return props.component.name === 'PfButton';
  }
  return props.component === 'button' || props.component === 'pf-button';
});

// the heading is the current page: a link, a button or plain text
const tag = computed(() => {
  if (props.component) {
    return props.component;
  }
  if (props.to) {
    return 'router-link';
  }
  if (props.href) {
    return 'a';
  }
  return undefined;
});
</script>
