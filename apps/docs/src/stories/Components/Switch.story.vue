<template>
  <doc-page title="Switch">
    <template #description
      >A <b>switch</b> toggles the state of a setting (between on and off). Switches and checkboxes can often be used
      interchangeably, but the switch provides a more explicit, visible representation on a setting.</template
    >

    <template #apidocs>
      <component-info name="PfSwitch" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The checked state is bound with `v-model:checked` (`isChecked`, `onChange`) and defaults to unchecked; without `v-model`, `checked` is the initial state (`defaultChecked`).
      - `check-icon` replaces `hasCheckIcon` and `reversed` replaces `isReversed`.
      - The label can also be the `label` slot.
      - With a `name`, `off-value` is submitted by a hidden input while the switch is unchecked.
      - `class` and `label-attrs` go on the wrapping label; every other attribute is forwarded to the input.
      See [common differences from patternfly-react](#/).

      ## Examples
      To keep inline with accessibility guidelines, the label for a switch must never dynamically change. A dynamically changing label (such as one label for an "on" state and another label for an "off" state) can be confusing as the contexts for each label changes as the switch state does. This applies to both visible text labels as well as labels provided via `aria-label`.
    </pre>

    <story-canvas title="Basic">
      <pf-switch
        id="simple-switch"
        v-model:checked="basic"
        label="Togglable option for basic example"
        ouia-id="BasicSwitch"
      />
    </story-canvas>

    <story-canvas title="Reversed layout">
      <pf-switch
        id="reversed-switch"
        v-model:checked="reversed"
        label="Togglable option for reversed example"
        reversed
      />
    </story-canvas>

    <story-canvas title="Without label">
      <pf-switch
        id="no-label-switch-on"
        v-model:checked="withoutLabel"
        aria-label="Togglable option for no visible label example"
      />
    </story-canvas>

    <story-canvas title="Checked with label">
      <pf-switch
        id="checked-with-label-switch-on"
        v-model:checked="checkedWithLabel"
        label="Togglable option for check icon example"
        check-icon
      />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-switch id="disabled-switch-on" label="Togglable option for disabled checked example" checked disabled />
      <br />
      <pf-switch id="disabled-switch-off" label="Togglable option for disabled unchecked example" disabled />
      <br />
      <pf-switch
        id="disabled-no-label-switch-on"
        aria-label="Togglable option for checked with no visible label example"
        checked
        disabled
      />
      <br />
      <pf-switch
        id="disabled-no-label-switch-off"
        aria-label="Togglable option for unchecked with no visible label example"
        disabled
      />
    </story-canvas>

    <story-canvas title="Uncontrolled">
      <template #intro>
        <pre v-md>
          Without `v-model:checked`, the switch keeps its own state, starting from the `checked` prop.
        </pre>
      </template>

      <pf-switch
        id="uncontrolled-switch-no-label"
        aria-label="Togglable option for uncontrolled and no visible label example"
      />
      <br />
      <pf-switch id="uncontrolled-switch-with-label" label="Togglable option for uncontrolled example" />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const basic = ref(true);
const reversed = ref(true);
const withoutLabel = ref(true);
const checkedWithLabel = ref(true);
</script>
