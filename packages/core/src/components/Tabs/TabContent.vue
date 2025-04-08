<template>
  <section
    v-bind="ouiaProps"
    :class="[styles.tabContent, {
      [styles.modifiers.secondary]: secondary,
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
import { TabsProvideKey } from './common';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTabContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role' | 'tabindex' | 'hidden'> {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const hidden = ref(false);
const secondary = inject(TabsProvideKey, undefined)?.secondary;

defineExpose({
  hidden,
});
</script>
