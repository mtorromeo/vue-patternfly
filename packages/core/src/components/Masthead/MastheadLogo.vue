<template>
  <component :is="component ?? (href ? 'a' : 'span')" v-bind="ouiaProps" :class="[styles.mastheadLogo, { [styles.modifiers.compact]: compact }]" :href="href" :tabindex="component === 'a' ? 0 : undefined">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from "@patternfly/react-styles/css/components/Masthead/masthead";
import type { AnchorHTMLAttributes, Component } from "vue";
import { useOUIAProps, type OUIAProps } from "../../helpers/ouia";

defineOptions({
  name: "PfMastheadLogo",
});

interface Props extends OUIAProps, /* @vue-ignore */ AnchorHTMLAttributes {
  component?: string | Component;
  href?: string;
  /** Flag indicating the logo is a compact variant. Used in docked layouts. */
  compact?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
