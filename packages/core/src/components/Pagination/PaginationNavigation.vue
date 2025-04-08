<template>
  <nav v-bind="ouiaProps" :class="styles.paginationNav" :aria-label="paginationAriaLabel">
    <div v-if="!compact" :class="[styles.paginationNavControl, styles.modifiers.first]">
      <pf-button
        variant="plain"
        :disabled="disabled || page === firstPage || page === 0"
        :aria-label="toFirstPageAriaLabel"
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
        :aria-label="toPreviousPageAriaLabel"
        data-action="previous"
        @click="goToPreviousPage"
      >
        <angle-left-icon />
      </pf-button>
    </div>

    <div v-if="!compact" :class="styles.paginationNavPageSelect">
      <pf-text-input
        v-model="userInputPage"
        :aria-label="currPageAriaLabel"
        type="number"
        :disabled="
          disabled || (page === firstPage && page === lastPage) || page === 0
        "
        :auto-validate="false"
        :min="lastPage <= 0 && firstPage <= 0 ? 0 : 1"
        :max="lastPage"
        @keydown="onKeydown"
        @change="onChange"
      />
      <span aria-hidden="true">of {{ pagesTitle ? pluralize(lastPage, pagesTitle, pagesTitlePlural) : lastPage }}</span>
    </div>

    <div :class="styles.paginationNavControl">
      <pf-button
        variant="plain"
        :disabled="disabled || page === lastPage"
        :aria-label="toNextPageAriaLabel"
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
        :aria-label="toLastPageAriaLabel"
        data-action="last"
        @click="goToLastPage"
      >
        <angles-right-icon />
      </pf-button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';

import PfButton from '../Button.vue';
import PfTextInput from '../TextInput.vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AnglesLeftIcon from '@vue-patternfly/icons/angles-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import AnglesRightIcon from '@vue-patternfly/icons/angles-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { pluralize } from '../../util';
import { type Ref, type HTMLAttributes, ref, watch } from 'vue';

defineOptions({
  name: 'PfPaginationNavigation',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-label'> {
  /** Flag indicating if the pagination is disabled. */
  disabled?: boolean;
  /** Flag indicating if the pagination is compact. */
  compact?: boolean;
  /** The number of the current page. */
  page?: number;
  /** The number of the last page. */
  lastPage?: number;
  /** The number of first page where pagination starts. */
  firstPage?: number;
  /** Number of items per page. */
  perPage?: number;
  /** The title of a page displayed beside the page number. */
  pagesTitle?: string;
  /** The title of a page displayed beside the page number (the plural form). */
  pagesTitlePlural?: string;

  toLastPageAriaLabel?: string;
  toNextPageAriaLabel?: string;
  toFirstPageAriaLabel?: string;
  toPreviousPageAriaLabel?: string;
  currPageAriaLabel?: string;
  paginationAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  page: 0,
  lastPage: 0,
  firstPage: 0,
  perPage: 10,
  toLastPageAriaLabel: 'Go to last page',
  toNextPageAriaLabel: 'Go to next page',
  toFirstPageAriaLabel: 'Go to first page',
  toPreviousPageAriaLabel: 'Go to previous page',
  currPageAriaLabel: 'Current page',
  paginationAriaLabel: 'Pagination',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  (name: 'first-click', page: number): void;
  (name: 'previous-click', page: number): void;
  (name: 'next-click', page: number): void;
  (name: 'last-click', page: number): void;
  (name: 'set-page', newPage: number, perPage: number, startIdx: number, endIdx: number): void;
}>();

const userInputPage: Ref<string | number> = ref(props.page);

watch(() => props.page, (v: number) => (userInputPage.value = v), { immediate: true });

function handleNewPage(newPage: number) {
  const startIdx = (newPage - 1) * props.perPage;
  const endIdx = newPage * props.perPage;
  emit('set-page', newPage, props.perPage, startIdx, endIdx);
}

function parseInteger(input: string | number, lastPage: number) {
  let inputPage = typeof input === 'number' ? input : parseInt(input, 10);
  if (!isNaN(inputPage)) {
    inputPage = inputPage > lastPage ? lastPage : inputPage;
    inputPage = inputPage < 1 ? 1 : inputPage;
  }
  return inputPage;
}

function onKeydown(e: KeyboardEvent) {
  const allowedKeys = [
    'Tab',
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
    'ArrowUp',
    'ArrowDown',
  ];
  if (e.key === 'Enter') {
    const inputPage = parseInteger(userInputPage.value, props.lastPage);
    handleNewPage(isNaN(inputPage) ? props.page : inputPage);
  } else if (!/^\d*$/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}

function onChange(e: Event) {
  if (!(e.currentTarget instanceof HTMLInputElement)) {
    return;
  }
  const inputPage = parseInteger(e.currentTarget.value, props.lastPage);
  userInputPage.value = isNaN(inputPage) ? e.currentTarget.value : inputPage;
}

function goToFirstPage() {
  emit('first-click', 1);
  userInputPage.value = 1;
  handleNewPage(1);
}

function goToPreviousPage() {
  const newPage = props.page - 1 >= 1 ? props.page - 1 : 1;
  emit('previous-click', newPage);
  userInputPage.value = newPage;
  handleNewPage(newPage);
}

function goToNextPage() {
  const newPage = props.page + 1 <= props.lastPage ? props.page + 1 : props.lastPage;
  emit('next-click', newPage);
  userInputPage.value = newPage;
  handleNewPage(newPage);
}

function goToLastPage() {
  emit('last-click', props.lastPage);
  userInputPage.value = props.lastPage;
  handleNewPage(props.lastPage);
}
</script>
