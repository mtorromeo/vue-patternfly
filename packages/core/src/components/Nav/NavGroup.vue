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
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNavGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  title: string;
  id?: string;
}

withDefaults(defineProps<Props>(), {
  id: () => getUniqueId(),
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
