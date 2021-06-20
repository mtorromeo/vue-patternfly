<template>
  <div :class="[
    styles.pagination,
    {
      [styles.modifiers.bottom]: !top,
      [styles.modifiers.compact]: compact,
      [styles.modifiers.static]: $props.static,
      [styles.modifiers.sticky]: sticky,
    },
  ]">
    <div
      v-if="top"
      :class="styles.paginationTotalItems"
    >
      <b>{{ firstIndex }} - {{ lastIndex }}</b> of <b>{{ count }}</b>
      {{ itemsTitle }}
    </div>

    <pf-pagination-options-menu
      :items-per-page-title="titleItemsPerPage"
      :per-page-suffix="titlePerPageSuffix"
      :items-title="compact ? '' : titleItems"
      :options-toggle="titleOptionsToggle"
      :per-page-options="perPageOptions"
      :first-index="itemsStart != null ? items - start : firstIndex"
      :last-index="itemsEnd != null ? items - end : lastIndex"
      :default-to-full-page="defaultToFullPage"
      :count="count"
      :last-page="lastPage"
      :drop-up="dropUp"
      :widget-id="widgetId"
      :disabled="disabled"
      :page="constrainedPage"
      :per-page="perPage"
      @update:page="page = $event"
      @update:per-page="$emit('update:perPage', $event)"
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
      :first-page="itemsStart != null ? items - start : 1"
      :last-page="lastPage"
      :disabled="disabled"
      :compact="compact"
      @set-page="$emit('update:page', $event)"
      @first-click="$emit('first-click', $event)"
      @previous-click="$emit('previous-click', $event)"
      @next-click="$emit('next-click', $event)"
      @last-click="$emit('last-click', $event)"
    />

    <slot />
  </div>
</template>

<script>
import styles from "@patternfly/react-styles/css/components/Pagination/pagination";
import PfPaginationOptionsMenu from "./PaginationOptionsMenu.vue";
import PfNavigation from "./Navigation.vue";

import { paginationProps } from "./common";

export default {
  name: "PfPagination",

  components: { PfPaginationOptionsMenu, PfNavigation },

  props: {
    /** Render pagination on top instead of bottom. */
    top: Boolean,
    /** Flag indicating if pagination should not be sticky on mobile */
    static: Boolean,
    /** Flag indicating if pagination is compact */
    compact: Boolean,
    /** Flag indicating if pagination should stick to its position (based on variant) */
    sticky: Boolean,

    /** Total number of items. */
    count: {
      type: Number,
      default: 0,
    },
    /** Page we start at. */
    firstPage: {
      type: Number,
      default: 1,
    },
    /** Start index of rows to display, used in place of providing page */
    offset: {
      type: Number,
      default: 0,
    },

    /** First index of items on current page. */
    itemsStart: {
      type: Number,
      default: null,
    },
    /** Last index of items on current page. */
    itemsEnd: {
      type: Number,
      default: null,
    },

    ...paginationProps,

    titleItems: {
      type: String,
      default: "",
    },
    titlePage: {
      type: String,
      default: "",
    },
    titleItemsPerPage: {
      type: String,
      default: "Items per page",
    },
    titlePerPageSuffix: {
      type: String,
      default: "per page",
    },
    titleToFirstPage: {
      type: String,
      default: "Go to first page",
    },
    titleToPreviousPage: {
      type: String,
      default: "Go to previous page",
    },
    titleToLastPage: {
      type: String,
      default: "Go to last page",
    },
    titleToNextPage: {
      type: String,
      default: "Go to next page",
    },
    titleOptionsToggle: {
      type: String,
      default: "Items per page",
    },
    titleCurrPage: {
      type: String,
      default: "Current page",
    },
    titlePaginationTitle: {
      type: String,
      default: "Pagination",
    },
  },

  emits: [
    "update:page",
    "update:perPage",
    "first-click",
    "previous-click",
    "next-click",
    "last-click",
    "page-input",
  ],

  data() {
    return {
      styles,
    };
  },

  computed: {
    firstIndex() {
      return this.count <= 0
        ? 0
        : (this.constrainedPage - 1) * this.perPage + 1;
    },

    lastIndex() {
      if (this.count <= 0) {
        return 0;
      }
      return this.constrainedPage === this.lastPage
        ? this.count
        : this.constrainedPage * this.perPage;
    },

    lastPage() {
      return Math.ceil(this.count / this.perPage) || 0;
    },

    constrainedPage() {
      let page = this.page;
      if (!page && this.offset) {
        page = Math.ceil(this.offset / this.perPage);
      }

      if (page < this.firstPage && this.count > 0) {
        return this.firstPage;
      }
      if (page > this.lastPage) {
        return this.lastPage;
      }

      return page;
    },
  },
};
</script>
