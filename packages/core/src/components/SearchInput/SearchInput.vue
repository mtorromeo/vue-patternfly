<template>
  <component :is="advanced ? 'div' : PassThrough" ref="wrapperRef" v-bind="advanced ? rootAttrs : {}">
    <component
      :is="inputGroup ? PfInputGroup : PassThrough"
      ref="triggerRef"
      v-bind="inputGroup && !advanced ? rootAttrs : {}"
      :class="inputGroup ? expandableClasses : undefined"
    >
      <template v-if="!collapsed">
        <component
          :is="inputGroup ? PfInputGroupItem : PassThrough"
          :class="{ [inputGroupStyles.modifiers.searchInput]: animate }"
          :fill="inputGroup && !animate ? true : undefined"
          :inert="(animate && !expanded) || undefined"
        >
          <pf-text-input-group ref="textInputGroupRef" v-bind="inputGroup ? {} : rootAttrs" :disabled="disabled">
            <pf-text-input-group-main
              ref="inputRef"
              v-bind="inputAttrs"
              :model-value="value"
              :name="name"
              :hint="hint"
              :type="type"
              :placeholder="placeholder"
              :aria-label="ariaLabel"
              @keydown="onEnter"
              @update:model-value="value = String($event)"
            >
              <template #icon>
                <magnifying-glass-icon />
              </template>
            </pf-text-input-group-main>

            <pf-text-input-group-utilities v-if="renderUtilities || utilitiesDisplayed">
              <pf-badge v-if="resultsCount" read>
                {{ resultsCount }}
                <span v-if="resultsCountContext" class="pf-v6-screen-reader">{{ resultsCountContext }}</span>
              </pf-badge>

              <div v-if="!!onNextClick && !!onPreviousClick" :class="textInputGroupStyles.textInputGroupGroup">
                <pf-button
                  variant="plain"
                  :disabled="disabled || previousNavigationButtonDisabled"
                  :aria-label="previousNavigationButtonAriaLabel"
                  @click="onPreviousClick"
                >
                  <template #icon>
                    <angle-up-icon />
                  </template>
                </pf-button>

                <pf-button
                  variant="plain"
                  :disabled="disabled || nextNavigationButtonDisabled"
                  :aria-label="nextNavigationButtonAriaLabel"
                  @click="onNextClick"
                >
                  <template #icon>
                    <angle-down-icon />
                  </template>
                </pf-button>
              </div>

              <pf-button
                v-if="!!onClear && !expandable"
                variant="plain"
                :disabled="disabled"
                :aria-label="resetButtonLabel"
                @click="onClearInput"
              >
                <template #icon>
                  <xmark-icon />
                </template>
              </pf-button>
            </pf-text-input-group-utilities>
          </pf-text-input-group>
        </component>

        <pf-input-group-item
          v-if="attributes.length > 0 || !!onToggleAdvancedSearch"
          :class="{ [inputGroupStyles.modifiers.searchAction]: animate }"
          plain
        >
          <pf-button
            :class="{ 'pf-m-expanded': advancedSearchOpen }"
            variant="control"
            :disabled="disabled"
            :aria-label="openMenuButtonAriaLabel"
            :aria-expanded="advancedSearchOpen"
            @click="onToggle"
          >
            <template #icon>
              <caret-down-icon />
            </template>
          </pf-button>
        </pf-input-group-item>

        <pf-input-group-item v-if="!!onSearch" :class="{ [inputGroupStyles.modifiers.searchAction]: animate }">
          <pf-button
            type="submit"
            variant="control"
            :disabled="disabled"
            :aria-label="submitSearchButtonLabel"
            @click="onSearchHandler"
          >
            <template #icon>
              <pf-icon should-mirror-r-t-l>
                <arrow-right-icon />
              </pf-icon>
            </template>
          </pf-button>
        </pf-input-group-item>
      </template>

      <component :is="collapsed || extraButtons ? PfInputGroupItem : PassThrough" v-if="expandable">
        <pf-input-group-item v-if="!animate" plain>
          <pf-button
            ref="expandButtonRef"
            variant="plain"
            :aria-label="expandButtonAriaLabel"
            :aria-expanded="expanded"
            @click="onExpand"
          >
            <template #icon>
              <xmark-icon v-if="expanded" />
              <magnifying-glass-icon v-else />
            </template>
          </pf-button>
        </pf-input-group-item>
        <template v-else>
          <pf-input-group-item
            :class="inputGroupStyles.modifiers.searchExpand"
            plain
            :inert="expanded || undefined"
            @transitionend="onTransitionEnd"
          >
            <pf-button
              ref="expandButtonRef"
              variant="plain"
              :aria-label="expandButtonAriaLabel"
              :aria-expanded="expanded"
              @click="onExpand"
            >
              <template #icon>
                <magnifying-glass-icon />
              </template>
            </pf-button>
          </pf-input-group-item>
          <pf-input-group-item :class="inputGroupStyles.modifiers.searchAction" plain :inert="!expanded || undefined">
            <pf-button variant="plain" :aria-label="expandButtonAriaLabel" :aria-expanded="expanded" @click="onExpand">
              <template #icon>
                <xmark-icon />
              </template>
            </pf-button>
          </pf-input-group-item>
        </template>
      </component>
    </component>

    <wrap v-if="advanced" :disabled="appendTo === 'inline'">
      <template #with>
        <floating-ui
          :hidden="!advancedSearchOpen"
          :teleport-to="appendTo ?? 'inline'"
          :reference="triggerEl"
          :z-index="zIndex"
          flip
        />
      </template>
      <div>
        <pf-advanced-search-menu
          ref="menuRef"
          v-model="value"
          :search-menu-open="advancedSearchOpen"
          :reset-button-label="resetButtonLabel"
          :submit-search-button-label="submitSearchButtonLabel"
          :words-attr-label="wordsAttrLabel"
          :attributes="attributes"
          :advanced-search-delimiter="advancedSearchDelimiter"
          :get-attr-value-map="getAttrValueMap"
          :on-clear="onClear"
          @search="onMenuSearch"
          @toggle-advanced-menu="onToggle"
        >
          <template v-for="slot in attributeSlots" #[slot]>
            <slot :name="slot" />
          </template>
          <template v-if="$slots['words-attr-label']" #words-attr-label>
            <slot name="words-attr-label" />
          </template>
          <slot name="form-additional-items" />
        </pf-advanced-search-menu>
      </div>
    </wrap>
  </component>
</template>

<script lang="ts">
export { SearchInputKey, type SearchAttribute, type SearchInputProvide } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating if search input is disabled. */
  disabled?: boolean;
  /** An accessible label for the search input. */
  ariaLabel?: string;
  /** Placeholder text of the search input. */
  placeholder?: string;
  /** A suggestion for autocompleting. */
  hint?: string;
  /** Name attribute for the search input. */
  name?: string;
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
  /** Additional attributes added to the search input element, such as its id. */
  inputAttrs?: Record<string, unknown>;
  /** Flag to always display the utilities. By default they are only displayed when the search input has a value. */
  utilitiesDisplayed?: boolean;

  /** z-index of the advanced search form when appendTo is not inline. */
  zIndex?: number;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
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
  /** Screenreader text that will appear after resultsCount to give context for what that value represents to assistive technologies. */
  resultsCountContext?: string;

  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: string[] | SearchAttribute[];
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  wordsAttrLabel?: string;

  /** Makes the search input expandable/collapsible through a toggle button. */
  expandable?: boolean;
  /** An accessible label for the expandable search input toggle. */
  expandButtonAriaLabel?: string;
  /** Flag indicating animations should be enabled when the expandable search input expands and collapses. */
  animations?: boolean;

  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;

  /** The container to append the advanced search menu to. Defaults to the element wrapping the search input;
   * "inline" renders the menu in the document flow instead of floating it.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * append-to="body"
   * append-to="#element-id"
   */
  appendTo?: 'inline' | string | RendererElement | null;

  /** A callback for when the user clicks the clear button. */
  onClear?: (event: Event) => void;
  /** A callback for when the user clicks to navigate to next result. */
  onNextClick?: (event: Event) => void;
  /** A callback for when the user clicks to navigate to previous result. */
  onPreviousClick?: (event: Event) => void;
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedSearch?: (event: Event, isOpen?: boolean) => void;
  /** A callback for when the search button is clicked. */
  onSearch?: (value: string, event: Event, attrValueMap: Record<string, string>) => void;
}
</script>

<script lang="ts" setup>
import textInputGroupStyles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import inputGroupStyles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import {
  computed,
  getCurrentInstance,
  onMounted,
  provide,
  useAttrs,
  useSlots,
  useTemplateRef,
  watch,
  type HTMLAttributes,
  type RendererElement,
  type VNode,
} from 'vue';
import { useChildrenTracker } from '../../use';
import PfInputGroup from '../InputGroup/InputGroup.vue';
import PfInputGroupItem from '../InputGroup/InputGroupItem.vue';
import PfTextInputGroup from '../TextInputGroup/TextInputGroup.vue';
import PfTextInputGroupMain from '../TextInputGroup/TextInputGroupMain.vue';
import PfTextInputGroupUtilities from '../TextInputGroup/TextInputGroupUtilities.vue';
import PfAdvancedSearchMenu from './AdvancedSearchMenu.vue';
import { getAttrValueMap as parseAttrValueMap, SearchInputKey, type SearchAttribute } from './common';
import PfBadge from '../Badge.vue';
import PfButton from '../Button.vue';
import PfIcon from '../Icon.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import Wrap from '../../helpers/Wrap.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import AngleUpIcon from '@vue-patternfly/icons/angle-up-icon';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import ArrowRightIcon from '@vue-patternfly/icons/arrow-right-icon';
import { FormInputsKey } from '../Form/common';

defineOptions({
  name: 'PfSearchInput',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  attributes: () => [],
  ariaLabel: 'Search input',
  resetButtonLabel: 'Reset',
  openMenuButtonAriaLabel: 'Open advanced search',
  previousNavigationButtonAriaLabel: 'Previous',
  nextNavigationButtonAriaLabel: 'Next',
  submitSearchButtonLabel: 'Search',
  resultsCountContext: ' results',
  wordsAttrLabel: 'Has words',
  type: 'text',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Value of the search input. */
const value = defineModel<string>({ default: '' });

/** A flag for controlling the open state of a custom advanced search implementation. */
const advancedSearchOpen = defineModel<boolean>('advancedSearchOpen', { default: false });

/** Flag to indicate if the expandable search input is expanded. */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  /** Label of the advanced search field of a single attribute, replacing its display name. */
  [K: `attribute:${string}`]: (props?: Record<never, never>) => VNode[];
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  'words-attr-label'?: (props?: Record<never, never>) => VNode[];
  /** Additional elements added after the attributes in the advanced search form. */
  'form-additional-items'?: (props?: Record<never, never>) => VNode[];
}>();

if (props.attributes.length > 0 && !props.advancedSearchDelimiter) {
  console.error(
    'An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop',
  );
}

useChildrenTracker(FormInputsKey, getCurrentInstance()?.proxy);

const attrs = useAttrs();
const slots = useSlots();
const rootAttrs = computed(() => ({ ...ouiaProps, ...attrs }));
const attributeSlots = computed(() =>
  Object.keys(slots).filter((name): name is `attribute:${string}` => name.startsWith('attribute:')),
);

const wrapper = useTemplateRef<HTMLElement>('wrapperRef');
const trigger = useTemplateRef<InstanceType<typeof PfInputGroup>>('triggerRef');
const textInputGroup = useTemplateRef('textInputGroupRef');
const input = useTemplateRef('inputRef');
const expandButton = useTemplateRef('expandButtonRef');
const menu = useTemplateRef('menuRef');

const extraButtons = computed(() => !!props.onSearch || props.attributes.length > 0 || !!props.onToggleAdvancedSearch);
const advanced = computed(() => props.attributes.length > 0 && !collapsed.value);
const inputGroup = computed(() => extraButtons.value || props.expandable);
const animate = computed(() => props.expandable && props.animations);
/** Only the expand toggle is rendered */
const collapsed = computed(() => props.expandable && !expanded.value && !props.animations);

const expandableClasses = computed(() => ({
  [inputGroupStyles.modifiers.searchExpandable]: animate.value,
  [inputGroupStyles.modifiers.expanded]: animate.value && expanded.value,
}));

const renderUtilities = computed(
  () =>
    !!value.value &&
    (!!props.resultsCount ||
      (!!props.onNextClick && !!props.onPreviousClick) ||
      (!!props.onClear && !props.expandable)),
);

const triggerEl = computed<HTMLElement | null>(() => trigger.value?.$el ?? null);
const rootEl = computed<HTMLElement | null>(() => {
  if (advanced.value) {
    return wrapper.value;
  }
  return inputGroup.value ? triggerEl.value : (textInputGroup.value?.$el ?? null);
});

provide(SearchInputKey, {
  $el: rootEl,
});

// focus the first attribute field when the menu opens and the search input when it closes afterwards
let focusInputOnClose = false;
function onAdvancedSearchOpenChange(open: boolean) {
  if (open) {
    menu.value?.focus();
    focusInputOnClose = true;
  } else if (focusInputOnClose) {
    input.value?.focus();
  }
}
onMounted(() => onAdvancedSearchOpenChange(advancedSearchOpen.value));
watch(advancedSearchOpen, onAdvancedSearchOpenChange, { flush: 'post' });

function getAttrValueMap() {
  return parseAttrValueMap(value.value, props.advancedSearchDelimiter);
}

function onToggle(e: Event) {
  advancedSearchOpen.value = !advancedSearchOpen.value;
  props.onToggleAdvancedSearch?.(e, advancedSearchOpen.value);
}

function onSearchHandler(e: Event) {
  e.preventDefault();
  props.onSearch?.(value.value, e, getAttrValueMap());
  advancedSearchOpen.value = false;
}

function onMenuSearch(searchValue: string, e: Event, attrValueMap: Record<string, string>) {
  props.onSearch?.(searchValue, e, attrValueMap);
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

let focusAfterExpandChange = false;

function focusExpandButton() {
  const el = expandButton.value?.el;
  if (el instanceof HTMLElement) {
    el.focus();
  }
}

function onExpand() {
  value.value = '';
  expanded.value = !expanded.value;
  focusAfterExpandChange = true;
}

// runs after the render, as collapsing re-creates the toggle button; when animated, focus
// moves back to the toggle at the end of the collapse transition
watch(
  expanded,
  isExpanded => {
    if (!focusAfterExpandChange) {
      return;
    }
    if (isExpanded) {
      input.value?.focus();
    } else if (!props.animations) {
      focusExpandButton();
    }
    if (!props.animations) {
      focusAfterExpandChange = false;
    }
  },
  { flush: 'post' },
);

function onTransitionEnd() {
  if (!expanded.value && focusAfterExpandChange) {
    focusExpandButton();
  }
  focusAfterExpandChange = false;
}

defineExpose({
  /** The search input element. */
  input: computed(() => input.value?.input ?? null),
  /** Focuses the search input. */
  focus(options?: FocusOptions) {
    input.value?.focus(options);
  },
});
</script>
