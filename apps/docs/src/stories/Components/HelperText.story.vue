<template>
  <doc-page title="Helper Text">
    <template #description><b>Helper text</b> is an on-screen field guideline that helps provide context regarding field inputs.</template>

    <template #apidocs>
      <component-info name="PfHelperText" />
      <component-info name="PfHelperTextItem" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Static">
      <pf-helper-text>
        <pf-helper-text-item>This is default helper text</pf-helper-text-item>
        <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
        <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
        <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
        <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Static with default icons">
      <pf-helper-text>
        <pf-helper-text-item icon>This is default helper text</pf-helper-text-item>
        <pf-helper-text-item icon variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
        <pf-helper-text-item icon variant="warning">This is warning helper text</pf-helper-text-item>
        <pf-helper-text-item icon variant="success">This is success helper text</pf-helper-text-item>
        <pf-helper-text-item icon variant="error">This is error helper text</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Static with custom icons">
      <pf-helper-text>
        <pf-helper-text-item>
          <template #icon>
            <info-icon />
          </template>
          This is default helper text
        </pf-helper-text-item>
        <pf-helper-text-item variant="indeterminate">
          <template #icon>
            <question-icon />
          </template>
          This is indeterminate helper text
        </pf-helper-text-item>
        <pf-helper-text-item variant="warning">
          <template #icon>
            <exclamation-icon />
          </template>
          This is warning helper text
        </pf-helper-text-item>
        <pf-helper-text-item variant="success">
          <template #icon>
            <xmark-icon />
          </template>
          This is success helper text
        </pf-helper-text-item>
        <pf-helper-text-item variant="error">
          <template #icon>
            <xmark-icon />
          </template>
          This is error helper text
        </pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Dynamic list">
      <pf-helper-text>
        <pf-helper-text-item icon dynamic>This is default helper text</pf-helper-text-item>
        <pf-helper-text-item icon dynamic variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
        <pf-helper-text-item icon dynamic variant="warning">This is warning helper text</pf-helper-text-item>
        <pf-helper-text-item icon dynamic variant="success">This is success helper text</pf-helper-text-item>
        <pf-helper-text-item icon dynamic variant="error">This is error helper text</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import InfoIcon from "@vue-patternfly/icons/info-icon";
import QuestionIcon from "@vue-patternfly/icons/question-icon";
import ExclamationIcon from "@vue-patternfly/icons/exclamation-icon";
import XmarkIcon from "@vue-patternfly/icons/xmark-icon";
</script>
