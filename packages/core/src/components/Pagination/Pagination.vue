<template>
  <div
    :class="[
      styles.pagination,
      {
        [styles.modifiers.bottom]: !top,
        [styles.modifiers.compact]: compact,
        [styles.modifiers.static]: $props.static,
        [styles.modifiers.sticky]: sticky,
      },
    ]"
  >
    <div v-if="top" :class="styles.paginationTotalItems">
      <b>{{ firstIndex }} - {{ lastIndex }}</b> of
      <b>{{ count }}</b>
      {{ titleItems }}
    </div>

    <pf-pagination-options-menu
      :items-per-page-title="titleItemsPerPage"
      :per-page-suffix="titlePerPageSuffix"
      :items-title="compact ? '' : titleItems"
      :options-toggle="titleOptionsToggle"
      :per-page-options="perPageOptions"
      :first-index="isDefined(itemsStart) ? count - itemsStart : firstIndex"
      :last-index="isDefined(itemsEnd) ? count - itemsEnd : lastIndex"
      :default-to-full-page="defaultToFullPage"
      :count="count"
      :drop-up="dropUp"
      :widget-id="widgetId"
      :disabled="disabled"
      :page="constrainedPage"
      :per-page="perPage"
      @update:page="emit('update:page', $event)"
      @update:per-page="emit('update:perPage', $event)"
    />
    <pf-navigation
      :pages-title="titlePage"
      :to-last-page="titleToLastPage"
      :to-previous-page="titleToPreviousPage"
      :to-next-page="titleToNextPage"
      :to-first-page="titleToFirstPage"
      :curr-page="titleCurrPage"
      :pagination-title="titlePaginationTitle"
      :page="count <= 0 ? 0 : constrainedPage"
      :per-page="perPage"
      :first-page="isDefined(itemsStart) ? count - itemsStart : 1"
      :last-page="lastPage"
      :disabled="disabled"
      :compact="compact"
      @set-page="emit('update:page', $event)"
      @first-click="emit('first-click', $event)"
      @previous-click="emit('previous-click', $event)"
      @next-click="emit('next-click', $event)"
      @last-click="emit('last-click', $event)"
    />

    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import PfPaginationOptionsMenu from './PaginationOptionsMenu.vue';
import PfNavigation from './Navigation.vue';
import { computed, type HTMLAttributes } from 'vue';
import { defaultPerPageOptions, type CommonPaginationProps } from './common';
import { isDefined } from '@vueuse/shared';

defineOptions({
  name: 'PfPagination',
});

export interface Props extends CommonPaginationProps, /* @vue-ignore */ HTMLAttributes {
  /** Render pagination on top instead of bottom. */
  top?: boolean;
  /** Flag indicating if pagination should not be sticky on mobile */
  static?: boolean;
  /** Flag indicating if pagination is compact */
  compact?: boolean;
  /** Flag indicating if pagination should stick to its position (based on variant) */
  sticky?: boolean;

  /** Total number of items. */
  count?: number;
  /** Page we start at. */
  firstPage?: number;
  /** Start index of rows to display, used in place of providing page */
  offset?: number;

  /** First index of items on current page. */
  itemsStart?: number;
  /** Last index of items on current page. */
  itemsEnd?: number;

  titleItems?: string;
  titlePage?: string;
  titleItemsPerPage?: string;
  titlePerPageSuffix?: string;
  titleToFirstPage?: string;
  titleToPreviousPage?: string;
  titleToLastPage?: string;
  titleToNextPage?: string;
  titleOptionsToggle?: string;
  titleCurrPage?: string;
  titlePaginationTitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  firstPage: 1,
  offset: 0,
  titleItemsPerPage: 'Items per page',
  titlePerPageSuffix: 'per page',
  titleToFirstPage: 'Go to first page',
  titleToPreviousPage: 'Go to previous page',
  titleToLastPage: 'Go to last page',
  titleToNextPage: 'Go to next page',
  titleOptionsToggle: 'Items per page',
  titleCurrPage: 'Current page',
  titlePaginationTitle: 'Pagination',
  page: 0,
  perPage: defaultPerPageOptions[0].value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'pagination-options-menu',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  (name: 'update:page', value: number): void;
  (name: 'update:perPage', value: number): void;
  (name: 'first-click', page: number): void;
  (name: 'previous-click', page: number): void;
  (name: 'next-click', page: number): void;
  (name: 'last-click', page: number): void;
}>();

const firstIndex = computed(() => {
  return props.count <= 0
    ? 0
    : (constrainedPage.value - 1) * props.perPage + 1;
});

const lastIndex = computed(() => {
  if (props.count <= 0) {
    return 0;
  }
  return constrainedPage.value === lastPage.value
    ? props.count
    : constrainedPage.value * props.perPage;
});

const lastPage = computed(() => {
  return Math.ceil(props.count / props.perPage) || 0;
});

const constrainedPage = computed(() => {
  let page = props.page;
  if (!page && props.offset) {
    page = Math.ceil(props.offset / props.perPage);
  }

  if (page < props.firstPage && props.count > 0) {
    return props.firstPage;
  }
  if (page > lastPage.value) {
    return lastPage.value;
  }

  return page;
});
</script>
