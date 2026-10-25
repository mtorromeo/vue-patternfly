<template>
  <section v-bind="ouiaProps" :class="styles.dataListExpandableContent" :hidden="sectionHidden">
    <div
      :class="[
        styles.dataListExpandableContentBody,
        {
          [styles.modifiers.noPadding]: noPadding,
        },
      ]"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to remove padding from the expandable content */
  noPadding?: boolean;
  /** Flag to hide the content. Defaults to hidden unless the item is expandable and expanded. */
  hidden?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { computed, inject, type HTMLAttributes, type VNode } from 'vue';
import { DataListItemKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListContent',
});

const props = withDefaults(defineProps<Props>(), {
  hidden: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Expandable content of the item */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const datalistItem = inject(DataListItemKey);
const sectionHidden = computed(() =>
  props.hidden !== undefined ? props.hidden : !(datalistItem?.expandable.value && datalistItem.expanded.value),
);
</script>
