<template>
  <doc-page title="Text Input">
    <component-title name="pf-text-input" />

    <story-canvas title="Basic">
      <pf-text-input v-model="text1" aria-label="text input example" />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-text-input
        disabled
        value="disabled text input example"
        aria-label="disabled text input example"
      />
    </story-canvas>

    <story-canvas title="Read only">
      <pf-text-input
        readonly
        value="read only text input example"
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
        v-model="text2"
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
    </story-canvas>

    <story-canvas title="Truncated on left">
      <pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </story-canvas>

    <story-canvas title="Select all">
      <pf-text-input
        value="select all on click"
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
import { ref } from "vue";
import ClockIcon from '@vue-patternfly/icons/clock-icon';

const text1 = ref('');
const text2 = ref('');
</script>
