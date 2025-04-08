<template>
  <div v-bind="ouiaProps" :class="`${styles.emptyState}__header`">
    <auto-wrap v-if="$slots.icon" :component="PfEmptyStateIcon">
      <slot name="icon" />
    </auto-wrap>
    <div :class="`${styles.emptyState}__title`">
      <component :is="headingLevel" v-if="title" :class="styles.emptyStateTitleText">
        {{ title }}
      </component>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import PfEmptyStateIcon from './EmptyStateIcon.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfEmptyStateBody',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  title?: string;
  /** The heading level to use, default is h1 */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 'h1',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();
</script>
