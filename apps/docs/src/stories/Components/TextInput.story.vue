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
      <pf-text-input left-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </story-canvas>

    <story-canvas title="Select all">
      <pf-text-input
        value="select all on click"
        aria-label="select-all"
        @focus="($event.currentTarget as HTMLInputElement).select()"
      />
    </story-canvas>

    <story-canvas title="Icon variants">
      <pf-text-input aria-label="text input example" icon-variant="calendar" />
      <br>
      <pf-text-input aria-label="text input example" icon-variant="clock" />
      <br>
      <pf-text-input
        aria-label="text input example"
        icon-dimensions="24px 24px"
        icon-url="data:image/svg+xml;charset=utf8,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot;%3E%3Cpath fill=&quot;%23a18fff&quot; d=&quot;M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z&quot;/%3E%3C/svg%3E"
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const text1 = ref('');
const text2 = ref('');
</script>
