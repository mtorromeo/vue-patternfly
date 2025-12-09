<template>
  <div v-if="expanded" v-bind="ouiaProps" :class="styles.cardExpandableContent">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardExpandedKey } from './Card.vue';
import { type HTMLAttributes, inject } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardExpandableContent',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
    /** Flag indicating that the actions have no offset. */
  noOffset?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const expanded = inject(CardExpandedKey);
</script>
