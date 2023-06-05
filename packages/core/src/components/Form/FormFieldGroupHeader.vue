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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFormFieldGroupHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Header title */
  title?: string;

  /** Header description */
  description?: string;
}

defineProps<Props>();
</script>
