<template>
  <doc-page title="TextArea">
    <component-title name="pf-textarea" />

    <md>
      ## Differences from patternfly-react
      - Added the `pattern` prop with a custom implementation that emulates the [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute of input elements.
      - The `value` prop is replaced by `modelValue` so that the component can be used with `v-model`.
      See [common differences from patternfly-react](/story/intro--page#common-differences-from-patternfly-react).
    </md>

    <story-canvas title="Example">
      <pf-textarea pattern="[0-9\s]+" placeholder="Numbers and spaces only" />
    </story-canvas>
  </doc-page>
</template>
