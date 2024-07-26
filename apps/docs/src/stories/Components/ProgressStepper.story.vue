<template>
  <doc-page title="ProgressStepper">
    <template #description>Progress steppers have default icons associated with the variant property, and may be overriden and customized using the icon slot.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/ProgressStepper/ProgressStepper.vue" />
      <component-info src="packages/core/src/components/ProgressStepper/ProgressStep.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-progress-stepper>
        <pf-progress-step variant="success">First step</pf-progress-step>
        <pf-progress-step variant="info" current>Second step</pf-progress-step>
        <pf-progress-step variant="pending">Third step</pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With description">
      <pf-progress-stepper>
        <pf-progress-step variant="success" description="This is the first thing to happen">First step</pf-progress-step>
        <pf-progress-step variant="info" description="This is the second thing to happen" current>Second step</pf-progress-step>
        <pf-progress-step variant="pending" description="This is the last thing to happen">Third step</pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With alignment">
      <pf-checkbox v-model="vertical" label="Vertical alignment" />
      <pf-checkbox v-model="centerAligned" label="Center alignment" />
      <br>

      <pf-progress-stepper :vertical="vertical" :center-aligned="centerAligned">
        <pf-progress-step variant="success" description="This is the first thing to happen">First step</pf-progress-step>
        <pf-progress-step variant="info" description="This is the second thing to happen" current>Second step</pf-progress-step>
        <pf-progress-step variant="pending" description="This is the last thing to happen">Third step</pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="All icons and custom">
      <pf-progress-stepper>
        <pf-progress-step variant="success">success</pf-progress-step>
        <pf-progress-step variant="info">info</pf-progress-step>
        <pf-progress-step variant="warning">warning</pf-progress-step>
        <pf-progress-step variant="danger">danger</pf-progress-step>
        <pf-progress-step current>
          <template #icon><in-progress-icon /></template>
          custom 1
        </pf-progress-step>
        <pf-progress-step>
          <template #icon><pending-icon /></template>
          custom 2
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With help popover">
      <pf-progress-stepper>
        <pf-progress-step variant="success">
          <pf-popover position="right">
            <pf-button>First step</pf-button>

            <template #header>
              <div>First step popover</div>
            </template>
            <template #body>
              <div>Additional info or help text content.</div>
            </template>
          </pf-popover>
        </pf-progress-step>

        <pf-progress-step variant="danger">
          <pf-popover position="right">
            <pf-button>Second step</pf-button>

            <template #header>
              <div>Second step popover</div>
            </template>
            <template #body>
              <div>Additional info or help text content.</div>
            </template>
          </pf-popover>
        </pf-progress-step>

        <pf-progress-step variant="info" current>
          <pf-popover position="right">
            <pf-button>Third step</pf-button>

            <template #header>
              <div>Third step popover</div>
            </template>
            <template #body>
              <div>Additional info or help text content.</div>
            </template>
          </pf-popover>
        </pf-progress-step>

        <pf-progress-step variant="pending">
          Fourth step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InProgressIcon from '@vue-patternfly/icons/in-progress-icon';
import PendingIcon from '@vue-patternfly/icons/pending-icon';

const vertical = ref(false);
const centerAligned = ref(false);
</script>
