<template>
  <doc-page title="Search input">
    <template #description>
      <pre v-md>
        A **search input** is a type of input field that can be used to search, find, or filter. See [filter guidelines](https://www.patternfly.org/guidelines/filters) for more information on using search input as a filter.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfSearchInput" />
      <component-info name="PfAdvancedSearchMenu" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value is bound with `v-model` (`value`, `onChange`).
      - The `search` event receives `(value, event, attrValueMap)` instead of `(event, value, attrValueMap)`.
      - The `expandableInput` object is replaced by flat props: `expandable`, `v-model:expanded` (`isExpanded`, `onToggleExpand`), `expand-button-aria-label` (`toggleAriaLabel`) and `animations` (`hasAnimations`). There is no animations context: animations are enabled per search input.
      - Toggling the expandable search input clears the value through `v-model` (`update:modelValue` with an empty string).
      - The open state of the advanced search menu is bound with `v-model:advanced-search-open` (`isAdvancedSearchOpen`).
      - `utilities-displayed` replaces `areUtilitiesDisplayed`.
      - `input-attrs` replaces `inputProps` and `searchInputId`: set the input `id` through it.
      - The `ref` of the search input exposes `focus()` and the `input` element instead of forwarding the ref to the input.
      - The `formAdditionalItems` prop is replaced by the `form-additional-items` slot, and `hasWordsAttrLabel` by the `words-attr-label` prop and slot.
      - The `display` of an attribute is a string; the `attribute:&lt;attr&gt;` slot replaces it with custom content.
      - `append-to` takes an element or a selector rather than a function. Clicks inside a menu appended outside the search input do not close it.
      - The `type` prop sets the type of the input.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-search-input
        v-model="basic"
        aria-label="Search basic example"
        placeholder="Find by name"
        @clear="basic = ''"
      />
    </story-canvas>

    <story-canvas title="Match with result count">
      <pf-search-input
        v-model="withCount"
        aria-label="Match with result count"
        placeholder="Find by name"
        :results-count="withCount ? 3 : 0"
        @clear="withCount = ''"
      />
    </story-canvas>

    <story-canvas title="Match with navigable options">
      <pf-search-input
        v-model="navigable"
        aria-label="Search match with navigable options example"
        placeholder="Find by name"
        :next-navigation-button-disabled="currentResult === 3"
        :previous-navigation-button-disabled="currentResult === 1"
        :results-count="`${currentResult} / ${navigable ? 3 : 0}`"
        @clear="
          navigable = '';
          currentResult = 1;
        "
        @next-click="currentResult = Math.min(currentResult + 1, 3)"
        @previous-click="currentResult = Math.max(currentResult - 1, 1)"
      />
    </story-canvas>

    <story-canvas title="With submit button">
      <pf-search-input
        v-model="withSubmit"
        aria-label="Search with submit button example"
        placeholder="Find by name"
        @search="value => (withSubmit = value)"
        @clear="withSubmit = ''"
      />
    </story-canvas>

    <story-canvas title="Focus search input using ref">
      <pf-search-input
        ref="focusSearch"
        v-model="withRef"
        aria-label="Search focus using ref example"
        @clear="withRef = ''"
      />
      <pf-button @click="focusSearch?.focus()">Focus on the search input</pf-button>
    </story-canvas>

    <story-canvas title="With expandable button">
      <template #intro>
        <pre v-md>
          Animations on the expansion and collapse of the search input may be opted into with the `animations` prop.
        </pre>
      </template>

      <pf-search-input
        v-model="expandableValue"
        v-model:expanded="expanded"
        aria-label="Search with expandable button example"
        placeholder="Find by name"
        expandable
        expand-button-aria-label="Expandable search input toggle"
        animations
        @clear="expandableValue = ''"
      />
    </story-canvas>

    <story-canvas title="Advanced">
      <template #intro>
        <pre v-md>
          The search input component can be used to dynamically build a one to one attribute-value advanced search. Using the `attributes` prop alongside the `advanced-search-delimiter` will expose this functionality, as demonstrated in the following example. The search input component can also be used as a composable component and paired with a `pf-popper` or other elements to build a completely custom advanced search form.

          The values used in the attribute-value form fields may contain spaces. The values containing spaces should be wrapped with quotes inside the summary search string in the input field. If the latter is autogenerated from the individual fields the quotes will be autoplaced.
        </pre>
      </template>

      <pf-checkbox
        id="toggle-delimiter"
        :model-value="useEqualsAsDelimiter"
        label="Use equal sign as search attribute delimiter"
        name="toggle-delimiter"
        @update:model-value="
          (checked: boolean) => {
            advanced = advanced.replace(/:|=/g, checked ? '=' : ':');
            useEqualsAsDelimiter = checked;
          }
        "
      />
      <pf-checkbox
        id="toggle-custom-footer"
        v-model="useCustomFooter"
        label="Add custom footer element after the attributes in the menu"
        name="toggle-custom-footer"
      />
      <br />
      <pf-search-input
        v-model="advanced"
        aria-label="Advanced search"
        :attributes="[
          { attr: 'username', display: 'Username' },
          { attr: 'firstname', display: 'First name' },
        ]"
        :advanced-search-delimiter="useEqualsAsDelimiter ? '=' : ':'"
        @search="value => (advanced = value)"
        @clear="advanced = ''"
      >
        <template v-if="useCustomFooter" #form-additional-items>
          <pf-form-group>
            <pf-button variant="link" inline icon-position="end">
              <template #icon>
                <square-arrow-up-right-icon />
              </template>
              Link
            </pf-button>
          </pf-form-group>
        </template>
      </pf-search-input>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import SquareArrowUpRightIcon from '@vue-patternfly/icons/square-arrow-up-right-icon';

const basic = ref('');
const withCount = ref('');
const navigable = ref('');
const currentResult = ref(1);
const withSubmit = ref('');
const withRef = ref('');
const focusSearch = useTemplateRef<{ focus: () => void }>('focusSearch');
const expandableValue = ref('');
const expanded = ref(false);
const useEqualsAsDelimiter = ref(false);
const useCustomFooter = ref(false);
const advanced = ref('username:player firstname:john');
</script>
