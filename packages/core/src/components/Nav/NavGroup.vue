<template>
  <section v-bind="ouiaProps" :class="styles.navSection" :aria-labelledby="id">
    <h2 :id="id" :class="styles.navSectionTitle">{{ title }}</h2>
    <ul :class="styles.navList">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { getUniqueId } from '../../util';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNavGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-labelledby'> {
  title: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => getUniqueId(),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
