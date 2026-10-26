<template>
  <section v-bind="{ ...$attrs, ...ouiaProps, class: undefined }" :class="styles.simpleListSection">
    <h2 :id="id" :class="[styles.simpleListTitle, titleClass]" aria-hidden="true">
      <slot name="title">{{ title }}</slot>
    </h2>
    <ul class="pf-v6-c-simple-list__list" :class="$attrs.class" role="list" :aria-labelledby="id">
      <slot />
    </ul>
  </section>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** ID of the SimpleList group title, labelling its list. Generated when not set. */
  id?: string;
  /** Title of the SimpleList group */
  title?: string;
  /** Additional classes added to the SimpleList group title */
  titleClass?: HTMLAttributes['class'];
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { useId, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfSimpleListGroup',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Items of the group */
  default?: (props?: Record<never, never>) => VNode[];
  /** Title of the group, replacing the title prop */
  title?: (props?: Record<never, never>) => VNode[];
}>();
</script>
