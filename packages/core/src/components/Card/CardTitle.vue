<template>
  <div :class="styles.cardTitle">
    <component :id="titleId" v-bind="{...ouiaProps, ...$attrs}" :is="component" :class="styles.cardTitleText">
      <slot />
    </component>
    <div v-if="$slots.subtitle" :id="subtitleId" :class="styles.cardSubtitle">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import { computed, inject, type Component, type HTMLAttributes } from 'vue';
import { CardKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardTitle',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. */
  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  subtitle?: (props?: Record<never, never>) => any;
}>();

const card = inject(CardKey, undefined);
const titleId = computed(() => card?.cardId.value ? `${card.cardId.value}-title` : undefined);
const subtitleId = computed(() => card?.cardId.value ? `${card.cardId.value}-subtitle` : undefined);
</script>
