<template>
  <doc-page title="Text input">
    <template #description>A <b>text input</b> is used to gather free-form text from a user.</template>

    <template #apidocs>
      <component-info name="PfTextInput" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value is bound with `v-model` (`value`, `onChange`), which supports the `number`, `trim` and `lazy` modifiers; number inputs emit numbers.
      - The custom icon is the `icon` slot (`customIcon`).
      - `expandedProps` is replaced by `expanded` and `expanded-controls`: with the id of the controlled element, the input becomes a combobox with `aria-expanded`.
      - `isRequired` is the native `required` attribute, and `readonly` makes the input read only without the read only styling of `read-only-variant`.
      - `auto-validate` validates the input with the browser constraint validation, and `no-status-icon` hides the status icon; the validated state is emitted with `update:validated`.
      - `start-truncated` replaces `isStartTruncated` (and the deprecated `isLeftTruncated`).
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-text-input v-model="basic" type="text" aria-label="text input example" />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-text-input
        model-value="disabled text input example"
        type="text"
        aria-label="disabled text input example"
        disabled
      />
    </story-canvas>

    <story-canvas title="Truncated at start">
      <pf-text-input v-model="truncated" start-truncated type="text" aria-label="start-truncated text input example" />
    </story-canvas>

    <story-canvas title="Read only">
      <div style="margin-bottom: 12px">
        <pf-checkbox id="isPlain" v-model="plain" label="Plain read only variant" />
      </div>
      <pf-text-input
        model-value="read only text input example"
        type="text"
        :read-only-variant="plain ? 'plain' : 'default'"
        aria-label="readonly input example"
      />
    </story-canvas>

    <story-canvas title="Invalid">
      <pf-text-input
        v-model="invalid"
        required
        validated="error"
        :auto-validate="false"
        type="text"
        aria-label="invalid text input example"
      />
    </story-canvas>

    <story-canvas title="Select text using ref">
      <template #intro>
        <pre v-md>
          The input element is exposed as `input`, and `focus` events are emitted, so the text can be selected when the input gets focus.
        </pre>
      </template>

      <pf-text-input
        ref="selectInput"
        v-model="selectAll"
        aria-label="select-all"
        @focus="selectInput?.input?.select()"
      />
    </story-canvas>

    <story-canvas title="Custom icon">
      <pf-text-input v-model="calendar" type="text" aria-label="text input example with calendar icon">
        <template #icon><calendar-icon /></template>
      </pf-text-input>
      <br />
      <br />
      <pf-text-input v-model="clock" type="text" aria-label="text input example with clock icon">
        <template #icon><clock-icon /></template>
      </pf-text-input>
    </story-canvas>

    <story-canvas title="Custom icon and invalid">
      <pf-text-input
        v-model="calendarInvalid"
        type="text"
        validated="error"
        :auto-validate="false"
        aria-label="text input example with calendar icon"
      >
        <template #icon><calendar-icon /></template>
      </pf-text-input>
    </story-canvas>

    <story-canvas title="Numeric">
      <template #intro>
        <pre v-md>
          With `type="number"`, the model value is a number.
        </pre>
      </template>

      <pf-text-input v-model="numeric" type="number" aria-label="numeric text input example" />
    </story-canvas>

    <story-canvas title="Automatic validation">
      <template #intro>
        <pre v-md>
          `auto-validate` validates the input against its constraints (`required`, `pattern`, …) on enter or form submit by default, or on `blur`, `change` or `input`. `no-status-icon` hides the status icon.
        </pre>
      </template>

      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (does not validate)"
        aria-label="does not validate"
        :auto-validate="false"
      />
      <br />
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on enter/submit)"
        aria-label="validates on enter/submit"
        auto-validate
      />
      <br />
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on blur)"
        aria-label="validates on blur"
        auto-validate="blur"
      />
      <br />
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on change)"
        aria-label="validates on change"
        auto-validate="change"
      />
      <br />
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (validates on input)"
        aria-label="validates on input"
        auto-validate="input"
      />
      <br />
      <pf-text-input
        required
        pattern="[0-9a-f]*"
        placeholder="hexadecimal value (no status icon)"
        aria-label="no status icon"
        auto-validate="input"
        no-status-icon
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import CalendarIcon from '@vue-patternfly/icons/calendar-icon';
import ClockIcon from '@vue-patternfly/icons/clock-icon';

const basic = ref('');
const truncated = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
);
const plain = ref(false);
const invalid = ref('');
const selectAll = ref('select all on click');
const selectInput = useTemplateRef('selectInput');
const calendar = ref('');
const clock = ref('');
const calendarInvalid = ref('');
const numeric = ref(0);
</script>
