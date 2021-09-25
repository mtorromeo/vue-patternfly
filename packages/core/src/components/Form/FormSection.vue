<template>
  <section :class="styles.formSection">
    <component :is="titleElement" v-if="title" :class="styles.formSectionTitle">
      {{ title }}
    </component>
    <slot />
  </section>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { markRaw } from 'vue';

export default {
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
      validator: v => ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(v),
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
};
</script>
