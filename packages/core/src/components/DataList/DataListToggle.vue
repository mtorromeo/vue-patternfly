<template>
  <div :class="styles.dataListItemControl">
    <div :class="styles.dataListToggle">
      <pf-button
        :id="id"
        variant="plain"
        :aria-controls="ariaControls && ariaControls"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabel !== 'Details' ? undefined : id"
        :aria-expanded="expanded"
        @click="emit('click', $event)"
      >
        <div :class="styles.dataListToggleIcon">
          <pf-angle-right-icon />
        </div>
      </pf-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import PfButton from '../Button.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

defineOptions({
  name: 'PfDataListToggle',
});

withDefaults(defineProps<{
  id?: string;
  expanded?: boolean;
  noPadding?: boolean;
  ariaLabelledby?: string;
  ariaLabel?: string;
  ariaControls?: string;
}>(), {
  ariaLabel: 'Details',
});

const emit = defineEmits<{
  (name: 'click', e: Event): void;
}>();
</script>
