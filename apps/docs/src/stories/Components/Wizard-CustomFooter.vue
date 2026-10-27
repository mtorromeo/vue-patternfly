<template>
  <pf-wizard :height="400" title="Custom footer wizard">
    <pf-wizard-step name="Step 1" id="custom-footer-first-step">Step 1 content</pf-wizard-step>
    <pf-wizard-step id="custom-footer-second-step" name="Step 2">
      Step 2 content with a custom async footer

      <template #footer="{ goToNextStep, goToPrevStep, close }">
        <pf-wizard-footer-wrapper>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="secondary" :disabled="loading" @click="goToPrevStep">Back</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button variant="primary" :loading="loading" :disabled="loading" @click="asyncNext(goToNextStep)">
                  Async Next
                </pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="link" :disabled="loading" @click="close">Cancel</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-wizard-footer-wrapper>
      </template>
    </pf-wizard-step>
    <pf-wizard-step
      id="custom-footer-review-step"
      name="Review"
      :footer-attrs="{
        nextButtonText: 'Submit',
        onNext: onSubmit,
        nextDisabled: submitting,
        backDisabled: submitting,
      }"
    >
      <pf-flex direction="column" align-items="center" space-items="lg">
        <pf-flex-item v-if="submitting === undefined" align-self="flex-start">Review step content</pf-flex-item>
        <template v-else-if="submitting">
          <div>Calculating wizard score...</div>
          <pf-spinner />
        </template>
        <template v-else>50 points to Gryffindor!</template>
      </pf-flex>
    </pf-wizard-step>

    <template #footer="{ activeStep, goToNextStep, goToPrevStep, close }">
      <pf-wizard-footer
        :back-disabled="activeStep.index === 1"
        @next="goToNextStep"
        @back="goToPrevStep"
        @close="close"
      />
    </template>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(false);
const submitting = ref<boolean>();

async function asyncNext(goToNextStep: () => void) {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
  goToNextStep();
}

async function onSubmit() {
  submitting.value = true;
  await new Promise(resolve => setTimeout(resolve, 5000));
  submitting.value = false;
}
</script>
