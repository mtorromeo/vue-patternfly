<template>
    <component :is="component ?? (href ? 'a' : 'span')" v-bind="ouiaProps" :class="styles.mastheadLogo" :href="href">
      <slot />
    </component>
  </template>

  <script lang="ts" setup>
  import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
  import type { AnchorHTMLAttributes, Component } from 'vue';
  import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

  defineOptions({
    name: 'PfMastheadLogo',
  });

  interface Props extends OUIAProps, /* @vue-ignore */ AnchorHTMLAttributes {
    component?: string | Component;
    href?: string;
  }

  const props = defineProps<Props>();
  const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

  defineSlots<{
    default?: (props?: Record<never, never>) => any;
  }>();
  </script>
