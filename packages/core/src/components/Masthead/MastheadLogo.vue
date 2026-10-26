<template>
  <component :is="to ? 'router-link' : PassThrough" v-slot="routerCtx" :to="to" :replace="replace" custom>
    <component
      :is="effectiveComponent"
      v-bind="{ ...ouiaProps, ...$attrs }"
      :class="[styles.mastheadLogo, { [styles.modifiers.compact]: compact }]"
      :href="(routerCtx as RouterLinkContext | undefined)?.href ?? href"
      :tabindex="effectiveComponent === 'a' ? 0 : undefined"
      @click="(routerCtx as RouterLinkContext | undefined)?.navigate"
    >
      <slot />
    </component>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ AnchorHTMLAttributes {
  /** Component type of the masthead logo. Defaults to an anchor with href or to, a span otherwise. */
  component?: string | Component;
  /** Href of the logo link */
  href?: string;
  /** vue-router destination, rendering the logo as a router link */
  to?: RouteLocationRaw;
  /** Replaces the current navigation entry when navigating with to */
  replace?: boolean;
  /** @beta Flag indicating the logo is a compact variant. Used in docked layouts. */
  compact?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { computed, type AnchorHTMLAttributes, type Component, type UnwrapRef } from 'vue';
import type { useLink, RouteLocationRaw } from 'vue-router';
import PassThrough from '../../helpers/PassThrough.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

type RouterLinkContext = UnwrapRef<ReturnType<typeof useLink>>;

defineOptions({
  name: 'PfMastheadLogo',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const effectiveComponent = computed(
  () => props.component ?? (props.href !== undefined || props.to !== undefined ? 'a' : 'span'),
);
</script>
