<template>
  <section :class="styles.dataListExpandableContent" :hidden="sectionHidden">
    <div
      :class="[
        styles.dataListExpandableContentBody, {
          [styles.modifiers.noPadding]: noPadding,
        },
      ]"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { computed, inject } from "vue";
import { DataListItemKey } from './DataListItem.vue';

defineOptions({
  name: 'PfDataListContent',
});

const props = withDefaults(defineProps<{
  noPadding?: boolean;
  hidden?: boolean;
}>(), {
  hidden: undefined,
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const datalistItem = inject(DataListItemKey);
const sectionHidden = computed(() => props.hidden !== undefined ? props.hidden : !(datalistItem?.expandable.value && datalistItem.expanded.value));
</script>
