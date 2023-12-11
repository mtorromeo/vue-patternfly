<template>
  <div
    v-bind="ouiaProps"
    :id="`${widgetId}-${variant}-pagination`"
    :class="[
      styles.pagination,
      breakpointClasses,
      {
        [styles.modifiers.bottom]: variant === 'bottom',
        [styles.modifiers.compact]: compact,
        [styles.modifiers.static]: static,
        [styles.modifiers.sticky]: sticky,
      },
    ]"
  >
    <div v-if="variant === 'top'" :class="styles.paginationTotalItems">
      <b>{{ firstIndex }} - {{ lastIndex }}</b> of
      <b>{{ count }}</b>
      {{ titleItems }}
    </div>

    <pf-pagination-options-menu
      v-if="perPageOptions?.length > 0"
      :items-per-page-title="titleItemsPerPage"
      :per-page-suffix="titlePerPageSuffix"
      :items-title="compact ? '' : titleItems"
      :options-toggle="titleOptionsToggle"
      :per-page-options="perPageOptions"
      :first-index="effectiveItemsStart ?? firstIndex"
      :last-index="effectiveItemsEnd ?? lastIndex"
      :last-full-page-shown="lastFullPageShown"
      :count="count"
      :drop-up="dropUp"
      :widget-id="`${widgetId}-${variant}`"
      :disabled="disabled"
      :page="constrainedPage"
      :per-page="perPage"
      @update:page="emit('update:page', $event)"
      @update:per-page="emit('update:perPage', $event)"
    />
    <pf-navigation
      :pages-title="titlePage"
      :pages-title-plural="titlePages"
      :to-last-page-aria-label="toLastPageAriaLabel"
      :to-previous-page-aria-label="toPreviousPageAriaLabel"
      :to-next-page-aria-label="toNextPageAriaLabel"
      :to-first-page-aria-label="toFirstPageAriaLabel"
      :curr-page-aria-label="currPageAriaLabel"
      :pagination-aria-label="paginationAriaLabel"
      :page="count <= 0 ? 0 : constrainedPage"
      :per-page="perPage"
      :first-page="effectiveItemsStart ?? 1"
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
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPagination',
});

export interface Props extends OUIAProps, CommonPaginationProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Position where pagination is rendered. */
  variant?: 'top' | 'bottom';
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

  /** The type or title of the items being paginated. */
  titleItems?: string;
  /** The title of a page displayed beside the page number. */
  titlePage?: string;
  /** The title of a page displayed beside the page number (plural form) */
  titlePages?: string;
  titleItemsPerPage?: string;
  titlePerPageSuffix?: string;
  toFirstPageAriaLabel?: string;
  toPreviousPageAriaLabel?: string;
  toLastPageAriaLabel?: string;
  toNextPageAriaLabel?: string;
  titleOptionsToggle?: string;
  currPageAriaLabel?: string;
  paginationAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  firstPage: 1,
  titleItemsPerPage: 'Items per page',
  titlePerPageSuffix: 'per page',
  toFirstPageAriaLabel: 'Go to first page',
  toPreviousPageAriaLabel: 'Go to previous page',
  toLastPageAriaLabel: 'Go to last page',
  toNextPageAriaLabel: 'Go to next page',
  titleOptionsToggle: '',
  currPageAriaLabel: 'Current page',
  paginationAriaLabel: 'Pagination',
  page: 1,
  perPage: defaultPerPageOptions[0].value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'options-menu',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

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

const breakpointClasses = classesFromBreakpointProps(props, ['inset'], styles);

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

const effectiveItemsStart = computed(() => {
  return isDefined(props.offset)
    ? props.offset + 1
    : props.itemsStart;
});

const effectiveItemsEnd = computed(() => {
  return isDefined(props.offset)
    ? props.offset + props.perPage
    : props.itemsEnd;
});

const constrainedPage = computed(() => {
  let page = props.page;
  if (isDefined(props.offset)) {
    page = Math.max(Math.ceil((effectiveItemsStart.value ?? 1) / props.perPage), 1);
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
