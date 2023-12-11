<template>
  <div v-bind="(ouiaProps as any)" :class="[styles.content, { [styles.modifiers.visited]: visited }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Content/content';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTextContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
    /** Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited */
  visited?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
