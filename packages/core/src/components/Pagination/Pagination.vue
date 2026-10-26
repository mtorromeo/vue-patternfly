<template>
  <div
    v-bind="ouiaProps"
    :id="widgetId ? `${widgetId}-${variant}-pagination` : undefined"
    :class="[
      styles.pagination,
      breakpointClasses,
      {
        [styles.modifiers.bottom]: variant === 'bottom',
        [styles.modifiers.pageInsets]: pageInsets,
        [styles.modifiers.static]: static,
        [styles.modifiers.sticky]: sticky && !stickyBase && !stickyStuck,
        [styles.modifiers.stickyBase]: stickyBase,
        [styles.modifiers.stickyStuck]: stickyStuck,
      },
    ]"
    :style="{ [widthChars.name]: String(lastPage).length >= 3 ? String(lastPage).length : 2 }"
  >
    <define-toggle-template v-slot="templateProps">
      <slot name="total" v-bind="templateProps">
        <b>{{ templateProps.firstIndex }} - {{ templateProps.lastIndex }}</b> {{ templateProps.ofWord }}
        <b>{{ templateProps.count }}</b>
        {{ templateProps.titleItems }}
      </slot>
    </define-toggle-template>

    <div v-if="variant === 'top' || $slots.total" :class="styles.paginationTotalItems">
      <toggle-template
        :first-index="firstIndex"
        :last-index="lastIndex"
        :count="count"
        :title-items="titleItems"
        :of-word="ofWord"
      />
    </div>

    <pf-pagination-options-menu
      v-if="perPageOptions?.length > 0"
      :items-per-page-title="titleItemsPerPage"
      :per-page-suffix="titlePerPageSuffix"
      :items-title="compact ? '' : titleItems"
      :options-toggle="titleOptionsToggle"
      :of-word="ofWord"
      :per-page-options="perPageOptions"
      :first-index="effectiveItemsStart ?? firstIndex"
      :last-index="effectiveItemsEnd ?? lastIndex"
      :last-full-page-shown="lastFullPageShown"
      :count="count"
      :drop-up="dropUp ?? (variant === 'bottom' && !static)"
      :append-to="menuAppendTo"
      :widget-id="widgetId ? `${widgetId}-${variant}` : undefined"
      :disabled="disabled"
      :page="constrainedPage"
      :per-page="perPage"
      @update:per-page="emit('update:perPage', $event)"
      @update:page="emit('update:page', $event)"
      @per-page-select="(...args) => emit('perPageSelect', ...args)"
    >
      <template #toggle="templateProps">
        <toggle-template v-bind="templateProps" />
      </template>
    </pf-pagination-options-menu>

    <pf-pagination-navigation
      :pages-title="titlePage"
      :pages-title-plural="titlePages"
      :to-last-page-aria-label="toLastPageAriaLabel"
      :to-previous-page-aria-label="toPreviousPageAriaLabel"
      :to-next-page-aria-label="toNextPageAriaLabel"
      :to-first-page-aria-label="toFirstPageAriaLabel"
      :curr-page-aria-label="currPageAriaLabel"
      :pagination-aria-label="paginationAriaLabel"
      :of-word="ofWord"
      :page="count !== undefined && count <= 0 ? 0 : constrainedPage"
      :per-page="perPage"
      :count="count"
      :first-page="effectiveItemsStart ?? 1"
      :last-page="lastPage"
      :disabled="disabled"
      :compact="compact"
      @set-page="onSetPage"
      @first-click="emit('firstClick', $event)"
      @previous-click="emit('previousClick', $event)"
      @next-click="emit('nextClick', $event)"
      @last-click="emit('lastClick', $event)"
      @page-input="emit('pageInput', $event)"
    />

    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, CommonPaginationProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Position where pagination is rendered. */
  variant?: 'top' | 'bottom';
  /** Flag indicating if pagination should not be sticky on mobile */
  static?: boolean;
  /** Flag indicating if pagination is compact */
  compact?: boolean;
  /** Flag indicating if pagination should stick to its position (based on variant). For dynamic sticky control, use stickyBase and stickyStuck instead. */
  sticky?: boolean;
  /** Flag indicating the pagination should have sticky positioning relative to its container. */
  stickyBase?: boolean;
  /** Flag indicating the pagination should have stuck styling, when it is not at the edge of the scroll container. */
  stickyStuck?: boolean;
  /** Flag indicating that pagination should use page insets. */
  pageInsets?: boolean;

  /** Total number of items. When undefined the total is unknown: the last page is the one after the current page. */
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
  /** The title of the pagination options menu. */
  titleItemsPerPage?: string;
  /** The suffix to be displayed after each option on the options menu dropdown. */
  titlePerPageSuffix?: string;
  /** Accessible label for the button which moves to the first page. */
  toFirstPageAriaLabel?: string;
  /** Accessible label for the button which moves to the previous page. */
  toPreviousPageAriaLabel?: string;
  /** Accessible label for the button which moves to the last page. */
  toLastPageAriaLabel?: string;
  /** Accessible label for the button which moves to the next page. */
  toNextPageAriaLabel?: string;
  /** Accessible label for the options toggle. */
  titleOptionsToggle?: string;
  /** Accessible label for the input displaying the current page. */
  currPageAriaLabel?: string;
  /** Accessible label for the pagination component. */
  paginationAriaLabel?: string;
  /** Label for the English word "of". */
  ofWord?: string;
  /** The container to append the options menu to */
  menuAppendTo?: 'inline' | string | RendererElement | null;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import widthChars from '@patternfly/react-tokens/dist/esm/c_pagination__nav_page_select_c_form_control_width_chars';
import PfPaginationOptionsMenu from './PaginationOptionsMenu.vue';
import PfPaginationNavigation from './PaginationNavigation.vue';
import { computed, type HTMLAttributes, type RendererElement, type VNode } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import { defaultPerPageOptions, type CommonPaginationProps, type PaginationToggleTemplateProps } from './common';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPagination',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'top',
  count: undefined,
  dropUp: undefined,
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
  ofWord: 'of',
  page: 1,
  perPage: defaultPerPageOptions[0]?.value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'options-menu',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe, variant: props.variant });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  /** Content of the total items and of the options menu toggle */
  total?: (props: PaginationToggleTemplateProps) => VNode[];
}>();

const emit = defineEmits<{
  (name: 'update:page', value: number): void;
  (name: 'update:perPage', value: number): void;
  /** The page was changed, with the per page value and the start and end indexes of its items */
  (name: 'setPage', page: number, perPage: number, startIdx: number, endIdx: number): void;
  /** A per page value was selected, with the resulting page and the start and end indexes of its items */
  (name: 'perPageSelect', perPage: number, page: number, startIdx: number, endIdx: number): void;
  (name: 'firstClick', page: number): void;
  (name: 'previousClick', page: number): void;
  (name: 'nextClick', page: number): void;
  (name: 'lastClick', page: number): void;
  /** A page number was entered in the page input */
  (name: 'pageInput', page: number): void;
}>();

const [DefineToggleTemplate, ToggleTemplate] = createReusableTemplate<PaginationToggleTemplateProps>();

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['inset'], styles));

const effectiveItemsStart = computed(() => {
  return isDefined(props.offset) ? props.offset + 1 : props.itemsStart;
});

const effectiveItemsEnd = computed(() => {
  return isDefined(props.offset) ? props.offset + props.perPage : props.itemsEnd;
});

// the requested page, before being constrained to the available pages
const requestedPage = computed(() => {
  if (isDefined(props.offset)) {
    return Math.max(Math.ceil((props.offset + 1) / props.perPage), 1);
  }
  return props.page;
});

// with an unknown total, the last page is the one after the current page
const lastPage = computed(() => {
  return props.count === undefined ? requestedPage.value + 1 : Math.ceil(props.count / props.perPage) || 0;
});

const constrainedPage = computed(() => {
  const page = requestedPage.value;
  if (props.count === undefined) {
    return page;
  }
  if (page < props.firstPage && props.count > 0) {
    return props.firstPage;
  }
  if (page > lastPage.value) {
    return lastPage.value;
  }
  return page;
});

const firstIndex = computed(() => {
  if (props.count !== undefined && props.count <= 0) {
    return 0;
  }
  // unlike upstream, the first index follows the page constrained to the available pages
  return (constrainedPage.value - 1) * props.perPage + 1;
});

const lastIndex = computed(() => {
  if (props.count === undefined) {
    return constrainedPage.value * props.perPage;
  }
  return constrainedPage.value === lastPage.value || props.count === 0
    ? props.count
    : constrainedPage.value * props.perPage;
});

function onSetPage(page: number, perPage: number, startIdx: number, endIdx: number) {
  emit('update:page', page);
  emit('setPage', page, perPage, startIdx, endIdx);
}
</script>
