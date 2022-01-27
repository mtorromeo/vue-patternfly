<template>
  <section :class="styles.formSection">
    <component :is="titleElement" v-if="title" :class="styles.formSectionTitle">{{ title }}</component>
    <slot />
  </section>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Form/form';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfFormSection',

  props: {
    /** Title for the section */
    title: {
      type: String,
      default: '',
    },

    /** Header description */
    titleElement: {
      type: String,
      default: 'div',
      validator: (v: any) => ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(v),
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
