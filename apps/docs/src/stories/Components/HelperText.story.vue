<template>
  <doc-page title="Helper Text">
    <template #description
      ><b>Helper text</b> is an on-screen field guideline that helps provide context regarding field inputs.</template
    >

    <template #apidocs>
      <component-info name="PfHelperText" />
      <component-info name="PfHelperTextItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `isLiveRegion` prop is replaced by `live-region`.
      - The `icon` prop of `pf-helper-text-item` is replaced by the `icon` slot.
      - `pf-helper-text-item` renders as an `li` inside a `pf-helper-text` with `component="ul"`, unless its `component` prop is set.
      - The `aria-label` of `pf-helper-text` is forwarded with any component, not only `ul`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-helper-text>
        <pf-helper-text-item>This is default helper text</pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="With custom icons">
      <pf-helper-text>
        <pf-helper-text-item>
          <template #icon>
            <info-icon />
          </template>
          This is default helper text
        </pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="indeterminate">
          <template #icon>
            <question-icon />
          </template>
          This is indeterminate helper text
        </pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="warning">
          <template #icon>
            <exclamation-icon />
          </template>
          This is warning helper text
        </pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="success">
          <template #icon>
            <check-icon />
          </template>
          This is success helper text
        </pf-helper-text-item>
      </pf-helper-text>
      <pf-helper-text>
        <pf-helper-text-item variant="error">
          <template #icon>
            <xmark-icon />
          </template>
          This is error helper text
        </pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Multiple items">
      <template #intro>
        <pre v-md>
          You can pass multiple `pf-helper-text-item` components inside a single `pf-helper-text` container. With `component="ul"` the items render as list items.
        </pre>
      </template>
      <pf-helper-text component="ul">
        <pf-helper-text-item>This is default helper text</pf-helper-text-item>
        <pf-helper-text-item>This is another default helper text in the same HelperText block</pf-helper-text-item>
        <pf-helper-text-item>And this is more default text in the same HelperText block</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import InfoIcon from '@vue-patternfly/icons/info-icon';
import QuestionIcon from '@vue-patternfly/icons/question-icon';
import ExclamationIcon from '@vue-patternfly/icons/exclamation-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
</script>
