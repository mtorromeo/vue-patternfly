<template>
  <section :class="styles.navSection" :aria-labelledby="id">
    <h2 :id="id" :class="styles.navSectionTitle">{{ title }}</h2>
    <ul :class="styles.navList">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';

import { getUniqueId } from '../../util';

defineOptions({
  name: 'PfNavGroup',
});

withDefaults(defineProps<{
  title: string;
  id?: string;
}>(), {
  id: () => getUniqueId(),
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
