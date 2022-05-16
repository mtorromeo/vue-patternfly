<template>
  <doc-page title="Form Select">
    <component-title name="pf-form-select" />

    <pre v-md>
      A form **select** embeds browser native select lists into a form.
      ## Usage
      If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a custom select list.
      **Note**: Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI.
      [View PatternFly design guidelines](https://www.patternfly.org/v4/components/form-select/design-guidelines)
      ## Differences from patternfly-react
      - The `FormSelectOptionGroup` component is not implemented as it does not provide any value over native `&lt;optgroup>`.
      - The `value` prop is replaced by `modelValue` so that the component can be used with `v-model`.
      See [common differences from patternfly-react](#/).
      # PfFormSelectOption `pf-form-select-option`
      Wraps a native `&lt;option>` element and adds a `placeholder` identifier flag.
      You can either use the default slot or the `label` prop to render the content.
    </pre>

    <story-canvas title="Example">
      <pf-form-select required>
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
    </story-canvas>
  </doc-page>
</template>
