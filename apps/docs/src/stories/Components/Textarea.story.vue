<template>
  <doc-page title="Text area">
    <template #description
      >A <b>text area</b> component is used for entering a paragraph of text that is longer than one line.</template
    >

    <template #apidocs>
      <component-info name="PfTextarea" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value is bound with `v-model` (`value`, `onChange`), which supports the `number`, `trim` and `lazy` modifiers; without `v-model`, `model-value` is the initial value (`defaultValue`).
      - `isRequired` is the native `required` attribute, and `readonly` makes the text area read only without the read only styling of `read-only-variant`.
      - The `pattern` prop emulates the [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute of input elements, and `auto-validate` validates the text area with the browser constraint validation; the validated state is emitted with `update:validated`.
      - `max-height` and `max-width` limit the size of the text area.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-textarea v-model="basic" aria-label="text area example" />
    </story-canvas>

    <story-canvas title="Invalid">
      <pf-textarea
        v-model="invalid"
        required
        validated="error"
        :auto-validate="false"
        aria-label="invalid text area example"
      />
    </story-canvas>

    <story-canvas title="Validated">
      <pf-form>
        <pf-form-group label="Comments:" field-id="selection">
          <pf-textarea
            id="selection"
            :model-value="validatedValue"
            required
            :validated="validated"
            :auto-validate="false"
            aria-label="invalid text area example"
            @update:model-value="onValidatedChange"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item :variant="validated === 'default' ? undefined : validated">
                {{ helperText }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Vertically resizable">
      <pf-textarea v-model="vertical" resize-orientation="vertical" aria-label="text area vertical resize example" />
    </story-canvas>

    <story-canvas title="Horizontally resizable">
      <pf-textarea
        v-model="horizontal"
        resize-orientation="horizontal"
        aria-label="text area horizontal resize example"
      />
    </story-canvas>

    <story-canvas title="Not resizable">
      <pf-textarea v-model="notResizable" resize-orientation="none" aria-label="text area resize none example" />
    </story-canvas>

    <story-canvas title="Uncontrolled">
      <template #intro>
        <pre v-md>
          Without `v-model`, `model-value` sets the initial value of the text area.
        </pre>
      </template>

      <pf-textarea model-value="default value" aria-label="uncontrolled text area example" />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-textarea aria-label="disabled text area example" disabled />
    </story-canvas>

    <story-canvas title="Read only">
      <div style="margin-bottom: 12px">
        <pf-checkbox id="isPlain" v-model="plain" label="Plain read only variant" />
      </div>
      <pf-textarea
        aria-label="read only text area example"
        model-value="read only text area example"
        :read-only-variant="plain ? 'plain' : 'default'"
      />
    </story-canvas>

    <story-canvas title="Auto resizing">
      <pf-textarea v-model="autoResizing" aria-label="auto resizing text area example" auto-resize />
    </story-canvas>

    <story-canvas title="With regex pattern validation">
      <template #intro>
        <pre v-md>
          The `pattern` prop validates the value against a regular expression, like the attribute of input elements.
        </pre>
      </template>

      <pf-textarea pattern="[0-9\s]+" placeholder="Numbers and spaces only" aria-label="numbers and spaces only" />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue';

type Validated = 'default' | 'error' | 'warning' | 'success';

const basic = ref('');
const invalid = ref('');
const vertical = ref('');
const horizontal = ref('');
const notResizable = ref('');
const plain = ref(false);
const autoResizing = ref('');

const validatedValue = ref('');
const validated = ref<Validated>('default');
const helperText = ref('Share your thoughts.');
let timer: ReturnType<typeof setTimeout> | undefined;

function onValidatedChange(value: string) {
  validatedValue.value = value;
  validated.value = 'default';
  helperText.value = 'Validating...';
  // simulate a network call
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (!value.length) {
      validated.value = 'warning';
      helperText.value = 'You must have something to say';
    } else if (value.length >= 10) {
      validated.value = 'success';
      helperText.value = 'Thanks for your comments!';
    } else {
      validated.value = 'error';
      helperText.value = "You're being too brief, please enter at least 10 characters.";
    }
  }, 2000);
}

onBeforeUnmount(() => clearTimeout(timer));
</script>
