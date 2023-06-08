<template>
  <section
    :class="['pf-c-tab-content', {
      [styles.modifiers.light_300]: variant === 'light300',
    }]"
    role="tabpanel"
    :hidden="hidden || undefined"
    tabindex="0"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import { TabsProvideKey } from './Tabs.vue';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTabContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const hidden = ref(false);
const variant = inject(TabsProvideKey, undefined)?.variant;

defineExpose({
  hidden,
});
</script>
