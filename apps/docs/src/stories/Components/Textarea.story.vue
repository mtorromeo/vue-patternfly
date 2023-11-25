<template>
  <doc-page title="Textarea">
    <template #description>A <b>text area</b> component is used for entering a paragraph of text that is longer than one line.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Textarea.vue" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - Added the `pattern` prop with a custom implementation that emulates the [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute of input elements.
      - The `value` prop is replaced by `modelValue` so that the component can be used with `v-model`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Example">
      <pf-textarea pattern="[0-9\s]+" placeholder="Numbers and spaces only" />
    </story-canvas>
  </doc-page>
</template>
