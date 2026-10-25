<template>
  <dt v-bind="ouiaProps" :class="styles.descriptionListTerm">
    <span v-if="$slots.icon" :class="styles.descriptionListTermIcon">
      <slot name="icon" />
    </span>
    <span :class="styles.descriptionListText">
      <slot />
    </span>
  </dt>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDescriptionListTerm',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon rendered before the term */
  icon?: (props?: Record<never, never>) => VNode[];
}>();
</script>
