<template>
  <validation-progress v-if="submitted && firstStepValid" @close="onClose" />
  <pf-wizard v-else title="Validate on button press wizard" :height="400" @close="onClose">
    <pf-wizard-step name="Step 1" id="validate-btn-step-1">Step 1 content</pf-wizard-step>
    <pf-wizard-step name="Step 2" id="validate-btn-step-2">Step 2 content</pf-wizard-step>
    <pf-wizard-step name="Final Step" id="validate-btn-finish-step">
      <div v-if="errorOnSubmit" style="padding: 15px 0">
        <pf-alert inline variant="danger" title="Validation failed, please try again." />
      </div>
      <pf-form>
        <pf-form-group label="Age:" field-id="validate-btn-age">
          <pf-text-input
            id="validate-btn-age"
            v-model="age"
            :validated="!errorOnSubmit || firstStepValid ? 'default' : 'error'"
            aria-describedby="validate-btn-age-helper"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item
                id="validate-btn-age-helper"
                :variant="!errorOnSubmit || firstStepValid ? 'default' : 'error'"
              >
                {{ !errorOnSubmit || firstStepValid ? 'Write your age in numbers.' : 'Age has to be a number' }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>

      <template #footer="{ goToNextStep, goToPrevStep }">
        <pf-wizard-footer-wrapper>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="secondary" @click="goToPrevStep">Back</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button @click="onValidate(goToNextStep)">Validate</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-wizard-footer-wrapper>
      </template>
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import ValidationProgress from './Wizard-ValidationProgress.vue';

const age = ref('Thirty');
const submitted = ref(false);
const errorOnSubmit = ref(false);
const firstStepValid = computed(() => /^\d+$/.test(age.value));

const onClose = () => console.log('Some close action occurs here.');

function onValidate(goToNextStep: () => void) {
  submitted.value = true;
  if (!firstStepValid.value) {
    submitted.value = false;
    errorOnSubmit.value = true;
  } else {
    goToNextStep();
  }
}
</script>
