<template>
  <pf-select
    id="multi-typeahead-checkbox-select"
    role="menu"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="(_event, value) => onSelect(value)"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Multi typeahead checkbox menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="multi-typeahead-select-checkbox-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            :placeholder="placeholder"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-multi-typeahead-checkbox-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          />
          <pf-text-input-group-utilities v-show="selected.length > 0">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-multi-typeahead-checkbox-listbox" aria-multiselectable>
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
        :check="!option.ariaDisabled"
        :selected="selected.includes(option.value)"
      >
        {{ option.label }}
      </pf-select-option>
    </pf-select-list>
  </pf-select>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type Option = { value: string; label: string; ariaDisabled?: boolean };

const initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const NO_RESULTS = 'no results';

const open = ref(false);
const inputValue = ref('');
const selected = ref<string[]>([]);
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

const placeholder = computed(() => `${selected.value.length} item${selected.value.length !== 1 ? 's' : ''} selected`);

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!inputValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(inputValue.value.toLowerCase()),
  );
  // When no options are found after filtering, display 'No results found'
  return options.length
    ? options
    : [{ ariaDisabled: true, label: `No results found for "${inputValue.value}"`, value: NO_RESULTS }];
});

const createItemId = (value: string) => `select-multi-typeahead-${value.replace(' ', '-')}`;

function setActiveAndFocusedItem(itemIndex: number) {
  focusedItemIndex.value = itemIndex;
  activeItemId.value = createItemId(selectOptions.value[itemIndex]!.value);
}

function resetActiveAndFocusedItem() {
  focusedItemIndex.value = null;
  activeItemId.value = undefined;
}

function closeMenu() {
  open.value = false;
  resetActiveAndFocusedItem();
}

function onOpenChange(isOpen: boolean) {
  if (isOpen) {
    open.value = true;
  } else {
    closeMenu();
  }
}

function onInputClick() {
  if (!open.value) {
    open.value = true;
  } else if (!inputValue.value) {
    closeMenu();
  }
}

function onSelect(value?: MenuItemId | null) {
  if (typeof value === 'string' && value && value !== NO_RESULTS) {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    selected.value = selected.value.includes(value)
      ? selected.value.filter(selection => selection !== value)
      : [...selected.value, value];
  }

  textInput.value?.focus();
}

function onTextInputChange(value: string) {
  resetActiveAndFocusedItem();

  // Open the menu when the input value changes and the new value is not empty
  if (value && !open.value) {
    open.value = true;
  }
}

function handleMenuArrowKeys(key: string) {
  const options = selectOptions.value;
  let indexToFocus = 0;

  if (!open.value) {
    open.value = true;
  }

  if (options.every(option => option.ariaDisabled)) {
    return;
  }

  if (key === 'ArrowUp') {
    // When no index is set or at the first index, focus to the last, otherwise decrement focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === 0 ? options.length - 1 : focusedItemIndex.value - 1;
  }

  if (key === 'ArrowDown') {
    // When no index is set or at the last index, focus to the first, otherwise increment focus index
    indexToFocus =
      focusedItemIndex.value === null || focusedItemIndex.value === options.length - 1 ? 0 : focusedItemIndex.value + 1;
  }

  setActiveAndFocusedItem(indexToFocus);
}

function onInputKeyDown(event: KeyboardEvent) {
  const focusedItem = focusedItemIndex.value !== null ? selectOptions.value[focusedItemIndex.value] : null;

  // like upstream, reopen only a menu that was closed before the selection
  const wasOpen = open.value;

  switch (event.key) {
    case 'Enter':
      if (wasOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.ariaDisabled) {
        onSelect(focusedItem.value);
      }

      if (!wasOpen) {
        open.value = true;
      }
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      event.preventDefault();
      handleMenuArrowKeys(event.key);
      break;
  }
}

function onClearButtonClick() {
  selected.value = [];
  inputValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
</script>
