<template>
  <doc-page title="Checkbox">
    <template #description
      >A <b>checkbox</b> is used to select a single item or multiple items, typically to choose elements to perform an
      action or to reflect a binary setting.</template
    >

    <template #apidocs>
      <component-info name="PfCheckbox" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The checked state is bound with `v-model` (`isChecked`, `onChange`); `null` makes the checkbox indeterminate. Without `v-model` the checkbox is uncontrolled.
      - `class` is applied to the wrapper element like `className`; use `input-class` for the input (`inputClassName`). Every other attribute is forwarded to the input.
      - `invalid` replaces `isValid` with inverted behavior, and `label-before-button` replaces `labelPosition="start"`.
      - The `label`, `description` and default (body) slots can replace the `label`, `description` and `body` props.
      - The `id` is generated when not set.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Controlled">
      <pf-checkbox
        id="controlled-check-1"
        :model-value="parentChecked"
        label="Parent CheckBox"
        name="check1"
        @update:model-value="
          (checked: boolean) => {
            child1Checked = checked;
            child2Checked = checked;
          }
        "
      >
        <pf-checkbox id="controlled-check-2" v-model="child1Checked" label="Child CheckBox 1" name="check2" />
        <pf-checkbox id="controlled-check-3" v-model="child2Checked" label="Child CheckBox 2" name="check3" />
      </pf-checkbox>
      <pf-checkbox id="controlled-check-4" v-model="controlledChecked" label="Controlled CheckBox" name="check4" />
    </story-canvas>

    <story-canvas title="Uncontrolled">
      <pf-checkbox id="uncontrolled-check-1" label="Uncontrolled CheckBox 1" />
      <pf-checkbox id="uncontrolled-check-2" label="Uncontrolled CheckBox 2" />
    </story-canvas>

    <story-canvas title="Reversed">
      <pf-checkbox
        id="checkbox-reversed"
        label-before-button
        label="Reversed checkbox example"
        name="checkbox-reversed"
      />
    </story-canvas>

    <story-canvas title="Label wraps">
      <template #intro>
        <pre v-md>
          You can expand the clickable area of a checkbox so that it spans wider than the checkbox label by adding the `label-wrapped` property. This allows users to select a checkbox by clicking the checkbox itself, the label, or the area between the checkbox and the label.
        </pre>
      </template>

      <pf-checkbox
        id="checkbox-label-wraps-input"
        label-wrapped
        label="Label wraps input example"
        name="checkbox-label-wraps-input"
      />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-checkbox id="disabled-check-1" label="Disabled CheckBox 1" :model-value="true" disabled />
      <pf-checkbox id="disabled-check-2" label="Disabled CheckBox 2" disabled />
    </story-canvas>

    <story-canvas title="Checkbox with description">
      <pf-checkbox
        id="description-check-1"
        label="Checkbox with description"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
      />
    </story-canvas>

    <story-canvas title="Checkbox with body">
      <pf-checkbox id="body-check-1" label="Checkbox with body" body="This is where custom content goes." />
    </story-canvas>

    <story-canvas title="Checkbox with description and body">
      <pf-checkbox
        id="description-body-check"
        label="Checkbox with description and body"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
        body="This is where custom content goes."
      />
    </story-canvas>

    <story-canvas title="Standalone input">
      <pf-checkbox id="standalone-check" name="standalone-check" aria-label="Standalone input" />
    </story-canvas>

    <story-canvas title="Required input">
      <pf-checkbox id="required-check" label="Required checkbox" required name="required-check" />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const child1Checked = ref(false);
const child2Checked = ref(false);
const controlledChecked = ref(false);

// checked when both children are, indeterminate when only one is
const parentChecked = computed(() =>
  child1Checked.value && child2Checked.value ? true : child1Checked.value || child2Checked.value ? null : false,
);
</script>
