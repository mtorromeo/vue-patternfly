<template>
  <pf-panel v-if="searchMenuOpen" variant="raised">
    <pf-panel-main>
      <pf-panel-main-body>
        <pf-form>
          <template v-for="(attribute, index) in normalizedAttributes">
            <pf-form-group :field-id="`${attribute.attr}_${index}`">
              <template #label>
                <slot :name="`attribute:${attribute.attr}`">{{ attribute.display }}</slot>
              </template>
              <pf-text-input
                :ref="el => index === 0 ? firstAttrRef = el as any : null"
                type="text"
                :id="`${attribute.attr}_${index}`"
                :value="getValue(attribute.attr)"
                @change="onValueChange(attribute.attr, $event)"
              />
            </pf-form-group>

            <generate-id #="{id}">
              <pf-form-group :field-id="id">
                <template #label>
                  <slot name="words-attr-label">Has words</slot>
                </template>
                <pf-text-input
                  type="text"
                  :id="id"
                  :value="getValue('haswords')"
                  @change="onValueChange('haswords', $event)"
                />
              </pf-form-group>
            </generate-id>
          </template>

          <slot />

          <pf-action-group>
            <pf-button variant="primary" type="submit" @click.prevent="onSearch" :disabled="!value">
              {{ submitSearchButtonLabel }}
            </pf-button>
            <pf-button v-if="onClear" variant="link" type="reset" @click="onClear">
              {{ resetButtonLabel }}
            </pf-button>
          </pf-action-group>
        </pf-form>
      </pf-panel-main-body>
    </pf-panel-main>
  </pf-panel>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue';
import { useManagedProp } from '../../use';
import { type SearchAttribute, SearchInputKey } from './SearchInput.vue';

import GenerateId from '../../helpers/GenerateId.vue';
import PfTextInput from '../TextInput.vue';
import PfButton from '../Button.vue';
import PfPanel from '../Panel/Panel.vue';
import PfPanelMain from '../Panel/PanelMain.vue';
import PfPanelMainBody from '../Panel/PanelMainBody.vue';
import PfForm from '../Form/Form';
import PfFormGroup from '../Form/FormGroup.vue';
import PfActionGroup from '../Form/ActionGroup.vue';
import { useEventListener } from '@vueuse/core';

const props = withDefaults(defineProps<{
  /** Value of the search input */
  modelValue?: string;
  /** Flag for toggling the open/close state of the advanced search menu */
  searchMenuOpen?: boolean;
  /** Label for the buttons which reset the advanced search form and clear the search input */
  resetButtonLabel?: string;
  /** Label for the buttons which called the onSearch event handler */
  submitSearchButtonLabel?: string;
  /** Array of attribute values used for dynamically generated advanced search */
  attributes?: (string | SearchAttribute)[];
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props */
  advancedSearchDelimiter?: string;
  /** A callback for when the user clicks the clear button */
  onClear?: (event: Event) => void;
  /** Function which builds an attribute-value map by parsing the value in the search input */
  getAttrValueMap?: () => { [key: string]: string };
}>(), {
  attributes: [] as any,
  resetButtonLabel: 'Reset',
  submitSearchButtonLabel: 'Search',
});

const emit = defineEmits({
  'update:modelValue': (v: string) => true,

  /** A callback for when the input value changes */
  change: (value: string, event: Event) => true,
  /** A callback for when the search button clicked changes */
  search: (
    value: string,
    event: Event,
    attrValueMap: { [key: string]: string }
  ) => true,
  /** Function called to toggle the advanced search menu */
  toggleAdvancedMenu: (event: Event) => true,
});

const value = useManagedProp('modelValue', '');
const firstAttrRef = ref<InstanceType<typeof PfTextInput> | null>(null);
const searchInput = inject(SearchInputKey);

useEventListener('mousedown', onDocClick);
useEventListener('touchstart', onDocClick);
useEventListener('keydown', onEscPress);

const normalizedAttributes = computed(() => {
  const norm = [];
  for (const attribute of props.attributes) {
    norm.push({
      attr: typeof attribute === 'string' ? attribute : attribute.attr,
      display: typeof attribute === 'string' ? attribute : attribute.display,
    });
  }
  return norm;
});

function onValueChange(attribute: string, event: Event) {
  if (!(event.currentTarget instanceof HTMLInputElement)) {
    return;
  }

  const newMap = props.getAttrValueMap();
  newMap[attribute] = event.currentTarget.value;
  let updatedValue = '';
  Object.entries(newMap).forEach(([k, v]) => {
    if (v.trim() !== '') {
      if (k !== 'haswords') {
        updatedValue = `${updatedValue} ${k}${props.advancedSearchDelimiter}${v}`;
      } else {
        updatedValue = `${updatedValue} ${v}`;
      }
    }
  });
  updatedValue = updatedValue.replace(/^\s+/g, '');

  emit('change', updatedValue, event);
}

const onSearch = (event: Event) => {
  emit('search', value.value, event, props.getAttrValueMap());
  if (props.searchMenuOpen) {
    emit('toggleAdvancedMenu', event);
  }
}

function getValue(attribute: string) {
  const map = props.getAttrValueMap();
  return map.hasOwnProperty(attribute) ? map[attribute] : '';
}

function onDocClick(event: Event) {
  const clickedWithinSearchInput = searchInput?.el.value?.contains(event.target as Node);
  if (props.searchMenuOpen && !clickedWithinSearchInput) {
    emit('toggleAdvancedMenu', event);
  }
}

function onEscPress(event: KeyboardEvent) {
  const keyCode = event.keyCode || event.which;
  if (
    props.searchMenuOpen &&
    keyCode === 27 && // Escape
    searchInput?.el.value?.contains(event.target as Node)
  ) {
    emit('toggleAdvancedMenu', event);
    searchInput?.input.value?.focus();
  }
}
</script>
