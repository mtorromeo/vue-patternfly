<template>
  <pf-panel v-if="searchMenuOpen" v-bind="ouiaProps" ref="panelRef" variant="raised">
    <pf-panel-main>
      <pf-panel-main-body>
        <pf-form>
          <pf-form-group
            v-for="(attribute, index) in normalizedAttributes"
            :key="`${attribute.attr}_${index}`"
            :field-id="`${attribute.attr}_${index}`"
          >
            <template #label>
              <slot :name="`attribute:${attribute.attr}`">{{ attribute.display }}</slot>
            </template>
            <pf-text-input
              :id="`${attribute.attr}_${index}`"
              ref="attrInputRefs"
              :model-value="attrValueMap[attribute.attr] ?? ''"
              type="text"
              @update:model-value="setAttrValue(attribute.attr, String($event))"
            />
          </pf-form-group>

          <pf-form-group :field-id="hasWordsId">
            <template #label>
              <slot name="words-attr-label">{{ wordsAttrLabel }}</slot>
            </template>
            <pf-text-input
              :id="hasWordsId"
              :model-value="attrValueMap.haswords ?? ''"
              type="text"
              @update:model-value="setAttrValue('haswords', String($event))"
            />
          </pf-form-group>

          <slot />

          <pf-form-group action-group>
            <pf-action-list>
              <pf-action-list-group>
                <pf-action-list-item>
                  <pf-button variant="primary" type="submit" :disabled="!value" @click.prevent="onSearch">
                    {{ submitSearchButtonLabel }}
                  </pf-button>
                </pf-action-list-item>
                <pf-action-list-item v-if="onClear">
                  <pf-button variant="link" type="reset" @click="onClear">
                    {{ resetButtonLabel }}
                  </pf-button>
                </pf-action-list-item>
              </pf-action-list-group>
            </pf-action-list>
          </pf-form-group>
        </pf-form>
      </pf-panel-main-body>
    </pf-panel-main>
  </pf-panel>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag for toggling the open/close state of the advanced search menu. */
  searchMenuOpen?: boolean;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  wordsAttrLabel?: string;
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: (string | SearchAttribute)[];
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;
  /** A callback for when the user clicks the clear button. */
  onClear?: (event: Event) => void;
  /** Function which builds an attribute-value map by parsing the value in the search input.
   * Defaults to parsing the model value with the advancedSearchDelimiter.
   */
  getAttrValueMap?: () => Record<string, string>;
}
</script>

<script lang="ts" setup>
import { computed, inject, useId, useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import { buildQueryString, getAttrValueMap as parseAttrValueMap, type SearchAttribute, SearchInputKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfTextInput from '../TextInput.vue';
import PfButton from '../Button.vue';
import PfPanel from '../Panel/Panel.vue';
import PfPanelMain from '../Panel/PanelMain.vue';
import PfPanelMainBody from '../Panel/PanelMainBody.vue';
import PfForm from '../Form/Form.vue';
import PfFormGroup from '../Form/FormGroup.vue';
import PfActionList from '../ActionList/ActionList.vue';
import PfActionListGroup from '../ActionList/ActionListGroup.vue';
import PfActionListItem from '../ActionList/ActionListItem.vue';
import { useEventListener } from '@vueuse/core';

defineOptions({
  name: 'PfAdvancedSearchMenu',
});

const props = withDefaults(defineProps<Props>(), {
  attributes: (): (string | SearchAttribute)[] => [],
  resetButtonLabel: 'Reset',
  submitSearchButtonLabel: 'Search',
  wordsAttrLabel: 'Has words',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Value of the search input. */
const value = defineModel<string>('modelValue', { default: '' });

const emit = defineEmits<{
  /** A callback for when the search button is clicked. */
  (name: 'search', value: string, event: Event, attrValueMap: Record<string, string>): void;
  /** A callback for when the menu requests to be opened or closed. */
  (name: 'toggleAdvancedMenu', event: Event): void;
}>();

defineSlots<{
  /** Additional elements added after the attributes in the form. */
  default?: (props?: Record<never, never>) => VNode[];
  /** Label of the field of a single attribute, replacing its display name. */
  [K: `attribute:${string}`]: (props?: Record<never, never>) => VNode[];
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  'words-attr-label'?: (props?: Record<never, never>) => VNode[];
}>();

if (props.attributes.length > 0 && !props.advancedSearchDelimiter) {
  console.error(
    'AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop',
  );
}

const searchInput = inject(SearchInputKey, undefined);
const hasWordsId = useId();
const panel = useTemplateRef('panelRef');
const attrInputs = useTemplateRef('attrInputRefs');

useEventListener('mousedown', onDocClick);
useEventListener('touchstart', onDocClick);
useEventListener('keydown', onEscPress);

const normalizedAttributes = computed(() =>
  props.attributes.map(attribute =>
    typeof attribute === 'string' ? { attr: attribute, display: attribute } : attribute,
  ),
);

function currentAttrValueMap() {
  return props.getAttrValueMap?.() ?? parseAttrValueMap(value.value, props.advancedSearchDelimiter);
}

const attrValueMap = computed(currentAttrValueMap);

function setAttrValue(attribute: string, attributeValue: string) {
  const newMap = currentAttrValueMap();
  newMap[attribute] = attributeValue;
  value.value = buildQueryString(newMap, props.advancedSearchDelimiter);
}

function onSearch(event: Event) {
  emit('search', value.value, event, currentAttrValueMap());
  if (props.searchMenuOpen) {
    emit('toggleAdvancedMenu', event);
  }
}

function onDocClick(event: Event) {
  const target = event.target as Node;
  const clickedWithinSearchInput = searchInput?.$el.value?.contains(target) || panel.value?.$el.contains(target);
  if (props.searchMenuOpen && !clickedWithinSearchInput) {
    emit('toggleAdvancedMenu', event);
  }
}

function onEscPress(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.searchMenuOpen) {
    emit('toggleAdvancedMenu', event);
  }
}

defineExpose({
  /** Focuses the field of the first attribute. */
  focus() {
    attrInputs.value?.[0]?.focus();
  },
});
</script>
