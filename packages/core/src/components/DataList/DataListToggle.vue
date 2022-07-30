<template>
  <div :class="styles.dataListItemControl">
    <div :class="styles.dataListToggle">
      <pf-button
        :id="id"
        variant="plain"
        :aria-controls="ariaControls && ariaControls"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabel !== 'Details' ? null : id"
        :aria-expanded="expanded"
      >
        <div :class="styles.dataListToggleIcon">
          <pf-angle-right-icon />
        </div>
      </pf-button>
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, markRaw } from "vue";

import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

export default defineComponent({
  name: 'PfDataListToggle',

  components: {
    PfAngleRightIcon,
  },

  props: {
    id: String,
    expanded: Boolean,
    noPadding: Boolean,
    ariaLabelledby: String,
    ariaLabel: {
      type: String,
      default: 'Details',
    },
    ariaControls: String,
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
