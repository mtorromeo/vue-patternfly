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

<script lang="ts">
import { defineComponent, inject, markRaw, ref, type Ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import { TabsProvideKey } from './Tabs.vue';

export default defineComponent({
  name: 'PfTabContent',

  setup() {
    return {
      teleportTo: ref() as Ref<HTMLElement | undefined>,
      hidden: ref(false),
      styles: markRaw(styles) as typeof styles,
      variant: inject(TabsProvideKey, undefined)?.variant,
    };
  },
});
</script>
