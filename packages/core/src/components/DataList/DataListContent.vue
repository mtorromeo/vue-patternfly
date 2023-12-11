<template>
  <section v-bind="ouiaProps" :class="styles.dataListExpandableContent" :hidden="sectionHidden">
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
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  noPadding?: boolean;
  hidden?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hidden: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const datalistItem = inject(DataListItemKey);
const sectionHidden = computed(() => props.hidden !== undefined ? props.hidden : !(datalistItem?.expandable.value && datalistItem.expanded.value));
</script>
