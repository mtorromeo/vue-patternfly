<template>
  <doc-page title="Radio">
    <template #description
      >A <b>radio</b> button is used to present the user with mutually exclusive choices. Always present radio buttons
      in groups of 2 or more.</template
    >

    <template #apidocs>
      <component-info name="PfRadio" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The selected radio of a group is bound with `v-model` on each radio, which is checked when the model equals its `value`; without `v-model` the `checked` prop (`isChecked`) and the `change` event (`onChange`) control it.
      - `label-before-button` replaces `labelPosition="start"`; `invalid` inverts `isValid`; `label-wrapped` is `isLabelWrapped`.
      - `label`, `description` and `body` can also be the `label`, `description` and default slots.
      - `class` is applied to the wrapper element like `className`; use `input-class` for the input (`inputClassName`). Every other attribute is forwarded to the input.
      - `id` is generated when not set.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Controlled">
      <pf-radio id="radio-controlled" v-model="controlled" value="checked" name="radio-1" label="Controlled Radio" />
    </story-canvas>

    <story-canvas title="Uncontrolled">
      <pf-radio id="radio-uncontrolled" name="radio-2" label="Uncontrolled radio example" />
    </story-canvas>

    <story-canvas title="Reversed">
      <pf-radio id="radio-reversed" name="radio-3" label="Reversed radio example" label-before-button />
    </story-canvas>

    <story-canvas title="Label wraps">
      <template #intro>
        <pre v-md>
          You can expand the clickable area of a radio so that it spans wider than the radio label by adding the `label-wrapped` property. This allows users to select a radio by clicking the radio itself, the label, or the area between the radio and the label.
        </pre>
      </template>

      <pf-radio id="radio-label-wraps-input" name="radio-4" label="Label wraps input example" label-wrapped />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-radio id="radio-disabled" name="radio-5" label="Disabled radio example" disabled />
      <pf-radio
        id="radio-disabled-checked"
        name="radio-6"
        label="Disabled and checked radio example"
        disabled
        checked
      />
    </story-canvas>

    <story-canvas title="With description">
      <pf-radio
        id="radio-with-description"
        name="radio-7"
        label="Radio with description example"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
      />
    </story-canvas>

    <story-canvas title="With body">
      <pf-radio id="radio-with-body" name="radio-8" label="Radio with body" body="This is where custom content goes." />
    </story-canvas>

    <story-canvas title="With description and body">
      <pf-radio
        id="radio-description-body"
        name="radio-8"
        label="Radio with description and body"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
        body="This is where custom content goes."
      />
    </story-canvas>

    <story-canvas title="Standalone input">
      <pf-radio id="radio-standalone" name="exampleRadioStandalone" aria-label="Standalone input" />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const controlled = ref<string>();
</script>
