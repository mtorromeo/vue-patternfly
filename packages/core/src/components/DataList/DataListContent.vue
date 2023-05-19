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
import { computed, inject, type HTMLAttributes } from "vue";
import { DataListItemKey } from './DataListItem.vue';

defineOptions({
  name: 'PfDataListContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  noPadding?: boolean;
  hidden?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hidden: undefined,
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const datalistItem = inject(DataListItemKey);
const sectionHidden = computed(() => props.hidden !== undefined ? props.hidden : !(datalistItem?.expandable.value && datalistItem.expanded.value));
</script>
