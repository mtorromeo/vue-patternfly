<template>
  <pf-wizard :height="400" title="Step footer wizard">
    <pf-wizard-step name="Name" id="step-footer-name-step">
      <pf-form>
        <pf-form-group label="Name:" field-id="step-footer-name">
          <pf-text-input id="step-footer-name" v-model="name" />
        </pf-form-group>
      </pf-form>
      <pf-wizard-step-footer :next-disabled="!name" :next-button-text="name ? `Continue as ${name}` : 'Next'" />
    </pf-wizard-step>
    <pf-wizard-step name="Confirm" id="step-footer-confirm-step">
      <pf-checkbox id="step-footer-confirm" v-model="confirmed" label="I confirm my name is correct" />
      <pf-wizard-step-footer v-slot="{ goToPrevStep, close }">
        <pf-action-list>
          <pf-action-list-group>
            <pf-action-list-item>
              <pf-button variant="secondary" @click="goToPrevStep">Back</pf-button>
            </pf-action-list-item>
            <pf-action-list-item>
              <pf-button variant="primary" :disabled="!confirmed" @click="close">Done</pf-button>
            </pf-action-list-item>
          </pf-action-list-group>
        </pf-action-list>
      </pf-wizard-step-footer>
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
const confirmed = ref(false);
</script>
