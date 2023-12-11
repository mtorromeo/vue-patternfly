<template>
  <section v-bind="(ouiaProps as any)" :class="styles.simpleListSection">
    <h2 :id="id" :class="[styles.simpleListTitle, titleClass]" aria-hidden>
      <slot name="title">{{ title }}</slot>
    </h2>
    <ul class="pf-v5-c-simple-list__list" :class="$attrs.class" role="list" :aria-labelledby="id">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfSimpleListGroup',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** ID of SimpleList group */
  id?: string;

  /** Title of the SimpleList group */
  title?: string,

  /** Additional classes added to the SimpleList group title */
  titleClass?: string | string[] | Record<string, string>;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  title?: (props?: Record<never, never>) => any;
}>();
</script>
