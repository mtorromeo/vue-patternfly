<template>
  <li
    v-bind="{ ...ouiaProps, ...(tag === PassThrough && !$slots.link ? $attrs : {}), ...liAttrs }"
    :class="styles.breadcrumbItem"
  >
    <span v-if="showDivider" :class="styles.breadcrumbItemDivider">
      <angle-right-icon />
    </span>
    <slot v-if="$slots.link" name="link" :class="linkClass" :aria-current="ariaCurrent" />
    <component
      :is="tag"
      v-else
      v-bind="$attrs"
      :to="to"
      :href="href"
      :aria-current="ariaCurrent"
      :class="dropdown ? styles.breadcrumbDropdown : tag !== PassThrough ? linkClass : undefined"
      :type="isButton ? 'button' : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'aria-current' | 'type'> {
  /** URL of a plain link. */
  href?: string;
  /** Route of a router-link. */
  to?: RouteLocationRaw;
  /** Flag indicating whether the item is active. */
  active?: boolean;
  /** Flag indicating whether the item contains a dropdown. */
  dropdown?: boolean;
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
import PassThrough from '../../helpers/PassThrough.vue';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfBreadcrumbItem',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content of the item */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom link replacing the rendered one, with the classes and aria-current it should apply */
  link?: (props: { class: string[]; ariaCurrent: 'page' | undefined }) => VNode[];
}>();

const linkClass = computed(() => [styles.breadcrumbLink, ...(props.active ? [styles.modifiers.current] : [])]);

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
