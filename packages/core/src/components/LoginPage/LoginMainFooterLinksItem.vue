<template>
  <div :class="styles.loginMainFooterLinksItem">
    <component :is="linkComponent" v-bind="linkProps" :class="styles.loginMainFooterLinksItemLink" :href="href" :target="target">
      <slot />
    </component>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { Component, AnchorHTMLAttributes, HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfLoginMainFooterLinksItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** HREF for footer link item */
  href?: string;
  /** Target for footer link item */
  target?: string;
  /** Component used to render the footer link item */
  linkComponent?: string | Component;
  /** Props for the LinkComponent */
  linkProps?: Omit<AnchorHTMLAttributes, 'href' | 'target'>;
}

withDefaults(defineProps<Props>(), {
  linkComponent: 'a',
});
</script>
