<template>
  <div v-bind="(ouiaProps as any)" :class="styles.loginMainFooterLinksItem">
    <component :is="linkComponent" v-bind="linkProps" :class="styles.loginMainFooterLinksItemLink" :href="href" :target="target">
      <slot />
    </component>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { Component, AnchorHTMLAttributes, HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfLoginMainFooterLinksItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** HREF for footer link item */
  href?: string;
  /** Target for footer link item */
  target?: string;
  /** Component used to render the footer link item */
  linkComponent?: string | Component;
  /** Props for the LinkComponent */
  linkProps?: Omit<AnchorHTMLAttributes, 'href' | 'target'>;
}

const props = withDefaults(defineProps<Props>(), {
  linkComponent: 'a',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
