<template>
  <component
    v-bind="ouiaProps"
    :is="to ? 'router-link' : PassThrough"
    v-slot="routerCtx"
    :to="to"
    :replace="replace"
    custom
  >
    <component
      :is="component"
      :class="styles.mastheadBrand"
      :tabindex="component === 'a' ? 0 : undefined"
      :href="(routerCtx as RouterLinkContext|undefined)?.href ?? href"
      @click="(routerCtx as RouterLinkContext|undefined)?.navigate"
    >
      <slot />
    </component>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import PassThrough from '../../helpers/PassThrough.vue';
import type { AnchorHTMLAttributes, UnwrapRef } from 'vue';
import type { useLink, RouteLocationRaw } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

type RouterLinkContext = UnwrapRef<ReturnType<typeof useLink>>;

defineOptions({
  name: 'PfMastheadBrand',
});

export interface Props extends OUIAProps, /* @vue-ignore */ AnchorHTMLAttributes {
  component?: string;
  href?: string;
  to?: RouteLocationRaw;
  replace?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const component = props.component ?? ((props.href ?? props.to) === undefined ? 'span' : 'a');
</script>
