<template>
  <pf-bullseye>
    <pf-empty-state
      heading-level="h4"
      :title="percentValidated === 100 ? 'Validation complete' : 'Validating credentials'"
      variant="lg"
    >
      <template #icon><gear-icon /></template>
      <pf-empty-state-body>
        <pf-progress :value="percentValidated" measure-location="outside" aria-label="Wizard validation progress" />
      </pf-empty-state-body>
      <pf-empty-state-body>
        Description can be used to further elaborate on the validation step, or give the user a better idea of how long
        the process will take.
      </pf-empty-state-body>
      <pf-empty-state-footer>
        <pf-empty-state-actions>
          <pf-button :disabled="percentValidated !== 100" @click="emit('close')">Log to console</pf-button>
        </pf-empty-state-actions>
      </pf-empty-state-footer>
    </pf-empty-state>
  </pf-bullseye>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import GearIcon from '@vue-patternfly/icons/gear-icon';

const emit = defineEmits<{
  (name: 'close'): void;
}>();

const percentValidated = ref(0);

const { pause } = useIntervalFn(() => {
  percentValidated.value += 20;
  if (percentValidated.value >= 100) {
    pause();
  }
}, 1000);
</script>
