<template>
  <doc-page title="Progress stepper">
    <template #description
      >A <b>progress stepper</b> displays a timeline of tasks in a workflow and tracks the user's current progress
      through this workflow.</template
    >

    <template #apidocs>
      <component-info name="PfProgressStepper" />
      <component-info name="PfProgressStep" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `icon` and `description` props of `pf-progress-step` are slots (`description` is also a prop).
      - A help popover goes in the `popover` scoped slot, whose `trigger` (the step title, rendered as a button) is passed to the `trigger-ref` of a `pf-popover` (`popoverRender`).
      - Boolean props drop their prefix: `center-aligned`, `vertical`, `compact` and `current`.
      See [common differences from patternfly-react](#/).

      ## Examples
      Progress steppers have default icons associated with the `variant` property, and may be overriden and customized using the `icon` slot.
    </pre>

    <story-canvas title="Basic">
      <pf-progress-stepper aria-label="Basic progress stepper">
        <pf-progress-step
          id="basic-step1"
          variant="success"
          title-id="basic-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </pf-progress-step>
        <pf-progress-step
          id="basic-step2"
          variant="info"
          current
          title-id="basic-step2-title"
          aria-label="step with info"
        >
          Second step
        </pf-progress-step>
        <pf-progress-step id="basic-step3" variant="pending" title-id="basic-step3-title" aria-label="pending step">
          Third step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With step descriptions">
      <pf-progress-stepper aria-label="Basic progress stepper with description">
        <pf-progress-step
          id="basic-desc-step1"
          variant="success"
          description="This is the first thing to happen"
          title-id="basic-desc-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </pf-progress-step>
        <pf-progress-step
          id="basic-desc-step2"
          variant="info"
          current
          description="This is the second thing to happen"
          title-id="basic-desc-step2-title"
          aria-label="step with info"
        >
          Second step
        </pf-progress-step>
        <pf-progress-step
          id="basic-desc-step3"
          variant="pending"
          description="This is the last thing to happen"
          title-id="basic-desc-step3-title"
          aria-label="pending step"
        >
          Third step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With alignment">
      <pf-checkbox
        id="toggle-vertical"
        v-model="alignment.vertical"
        label="Vertical alignment"
        aria-label="Toggle vertical alignment"
        name="toggle-vertical"
      />
      <pf-checkbox
        id="toggle-center"
        v-model="alignment.center"
        label="Center alignment"
        aria-label="Toggle center alignment"
        name="toggle-center"
      />
      <br />
      <pf-progress-stepper
        :vertical="alignment.vertical"
        :center-aligned="alignment.center"
        aria-label="Basic progress stepper with alignment"
      >
        <pf-progress-step
          id="basic-alignment-step1"
          variant="success"
          description="This is the first thing to happen"
          title-id="basic-alignment-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </pf-progress-step>
        <pf-progress-step
          id="basic-alignment-step2"
          variant="info"
          current
          description="This is the second thing to happen"
          title-id="basic-alignment-step2-title"
          aria-label="step with info"
        >
          Second step
        </pf-progress-step>
        <pf-progress-step
          id="basic-alignment-step3"
          variant="pending"
          description="This is the last thing to happen"
          title-id="basic-alignment-step3-title"
          aria-label="pending step"
        >
          Third step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="Compact">
      <template #intro>
        <pre v-md>
          Compact progress steppers will only display the current step's title, and will not display any steps' descriptions.
        </pre>
      </template>

      <pf-checkbox
        id="toggle-compact-vertical"
        v-model="compact.vertical"
        label="Vertical alignment"
        aria-label="Toggle compact vertical alignment"
        name="toggle-compact-vertical"
      />
      <pf-checkbox
        id="toggle-compact-center"
        v-model="compact.center"
        label="Center alignment"
        aria-label="Toggle compact center alignment"
        name="toggle-compact-center"
      />
      <br />
      <pf-progress-stepper compact :vertical="compact.vertical" :center-aligned="compact.center">
        <pf-progress-step
          id="compact-step1"
          variant="success"
          title-id="compact-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </pf-progress-step>
        <pf-progress-step
          id="compact-step2"
          variant="info"
          current
          title-id="compact-step2-title"
          aria-label="step with info"
        >
          Second step
        </pf-progress-step>
        <pf-progress-step id="compact-step3" variant="pending" title-id="compact-step3-title" aria-label="pending step">
          Third step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With an issue">
      <pf-progress-stepper aria-label="Basic progress stepper with issue">
        <pf-progress-step
          v-for="(step, i) in issueSteps"
          :id="`basic-with-issue-step${i + 1}`"
          :key="i"
          :variant="step.variant"
          :current="step.current"
          :title-id="`basic-with-issue-step${i + 1}-title`"
          :aria-label="step.label"
        >
          {{ step.title }}
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With a failure">
      <pf-progress-stepper aria-label="Basic progress stepper with failure">
        <pf-progress-step
          v-for="(step, i) in failureSteps"
          :id="`basic-with-failure-step${i + 1}`"
          :key="i"
          :variant="step.variant"
          :current="step.current"
          :title-id="`basic-with-failure-step${i + 1}-title`"
          :aria-label="step.label"
        >
          {{ step.title }}
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With custom icons">
      <pf-progress-stepper aria-label="Progress stepper with custom icons">
        <pf-progress-step
          id="custom-step1"
          variant="success"
          title-id="custom-step1-title"
          aria-label="completed step, step with success"
        >
          Successful completion
        </pf-progress-step>
        <pf-progress-step id="custom-step2" current title-id="custom-step2-title" aria-label="in progress">
          <template #icon><in-progress-icon /></template>
          In process
        </pf-progress-step>
        <pf-progress-step id="custom-step3" variant="pending" title-id="custom-step3-title" aria-label="pending step">
          <template #icon><pending-icon /></template>
          Pending
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>

    <story-canvas title="With help popover">
      <template #intro>
        <pre v-md>
          To add a popover to a progress step, use the `popover` slot of the `pf-progress-step` component: the step title becomes a button, received as `trigger`, to pass to the `trigger-ref` of a `pf-popover`.
        </pre>
      </template>

      <pf-progress-stepper aria-label="Progress stepper with help popover">
        <pf-progress-step
          id="popover-step1"
          variant="success"
          title-id="popover-step1-title"
          aria-label="completed step with popover, step with success"
        >
          First step
          <template #popover="{ trigger }">
            <pf-popover aria-label="First step help" :trigger-ref="trigger" position="right">
              <template #header><div>First step popover</div></template>
              <template #body><div>Additional info or help text content.</div></template>
            </pf-popover>
          </template>
        </pf-progress-step>
        <pf-progress-step
          id="popover-step2"
          variant="danger"
          title-id="popover-step2-title"
          aria-label="completed step with popover, step with danger"
        >
          Second step
          <template #popover="{ trigger }">
            <pf-popover aria-label="Second step help" :trigger-ref="trigger" position="right">
              <template #header><div>Second step popover</div></template>
              <template #body><div>Additional info or help text content.</div></template>
            </pf-popover>
          </template>
        </pf-progress-step>
        <pf-progress-step
          id="popover-step3"
          variant="info"
          current
          title-id="popover-step3-title"
          aria-label="step with popover"
        >
          Third step
          <template #popover="{ trigger }">
            <pf-popover aria-label="Third step help" :trigger-ref="trigger" position="right">
              <template #header><div>Third step popover</div></template>
              <template #body><div>Additional info or help text content.</div></template>
            </pf-popover>
          </template>
        </pf-progress-step>
        <pf-progress-step id="popover-step4" variant="pending" title-id="popover-step4-title" aria-label="pending step">
          Fourth step
        </pf-progress-step>
      </pf-progress-stepper>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import InProgressIcon from '@vue-patternfly/icons/in-progress-icon';
import PendingIcon from '@vue-patternfly/icons/pending-icon';

type Step = {
  title: string;
  variant: 'success' | 'info' | 'pending' | 'warning' | 'danger';
  label: string;
  current?: boolean;
};

const alignment = reactive({ vertical: false, center: false });
const compact = reactive({ vertical: false, center: false });

const issueSteps: Step[] = [
  { title: 'First step', variant: 'success', label: 'completed step, step with success' },
  { title: 'Second step', variant: 'success', label: 'completed step, step with success' },
  { title: 'Third step', variant: 'warning', label: 'completed step, step with warning' },
  { title: 'Fourth step', variant: 'info', label: 'step with info', current: true },
  { title: 'Fifth step', variant: 'pending', label: 'pending step' },
];

const failureSteps: Step[] = [
  { title: 'First step', variant: 'success', label: 'completed step, step with success' },
  { title: 'Second step', variant: 'success', label: 'completed step, step with success' },
  { title: 'Third step', variant: 'success', label: 'completed step, step with success' },
  { title: 'Fourth step', variant: 'danger', label: 'step with danger', current: true },
  { title: 'Fifth step', variant: 'pending', label: 'pending step' },
];
</script>
