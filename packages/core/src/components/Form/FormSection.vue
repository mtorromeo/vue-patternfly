<template>
  <section :class="styles.formSection">
    <component :is="titleElement" v-if="title" :class="styles.formSectionTitle">{{ title }}</component>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFormSection',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Title for the section */
    title?: string;

    /** Header description */
    titleElement?: string;
}

withDefaults(defineProps<Props>(), {
  titleElement: 'div',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
