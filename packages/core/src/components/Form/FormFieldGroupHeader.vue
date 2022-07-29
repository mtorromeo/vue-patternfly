<template>
  <div :class="styles.formFieldGroupHeader">
    <div :class="styles.formFieldGroupHeaderMain">
      <div v-if="title" :class="styles.formFieldGroupHeaderTitle">
        <div :class="styles.formFieldGroupHeaderTitleText">{{ title }}</div>
      </div>
      <div v-if="description" :class="styles.formFieldGroupHeaderDescription">{{ description }}</div>
    </div>
    <div v-if="$slots.default" :class="styles.formFieldGroupHeaderActions">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Form/form';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfFormFieldGroupHeader',

  props: {
    /** Header title */
    title: {
      type: String,
      default: '',
    },

    /** Header description */
    description: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
