<template>
  <section v-bind="ouiaProps" :class="styles.navSection" :aria-labelledby="title ? id : undefined">
    <h2 v-if="title" :id="id" :class="styles.navSectionTitle">{{ title }}</h2>
    <ul :class="styles.navList" role="list">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-labelledby'> {
  /** Title shown for the group. Without one, the group needs an aria-label. */
  title?: string;
  /** Identifier of the title, labelling the group. Generated when not set. */
  id?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { useAttrs, useId, type HTMLAttributes, type VNode } from 'vue';

defineOptions({
  name: 'PfNavGroup',
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

if (!props.title && !useAttrs()['aria-label']) {
  console.warn("For accessibility reasons an aria-label should be specified on nav groups if a title isn't");
}
</script>
