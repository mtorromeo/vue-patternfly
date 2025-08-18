<template>
  <doc-page title="Text Input">
    <template #description>A <b>text input</b> is used to gather free-form text from a user.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/TextInput.vue" />
    </template>

    <story-canvas title="Basic">
      <pf-text-input v-model="text1" aria-label="text input example" />
      <pre>Value: {{ JSON.stringify(text1) }}</pre>
    </story-canvas>

    <story-canvas title="Numeric">
      <pf-text-input v-model="number1" type="number" aria-label="text input example" />
      <pre>Value: {{ JSON.stringify(number1) }}</pre>
    </story-canvas>

    <story-canvas title="Number modifier">
      <pf-text-input v-model.number="number2" aria-label="text input example" />
      <pre>Value: {{ JSON.stringify(number2) }}</pre>
    </story-canvas>

    <story-canvas title="Trim modifier">
      <pf-text-input v-model.trim="text2" aria-label="text input example" />
      <pre>Value: {{ JSON.stringify(text2) }}</pre>
    </story-canvas>

    <story-canvas title="Lazy modifier">
      <pf-text-input v-model.lazy="text3" aria-label="text input example" />
      <pre>Value: {{ JSON.stringify(text3) }}</pre>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-text-input
        disabled
        model-value="disabled text input example"
        aria-label="disabled text input example"
      />
    </story-canvas>

    <story-canvas title="Read only">
      <pf-text-input
        readonly
        model-value="read only text input example"
        aria-label="read only text input example"
      />
    </story-canvas>

    <story-canvas title="Validation">
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (does not validate)"
        aria-label="does not validate"
        :auto-validate="false"
      />
      <br>
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on enter/submit)"
        aria-label="validates on enter/submit"
        auto-validate
      />
      <br>
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on blur)"
        aria-label="validates on blur"
        auto-validate="blur"
      />
      <br>
      <pf-text-input
        v-model="text4"
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on change)"
        aria-label="validates on change"
        auto-validate="change"
      />
      <br>
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on input)"
        aria-label="validates on input"
        auto-validate="input"
      />
      <br>
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (no status icon)"
        aria-label="no status icon"
        auto-validate="input"
        no-status-icon
      />
    </story-canvas>

    <story-canvas title="Truncated on left">
      <pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </story-canvas>

    <story-canvas title="Select all">
      <pf-text-input
        model-value="select all on click"
        aria-label="select-all"
        @focus="($event.currentTarget as HTMLInputElement).select()"
      />
    </story-canvas>

    <story-canvas title="Custom icon">
      <pf-text-input aria-label="text input example">
        <template #icon>
          <ClockIcon />
        </template>
      </pf-text-input>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import ClockIcon from '@vue-patternfly/icons/clock-icon';

const text1: Ref<string | null> = ref(null);
const text2 = ref('');
const text3 = ref('');
const text4 = ref('');
const number1 = ref(0);
const number2 = ref(0);
</script>
