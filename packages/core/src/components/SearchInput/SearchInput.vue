<template>
  <component :is="attributes.length > 0 ? 'div' : PassThrough" ref="$el">
    <component :is="(!!onSearch || attributes.length > 0 || !!onToggleAdvancedSearch || expandable) ? PfInputGroup : PassThrough">
      <template v-if="!expandable || managedExpanded">
        <pf-text-input-group :disabled="disabled">
          <pf-text-input-group-main
            ref="input"
            v-model="value"
            :type="type"
            :hint="hint"
            :placeholder="placeholder"
            :aria-label="ariaLabel"
            @keydown="onEnter"
          >
            <template #icon>
              <magnifying-glass-icon />
            </template>
          </pf-text-input-group-main>

          <pf-text-input-group-utilities v-if="value && (resultsCount || (!!onNextClick && !!onPreviousClick) || (!!onClear && !expandable))">
            <pf-badge v-if="resultsCount" read>{{ resultsCount }}</pf-badge>

            <div v-if="!!onNextClick && !!onPreviousClick" class="pf-v5-c-text-input-group__group">
              <pf-button
                :disabled="disabled || previousNavigationButtonDisabled"
                :aria-label="previousNavigationButtonAriaLabel"
                @click="onPreviousClick"
              >
                <angle-up-icon />
              </pf-button>

              <pf-button
                variant="plain"
                :disabled="disabled || nextNavigationButtonDisabled"
                :aria-label="nextNavigationButtonAriaLabel"
                @click="onNextClick"
              >
                <angle-down-icon />
              </pf-button>
            </div>

            <pf-button
              v-if="onClear && !expandable"
              variant="plain"
              :disabled="disabled"
              :aria-label="resetButtonLabel"
              @click="onClearInput"
            >
              <xmark-icon />
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>

        <pf-button
          v-if="attributes.length > 0 || !!onToggleAdvancedSearch"
          :class="{'pf-m-expanded': searchMenuOpen}"
          variant="control"
          :disabled="disabled"
          :aria-label="openMenuButtonAriaLabel"
          :aria-expanded="searchMenuOpen"
          @click="onToggle"
        >
          <caret-down-icon />
        </pf-button>

        <pf-button
          v-if="!!onSearch"
          type="submit"
          variant="control"
          :disabled="disabled|| !value"
          :aria-label="submitSearchButtonLabel"
          @click="onSearchHandler"
        >
          <arrow-right-icon />
        </pf-button>
      </template>

      <pf-button
        v-if="expandable"
        ref="expandButton"
        variant="plain"
        :aria-label="expandButtonAriaLabel"
        :aria-expanded="managedExpanded"
        @click="onExpand"
      >
        <xmark-icon v-if="managedExpanded" />
        <magnifying-glass-icon v-else />
      </pf-button>
    </component>

    <teleport :to="appendTo" :disabled="!appendTo || appendTo === 'inline'">
      <floating-ui :reference="$el" :z-index="zIndex" flip>
        <component
          :is="appendTo === 'inline' ? PassThrough : 'div'"
          v-if="attributes.length > 0"
          ref="floatingElement"
        >
          <pf-advanced-search-menu
            v-model="value"
            :reset-button-label="resetButtonLabel"
            :submit-search-button-label="submitSearchButtonLabel"
            :attributes="attributes"
            :advanced-search-delimiter="advancedSearchDelimiter"
            :get-attr-value-map="getAttrValueMap"
            :search-menu-open="searchMenuOpen"
            @search="onSearch"
            @clear="onClear"
            @toggle-advanced-menu="onToggle"
          >
            <template #words-attr-label>
              <slot name="words-attr-label" />
            </template>
            <slot name="form-additional-items" />
          </pf-advanced-search-menu>
        </component>
      </floating-ui>
    </teleport>
  </component>
</template>

<script lang="ts">
/** Properties for adding search attributes to an advanced search input. These properties must
 * be passed in as an object within an array to the search input component's attribute properrty.
 */
export interface SearchAttribute {
  /** The search attribute's value to be provided in the search input's query string.
   * It should have no spaces and be unique for every attribute.
   */
  attr: string;
  /** The search attribute's display name. It is used to label the field in the advanced
   * search menu.
   */
  display: string;
}

export type SearchInputProvide = {
  $el: Ref<HTMLDivElement | undefined>;
  input: Ref<InstanceType<typeof PfTextInputGroupMain> | undefined>;
}

export const SearchInputKey = Symbol('SearchInputKey') as InjectionKey<SearchInputProvide>;

export interface Props {
  /** Value of the search input. */
  modelValue?: string;
  /** Flag indicating if search input is disabled. */
  disabled?: boolean;
  /** An accessible label for the search input. */
  ariaLabel?: string;
  /** Placeholder text of the search input. */
  placeholder?: string;
  /** A suggestion for autocompleting. */
  hint?: string;
  /** Type of the input */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url';

  /** z-index of the advanced search form when appendTo is not inline. */
  zIndex?: number;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
  /** A flag for controlling the open state of a custom advanced search implementation. */
  advancedSearchOpen?: boolean;
  /** Accessible label for the button which opens the advanced search form menu. */
  openMenuButtonAriaLabel?: string;
  /** Accessible label for the button to navigate to previous result. */
  previousNavigationButtonAriaLabel?: string;
  /** Flag indicating if the previous navigation button is disabled. */
  previousNavigationButtonDisabled?: boolean;
  /** Accessible label for the button to navigate to next result. */
  nextNavigationButtonAriaLabel?: string;
  /** Flag indicating if the next navigation button is disabled. */
  nextNavigationButtonDisabled?: boolean;
  /** The number of search results returned. Either a total number of results,
   * or a string representing the current result over the total number of results. i.e. "1 / 5". */
  resultsCount?: number | string;

  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: string[] | SearchAttribute[];

  expandable?: boolean;
  expanded?: boolean;
  expandButtonAriaLabel?: string;

  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;

  /** The container to append the menu to.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * append-to="body"
   * append-to="#element-id"
   */
  appendTo?: HTMLElement | string;

  /** A callback for when the user clicks the clear button. */
  onClear?: (event: Event) => void;
  /** A callback for when the user clicks to navigate to next result. */
  onNextClick?: (event: Event) => void;
  /** A callback for when the user clicks to navigate to previous result. */
  onPreviousClick?: (event: Event) => void;
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedSearch?: (event: Event, isOpen?: boolean) => void;
  /** A callback for when the search button is clicked. */
  onSearch?: (
    value: string,
    event: Event,
    attrValueMap: { [key: string]: string }
  ) => void,
}
</script>

<script lang="ts" setup>
import { type InjectionKey, nextTick, provide, type Ref, ref } from 'vue';
import { useManagedProp } from '../../use';
import PfInputGroup from '../InputGroup/InputGroup.vue';
import PfTextInputGroup from '../TextInputGroup/TextInputGroup.vue';
import PfTextInputGroupMain from '../TextInputGroup/TextInputGroupMain.vue';
import PfTextInputGroupUtilities from '../TextInputGroup/TextInputGroupUtilities.vue';
import PfAdvancedSearchMenu from './AdvancedSearchMenu.vue';
import PfBadge from '../Badge.vue';
import PfButton from '../Button.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';

import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import AngleUpIcon from '@vue-patternfly/icons/angle-up-icon';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import ArrowRightIcon from '@vue-patternfly/icons/arrow-right-icon';

defineOptions({
  name: 'PfSearchInput',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  attributes: () => [],
  ariaLabel: 'Search input',
  advancedSearchOpen: undefined,
  expanded: undefined,
  resetButtonLabel: 'Reset',
  openMenuButtonAriaLabel: 'Open advanced search',
  previousNavigationButtonAriaLabel: 'Previous',
  previousNavigationButtonDisabled :false,
  nextNavigationButtonDisabled: false,
  nextNavigationButtonAriaLabel: 'Next',
  submitSearchButtonLabel: 'Search',
  disabled: false,
  type: 'text',
});

const emit = defineEmits<{
  (name: 'update:modelValue', v: string): void;
  (name: 'update:advancedSearchOpen', v: boolean): void;
  (name: 'update:expanded', v: boolean): void;
  /** A callback for when the input value changes. */
  (name: 'change', value: string): void;
}>();

defineSlots<{
  'words-attr-label'?: (props?: Record<never, never>) => any;
  'form-additional-items'?: (props?: Record<never, never>) => any;
}>();

if (props.attributes.length > 0 && !props.advancedSearchDelimiter) {
  // eslint-disable-next-line no-console
  console.error(
    'An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop',
  );
}

const value = useManagedProp('modelValue', '', to => emit('change', to));
const searchMenuOpen = useManagedProp('advancedSearchOpen', false);
const managedExpanded = useManagedProp('expanded', false);

const $el: Ref<HTMLDivElement | undefined> = ref();
const floatingElement: Ref<HTMLSpanElement | undefined> = ref();
const expandButton: Ref<InstanceType<typeof PfButton> | undefined> = ref();
const input: Ref<InstanceType<typeof PfTextInputGroupMain> | undefined> = ref();

provide(SearchInputKey, {
  $el,
  input,
});

function onToggle(e: Event) {
  searchMenuOpen.value = !searchMenuOpen.value;
  props.onToggleAdvancedSearch?.(e, searchMenuOpen.value);
}

function onSearchHandler(e: Event) {
  searchMenuOpen.value = false;
  props.onSearch?.(value.value, e, getAttrValueMap());
}

function getAttrValueMap() {
  const attrValue: { [key: string]: string } = {};
  const pairs = value.value.split(' ');
  pairs.map(pair => {
    const splitPair = props.advancedSearchDelimiter ? pair.split(props.advancedSearchDelimiter) : [];
    if (splitPair.length === 2) {
      attrValue[splitPair[0]] = splitPair[1];
    } else if (splitPair.length === 1) {
      attrValue.haswords = Object.hasOwnProperty.call(attrValue, 'haswords')
        ? `${attrValue.haswords} ${splitPair[0]}`
        : splitPair[0];
    }
  });
  return attrValue;
}

function onEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    onSearchHandler(e);
  }
}

function onClearInput(e: Event) {
  props.onClear?.(e);
  input.value?.focus();
}

function onExpand(e: Event) {
  value.value = '';
  props.onClear?.(e);

  managedExpanded.value = !managedExpanded.value;

  nextTick(() => {
    if (managedExpanded.value) {
      input.value?.focus();
    } else {
      expandButton.value?.el?.focus();
    }
  });
}
</script>
