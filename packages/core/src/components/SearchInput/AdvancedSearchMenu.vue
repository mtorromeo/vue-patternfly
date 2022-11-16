<template>
  <pf-panel v-if="searchMenuOpen" variant="raised">
    <pf-panel-main>
      <pf-panel-main-body>
        <pf-form>
          <pf-form-group v-for="(attribute, index) in normalizedAttributes" :field-id="`${attribute.attr}_${index}`">
            <template #label>
              <slot :name="`attribute:${attribute.attr}`">{{ attribute.display }}</slot>
            </template>
            <pf-text-input
              :ref="el => index === 0 ? firstAttrRef = el as any : null"
              type="text"
              :id="`${attribute.attr}_${index}`"
              v-model="attribute.computed.value"
            />
          </pf-form-group>

          <pf-form-group :field-id="hasWordsId">
            <template #label>
              <slot name="words-attr-label">Has words</slot>
            </template>
            <pf-text-input
              type="text"
              :id="hasWordsId"
              v-model="hasWords"
            />
          </pf-form-group>

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
import { computed, inject, type Ref, ref } from 'vue';
import { useManagedProp } from '../../use';
import { type SearchAttribute, SearchInputKey } from './SearchInput.vue';

import PfTextInput from '../TextInput.vue';
import PfButton from '../Button.vue';
import PfPanel from '../Panel/Panel.vue';
import PfPanelMain from '../Panel/PanelMain.vue';
import PfPanelMainBody from '../Panel/PanelMainBody.vue';
import PfForm from '../Form/Form';
import PfFormGroup from '../Form/FormGroup.vue';
import PfActionGroup from '../Form/ActionGroup.vue';
import { useEventListener } from '@vueuse/core';
import { getUniqueId } from '../../util';

const props = withDefaults(defineProps<{
  /** Value of the search input. */
  modelValue?: string;
  /** Flag for toggling the open/close state of the advanced search menu. */
  searchMenuOpen?: boolean;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: (string | SearchAttribute)[];
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;
  /** A callback for when the user clicks the clear button. */
  onClear?: (event: Event) => void;
  /** Function which builds an attribute-value map by parsing the value in the search input. */
  getAttrValueMap?: () => { [key: string]: string };
}>(), {
  attributes: () => [] as (string | SearchAttribute)[],
  resetButtonLabel: 'Reset',
  submitSearchButtonLabel: 'Search',
});

const emit = defineEmits({
  'update:modelValue': (v: string) => true,

  /** A callback for when the input value changes. */
  change: (value: string) => true,
  /** A callback for when the search button is clicked. */
  search: (
    value: string,
    event: Event,
    attrValueMap: { [key: string]: string }
  ) => true,
  /** A callback for when the open advanced search button is clicked. */
  toggleAdvancedMenu: (event: Event) => true,
});

const value = useManagedProp('modelValue', '', to => emit('change', to));
const firstAttrRef: Ref<InstanceType<typeof PfTextInput> | undefined> = ref();
const searchInput = inject(SearchInputKey);
const hasWordsId = getUniqueId();

useEventListener('mousedown', onDocClick);
useEventListener('touchstart', onDocClick);
useEventListener('keydown', onEscPress);

function useAttributeValue(name: string) {
  return computed({
    get() {
      const map = props.getAttrValueMap?.() ?? {};
      return map.hasOwnProperty(name) ? map[name] : '';
    },

    set(attributeValue: string) {
      const newMap = props.getAttrValueMap?.() ?? {};
      newMap[name] = attributeValue;
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

      value.value = updatedValue.replace(/^\s+/g, '');
    },
  });
}

const normalizedAttributes = computed(() => {
  const norm = [];
  for (const attribute of props.attributes) {
    const attr = typeof attribute === 'string' ? attribute : attribute.attr;
    norm.push({
      attr,
      display: typeof attribute === 'string' ? attribute : attribute.display,
      computed: useAttributeValue(attr),
    });
  }
  return norm;
});

const hasWords = useAttributeValue('haswords');

const onSearch = (event: Event) => {
  emit('search', value.value, event, props.getAttrValueMap?.() ?? {});
  if (props.searchMenuOpen) {
    emit('toggleAdvancedMenu', event);
  }
}

function onDocClick(event: Event) {
  const clickedWithinSearchInput = searchInput?.$el.value?.contains(event.target as Node);
  if (props.searchMenuOpen && !clickedWithinSearchInput) {
    emit('toggleAdvancedMenu', event);
  }
}

function onEscPress(event: KeyboardEvent) {
  if (
    props.searchMenuOpen &&
    event.key === 'Escape' &&
    searchInput?.$el.value?.contains(event.target as Node)
  ) {
    emit('toggleAdvancedMenu', event);
    searchInput?.input.value?.focus();
  }
}
</script>
