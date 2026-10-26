<template>
  <doc-page title="Form Select">
    <template #description>A <b>form select</b> embeds browser native select lists into a form.</template>

    <template #apidocs>
      <component-info name="PfFormSelect" />
      <component-info name="PfFormSelectOption" />
      <component-info name="PfFormSelectOptionGroup" />
    </template>

    <pre v-md>
      ## Usage
      If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a custom select list.
      **Note**: Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI.

      ## Differences from patternfly-react
      - The `value` and `onChange` props are replaced by `v-model`.
      - The `multiple` prop renders a multiple select, whose `v-model` is an array of values.
      - The content of `pf-form-select-option` can also be passed in its default slot, overriding the `label` prop.
      - The placeholder styling also applies to placeholder options nested in a `pf-form-select-option-group`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-form-select v-model="basic" aria-label="FormSelect Input" ouia-id="BasicFormSelect">
        <pf-form-select-option value="please choose" label="Select one" disabled />
        <pf-form-select-option value="mr" label="Mr" />
        <pf-form-select-option value="miss" label="Miss" />
        <pf-form-select-option value="mrs" label="Mrs" />
        <pf-form-select-option value="ms" label="Ms" />
        <pf-form-select-option value="dr" label="Dr" />
        <pf-form-select-option value="other" label="Other" />
      </pf-form-select>
    </story-canvas>

    <story-canvas title="Validated">
      <pf-form>
        <pf-form-group label="Selection:" field-id="selection">
          <pf-form-select
            id="selection"
            :model-value="validatedValue"
            :validated="validated"
            aria-label="FormSelect Input"
            @update:model-value="onValidatedChange"
          >
            <pf-form-select-option value="" label="Select a number" placeholder />
            <pf-form-select-option value="1" label="One" />
            <pf-form-select-option value="2" label="Two" />
            <pf-form-select-option value="3" label="Three - the only valid option" />
          </pf-form-select>
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item :variant="validated">{{ helperText }}</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-form-select v-model="disabledValue" disabled aria-label="FormSelect Input">
        <pf-form-select-option value="please choose" label="Select one" disabled />
        <pf-form-select-option value="mr" label="Mr" />
        <pf-form-select-option value="miss" label="Miss" />
        <pf-form-select-option value="mrs" label="Mrs" />
        <pf-form-select-option value="ms" label="Ms" />
        <pf-form-select-option value="dr" label="Dr" />
        <pf-form-select-option value="other" label="Other" />
      </pf-form-select>
    </story-canvas>

    <story-canvas title="Grouped">
      <pf-form-select v-model="grouped" aria-label="FormSelect Input">
        <pf-form-select-option-group label="Group1">
          <pf-form-select-option value="1" label="The first option" />
          <pf-form-select-option value="2" label="Second option is selected by default" />
        </pf-form-select-option-group>
        <pf-form-select-option-group label="Group2">
          <pf-form-select-option value="3" label="The third option" />
          <pf-form-select-option value="4" label="The fourth option" />
        </pf-form-select-option-group>
        <pf-form-select-option-group label="Group3" disabled>
          <pf-form-select-option value="5" label="The fifth option" />
          <pf-form-select-option value="6" label="The sixth option" />
        </pf-form-select-option-group>
      </pf-form-select>
    </story-canvas>

    <story-canvas title="Multiple">
      <template #intro>
        <pre v-md>
          With the `multiple` prop the form select renders a native multiple select, and its `v-model` is the array of the selected values.
        </pre>
      </template>
      <pf-form-select v-model="multipleValues" multiple aria-label="Colors">
        <pf-form-select-option value="white" label="White" />
        <pf-form-select-option value="black" label="Black" />
        <pf-form-select-option value="red" label="Red" />
        <pf-form-select-option value="green" label="Green" />
        <pf-form-select-option value="blue" label="Blue" />
        <pf-form-select-option value="yellow" label="Yellow" />
        <pf-form-select-option value="purple" label="Purple" disabled />
      </pf-form-select>
      <p>Values: {{ JSON.stringify(multipleValues) }}</p>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Validate = 'success' | 'warning' | 'error' | 'default';

const basic = ref('mrs');
const disabledValue = ref('mrs');
const grouped = ref('2');
const multipleValues = ref<string[]>([]);

const validatedValue = ref('');
const helperText = ref('');
const validated = ref<Validate>('default');

function onValidatedChange(value: string | string[] | null) {
  const selected = typeof value === 'string' ? value : '';
  validatedValue.value = selected;
  validated.value = 'default';
  helperText.value = 'Validating...';
  // simulates a network call validating the selection
  setTimeout(() => {
    if (selected === '3') {
      validated.value = 'success';
      helperText.value = 'You chose wisely';
    } else if (selected === '') {
      validated.value = 'warning';
      helperText.value = 'You must select a value';
    } else {
      validated.value = 'error';
      helperText.value = 'You must chose Three (thought that was obvious)';
    }
  }, 2000);
}
</script>
