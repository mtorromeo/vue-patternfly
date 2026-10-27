<template>
  <validation-progress v-if="submitted" @close="onClose" />
  <pf-wizard v-else :height="400" title="Submit progress wizard" @close="onClose">
    <pf-wizard-step name="Step 1" id="submit-progress-step-1">Step 1 content</pf-wizard-step>
    <pf-wizard-step name="Step 2" id="submit-progress-step-2">Step 2 content</pf-wizard-step>
    <pf-wizard-step
      name="Review"
      id="submit-progress-review"
      :footer-attrs="{ nextButtonText: 'Finish', onNext: () => (submitted = true) }"
    >
      Review step content
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ValidationProgress from './Wizard-ValidationProgress.vue';

const submitted = ref(false);

const onClose = () => console.log('Some close action occurs here.');
</script>
