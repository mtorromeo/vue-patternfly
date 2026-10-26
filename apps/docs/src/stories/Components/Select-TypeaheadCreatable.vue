<template>
  <pf-select
    id="create-typeahead-select"
    :open="open"
    :selected="selected"
    variant="typeahead"
    @update:open="onOpenChange"
    @select="onSelect"
  >
    <template #toggle>
      <pf-menu-toggle
        variant="typeahead"
        aria-label="Typeahead creatable menu toggle"
        full-width
        @update:expanded="textInput?.focus()"
      >
        <pf-text-input-group plain>
          <pf-text-input-group-main
            id="create-typeahead-select-input"
            ref="textInput"
            v-model="inputValue"
            autocomplete="off"
            placeholder="Select a state"
            role="combobox"
            :aria-expanded="open"
            :aria-activedescendant="activeItemId"
            aria-controls="select-create-typeahead-listbox"
            @update:model-value="onTextInputChange"
            @click="onInputClick"
            @keydown="onInputKeyDown"
          />
          <pf-text-input-group-utilities v-show="inputValue">
            <pf-button variant="plain" aria-label="Clear input value" @click="onClearButtonClick">
              <template #icon><xmark-icon /></template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </template>

    <pf-select-list id="select-create-typeahead-listbox">
      <pf-select-option
        v-for="(option, index) in selectOptions"
        :id="createItemId(option.value)"
        :key="option.value"
        :value="option.value"
        :focused="focusedItemIndex === index"
        :aria-disabled="option.ariaDisabled"
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

let initialSelectOptions: Option[] = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Florida', label: 'Florida' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
];

const CREATE_NEW = 'create';

const open = ref(false);
const selected = ref('');
const inputValue = ref('');
const filterValue = ref('');
const focusedItemIndex = ref<number | null>(null);
const activeItemId = ref<string>();
const textInput = useTemplateRef('textInput');

// Filter menu items based on the text input value when one exists
const selectOptions = computed((): Option[] => {
  if (!filterValue.value) {
    return initialSelectOptions;
  }
  const options = initialSelectOptions.filter(option =>
    option.label.toLowerCase().includes(filterValue.value.toLowerCase()),
  );
  // If no option matches the filter exactly, display creation option
  if (!initialSelectOptions.some(option => option.value === filterValue.value)) {
    options.push({ label: `Create new option "${filterValue.value}"`, value: CREATE_NEW });
  }
  return options;
});

const createItemId = (value: string) => `select-create-typeahead-${value.replace(' ', '-')}`;

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

function selectOption(value: string, content: string) {
  // eslint-disable-next-line no-console
  console.log('selected', content);

  inputValue.value = content;
  filterValue.value = '';
  selected.value = value;
  closeMenu();
}

function onSelect(_event: Event | undefined, value?: MenuItemId | null) {
  if (typeof value !== 'string' || !value) {
    return;
  }
  if (value === CREATE_NEW) {
    if (!initialSelectOptions.some(item => item.label === filterValue.value)) {
      initialSelectOptions = [...initialSelectOptions, { value: filterValue.value, label: filterValue.value }];
    }
    selected.value = filterValue.value;
    filterValue.value = '';
    closeMenu();
  } else {
    const optionText = selectOptions.value.find(option => option.value === value)?.label;
    selectOption(value, optionText ?? value);
  }
}

function onTextInputChange(value: string) {
  filterValue.value = value;
  resetActiveAndFocusedItem();

  if (value !== selected.value) {
    selected.value = '';
  }

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
      if (wasOpen && focusedItem && !focusedItem.ariaDisabled) {
        onSelect(undefined, focusedItem.value);
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
  selected.value = '';
  inputValue.value = '';
  filterValue.value = '';
  resetActiveAndFocusedItem();
  textInput.value?.focus();
}
</script>
