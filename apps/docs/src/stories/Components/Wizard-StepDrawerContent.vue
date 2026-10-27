<template>
  <pf-wizard :height="400" title="With drawer wizard">
    <pf-wizard-step :body-attrs="{ noPadding: true }" name="Step 1" id="with-drawer-step-1">
      <drawer-step-content />
    </pf-wizard-step>
    <pf-wizard-step name="Step 2" id="with-drawer-step-2">
      <pf-wizard-step :body-attrs="{ noPadding: true }" name="Substep 1" id="with-drawer-substep-1">
        <drawer-step-content />
      </pf-wizard-step>
      <pf-wizard-step :body-attrs="{ noPadding: true }" name="Substep 2" id="with-drawer-substep-2">
        <drawer-step-content />
      </pf-wizard-step>
    </pf-wizard-step>
    <pf-wizard-step name="Review" id="with-drawer-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
      Review step content
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import DrawerStepContent from './Wizard-DrawerStepContent.vue';
</script>
