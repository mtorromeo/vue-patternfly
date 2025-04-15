<template>
  <doc-page title="Form Select">
    <template #description>A <b>form select</b> embeds browser native select lists into a form.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/FormSelect/FormSelect.vue" />
      <component-info src="packages/core/src/components/FormSelect/FormSelectOption.vue" />
    </template>

    <pre v-md>
      ## Usage
      If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a custom select list.
      **Note**: Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI.

      ## Differences from patternfly-react
      - The `FormSelectOptionGroup` component is not implemented as it does not provide any value over native `&lt;optgroup>`.
      - The `value` prop is replaced by `modelValue` so that the component can be used with `v-model`.
      See [common differences from patternfly-react](#/).
      # PfFormSelectOption `pf-form-select-option`
      Wraps a native `&lt;option>` element and adds a `placeholder` identifier flag.
      You can either use the default slot or the `label` prop to render the content.

      ## Examples
    </pre>

    <story-canvas title="Single value">
      <pf-form-select required v-model="value">
        <pf-form-select-option value="" label="Please Choose" placeholder disabled />
        <pf-form-select-option value="mr" label="Mr" />
        <pf-form-select-option value="miss" label="Miss" />
        <pf-form-select-option value="mrs" label="Mrs" />
        <pf-form-select-option value="ms" label="Ms" />
        <pf-form-select-option value="dr" label="Dr" disabled />
        <optgroup label="Group 1">
          <pf-form-select-option value="opt1" label="Option 1" />
          <pf-form-select-option value="opt2" label="Option 2" />
        </optgroup>
        <optgroup label="Group 2">
          <pf-form-select-option value="opt3">Option 3</pf-form-select-option>
          <pf-form-select-option value="opt4">Option 4</pf-form-select-option>
        </optgroup>
        <optgroup label="Group 3" disabled>
          <pf-form-select-option value="other" label="Other" />
        </optgroup>
      </pf-form-select>
      <br>
      <p>Value: {{ JSON.stringify(value) }}</p>
    </story-canvas>

    <story-canvas title="Multiple value">
      <pf-form-select required v-model="values" multiple>
        <pf-form-select-option value="" label="Please Choose" placeholder disabled />
        <pf-form-select-option value="white" label="White" />
        <pf-form-select-option value="black" label="Black" />
        <pf-form-select-option value="red" label="Red" />
        <pf-form-select-option value="green" label="Green" />
        <pf-form-select-option value="blue" label="Blue" />
        <pf-form-select-option value="yellow" label="Yellow" />
        <pf-form-select-option value="purple" label="Purple" disabled />
      </pf-form-select>
      <br>
      <p>Values: {{ JSON.stringify(values) }}</p>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const value = ref('');
const values: Ref<string[]> = ref([]);
</script>
