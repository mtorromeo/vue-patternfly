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
        <angles-left-icon />
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
        :disabled="
          disabled || (page === firstPage && page === lastPage) || page === 0
        "
        :min="lastPage <= 0 && firstPage <= 0 ? 0 : 1"
        :max="lastPage"
        @keydown="onKeydown"
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
        <angles-right-icon />
      </pf-button>
    </div>
  </nav>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';

import PfButton from '../Button.vue';
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AnglesLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angles-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import AnglesRightIcon from '@vue-patternfly/icons/dist/esm/icons/angles-right-icon';

import { pluralize } from '../../util';
import { defineComponent, markRaw, ref } from 'vue';

export default defineComponent({
  name: 'PfNavigation',

  components: {
    PfButton,
    AngleLeftIcon,
    AnglesLeftIcon,
    AngleRightIcon,
    AnglesRightIcon,
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
    /** Number of items per page. */
    perPage: {
      type: Number,
      default: 10,
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

  setup(props) {
    return {
      styles: markRaw(styles) as typeof styles,
      userInputPage: ref<string | number>(props.page),
    };
  },

  watch: {
    page: {
      handler(v: number) {
        this.userInputPage = v;
      },
      immediate: true,
    },
  },

  methods: {
    pluralize,

    handleNewPage(newPage: number) {
      const startIdx = (newPage - 1) * this.perPage;
      const endIdx = newPage * this.perPage;
      this.$emit('set-page', newPage, this.perPage, startIdx, endIdx);
    },

    parseInteger(input: string | number, lastPage: number) {
      let inputPage = typeof input === 'number' ? input : parseInt(input, 10);
      if (!isNaN(inputPage)) {
        inputPage = inputPage > lastPage ? lastPage : inputPage;
        inputPage = inputPage < 1 ? 1 : inputPage;
      }
      return inputPage;
    },

    onKeydown(e: KeyboardEvent) {
      if (e.keyCode === 13) {
        // ENTER
        const inputPage = this.parseInteger(this.userInputPage, this.lastPage);
        this.handleNewPage(isNaN(inputPage) ? this.page : inputPage);
      }
    },

    onChange(e: Event) {
      if (!(e.currentTarget instanceof HTMLInputElement)) {
        return;
      }
      const inputPage = this.parseInteger(e.currentTarget.value, this.lastPage);
      this.userInputPage = isNaN(inputPage) ? e.currentTarget.value : inputPage;
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
      const newPage =
        this.page + 1 <= this.lastPage ? this.page + 1 : this.lastPage;
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
});
</script>
