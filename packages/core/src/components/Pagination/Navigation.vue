<template>
  <nav :class="styles.paginationNav" :aria-label="paginationTitle">
    <div v-if="!compact" :class="[styles.paginationNavControl, styles.modifiers.first]">
      <pf-button
        variant="plain"
        :disabled="disabled || page === firstPage || page === 0"
        :aria-label="toFirstPage"
        data-action="first"
        @click="goToFirstPage"
      >
        <angle-double-left-icon />
      </pf-button>
    </div>

    <div :class="styles.paginationNavControl">
      <pf-button
        variant="plain"
        :disabled="disabled || page === firstPage || page === 0"
        :aria-label="toPreviousPage"
        data-action="previous"
        @click="goToPreviousPage"
      >
        <angle-left-icon />
      </pf-button>
    </div>

    <div v-if="!compact" :class="styles.paginationNavPageSelect">
      <input
        v-model="userInputPage"
        :class="styles.formControl"
        :aria-label="currPage"
        type="number"
        :disabled="disabled || (page === firstPage && page === lastPage) || page === 0"
        :min="lastPage <= 0 && firstPage <= 0 ? 0 : 1"
        :max="lastPage"
        @keydown="onKeyDown"
        @change="onChange"
      >
      <span aria-hidden="true">of {{ pagesTitle ? pluralize(lastPage, pagesTitle) : lastPage }}</span>
    </div>

    <div :class="styles.paginationNavControl">
      <pf-button
        variant="plain"
        :disabled="disabled || page === lastPage"
        :aria-label="toNextPage"
        data-action="next"
        @click="goToNextPage"
      >
        <angle-right-icon />
      </pf-button>
    </div>

    <div v-if="!compact" :class="[styles.paginationNavControl, styles.modifiers.last]">
      <pf-button
        variant="plain"
        :disabled="disabled || page === lastPage"
        :aria-label="toLastPage"
        data-action="last"
        @click="goToLastPage"
      >
        <angle-double-right-icon />
      </pf-button>
    </div>
  </nav>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';

import AngleLeftIcon from '@vue-patternfly4/icons/dist/esm/icons/angle-left-icon';
import AngleDoubleLeftIcon from '@vue-patternfly4/icons/dist/esm/icons/angle-double-left-icon';
import AngleRightIcon from '@vue-patternfly4/icons/dist/esm/icons/angle-right-icon';
import AngleDoubleRightIcon from '@vue-patternfly4/icons/dist/esm/icons/angle-double-right-icon';

import {pluralize} from '../../util';

export default {
  name: 'PfNavigation',

  components: {
    AngleLeftIcon,
    AngleDoubleLeftIcon,
    AngleRightIcon,
    AngleDoubleRightIcon,
  },

  props: {
    disabled: Boolean,
    compact: Boolean,

    page: {
      type: Number,
      default: 0,
    },
    lastPage: {
      type: Number,
      default: 0,
    },
    firstPage: {
      type: Number,
      default: 0,
    },

    pagesTitle: {
      type: String,
      default: '',
    },
    toLastPage: {
      type: String,
      default: 'Go to last page',
    },
    toNextPage: {
      type: String,
      default: 'Go to next page',
    },
    toFirstPage: {
      type: String,
      default: 'Go to first page',
    },
    toPreviousPage: {
      type: String,
      default: 'Go to previous page',
    },
    currPage: {
      type: String,
      default: 'Current page',
    },
    paginationTitle: {
      type: String,
      default: 'Pagination',
    },
  },

  emits: [
    'firstClick',
    'previousClick',
    'nextClick',
    'lastClick',
    'keydown',
    'change',
    'set-page',
  ],

  data() {
    return {
      styles,
      userInputPage: this.page,
    };
  },

  watch: {
    page: {
      handler(v) {
        this.userInputPage = v;
      },
      immediate: true,
    },
  },

  methods: {
    pluralize,

    handleNewPage(newPage) {
      const startIdx = (newPage - 1) * this.perPage;
      const endIdx = newPage * this.perPage;
      this.$emit('set-page', newPage, this.perPage, startIdx, endIdx);
    },

    parseInteger(input, lastPage) {
      let inputPage = parseInt(input, 10);
      if (!isNaN(inputPage)) {
        inputPage = inputPage > lastPage ? lastPage : inputPage;
        inputPage = inputPage < 1 ? 1 : inputPage;
      }
      return inputPage;
    },

    onKeyDown(e) {
      if (e.keyCode === 13) { // ENTER
        const inputPage = this.parseInteger(this.userInputPage, this.lastPage);
        this.handleNewPage(isNaN(inputPage) ? this.page : inputPage);
      }
    },

    onChange(e) {
      const inputPage = this.parseInteger(e.target.value, this.lastPage);
      this.userInputPage = isNaN(inputPage) ? e.target.value : inputPage;
    },

    goToFirstPage() {
      this.$emit('firstClick', 1);
      this.userInputPage = 1;
      this.handleNewPage(1);
    },

    goToPreviousPage() {
      const newPage = this.page - 1 >= 1 ? this.page - 1 : 1;
      this.$emit('previousClick', newPage);
      this.userInputPage = newPage;
      this.handleNewPage(newPage);
    },

    goToNextPage() {
      const newPage = this.page + 1 <= this.lastPage ? this.page + 1 : this.lastPage;
      this.$emit('nextClick', newPage);
      this.userInputPage = newPage;
      this.handleNewPage(newPage);
    },

    goToLastPage() {
      this.$emit('lastClick', this.lastPage);
      this.userInputPage = this.lastPage;
      this.handleNewPage(this.lastPage);
    },
  },
}
</script>