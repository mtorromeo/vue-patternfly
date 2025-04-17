<template>
  <section v-bind="ouiaProps" :class="styles.formSection">
    <component :is="titleElement" v-if="title" :class="styles.formSectionTitle">{{ title }}</component>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormSection',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Title for the section */
  title?: string;

  /** Header description */
  titleElement?: string;
}

const props = withDefaults(defineProps<Props>(), {
  titleElement: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
