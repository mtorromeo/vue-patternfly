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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDescriptionListTerm',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();
</script>
