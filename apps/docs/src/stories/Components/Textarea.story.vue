<template>
  <doc-page title="Textarea">
    <template #description>A <b>text area</b> component is used for entering a paragraph of text that is longer than one line.</template>

    <template #apidocs>
      <component-info name="PfTextarea" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - Added the `pattern` prop with a custom implementation that emulates the [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute of input elements.
      - The `value` prop is replaced by `modelValue` so that the component can be used with `v-model`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="With regex pattern validation">
      <pf-textarea pattern="[0-9\s]+" placeholder="Numbers and spaces only" />
    </story-canvas>

    <story-canvas title="Vertically resizable">
      <pf-textarea resize-orientation="vertical" aria-label="text area vertical resize example" />
    </story-canvas>

    <story-canvas title="Horizontally resizable">
      <pf-textarea resize-orientation="horizontal" aria-label="text area horizontal resize example" />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-textarea aria-label="Disabled text area example" disabled />
    </story-canvas>

    <story-canvas title="Read only">
      <div style="margin-bottom: 12px">
        <pf-checkbox v-model="plain" label="Plain read only variant" />
      </div>
      <pf-textarea aria-label="read only text area example" model-value="read only text area example" :readonly-variant="plain ? 'plain' : 'default'" />
    </story-canvas>

    <story-canvas title="Auto resizing">
      <pf-textarea aria-label="auto resizing text area example" auto-resize />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const plain = ref(false);
</script>
