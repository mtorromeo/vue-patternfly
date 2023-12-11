<template>
  <div v-bind="(ouiaProps as any)" :class="styles.dataListItemControl">
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
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfButton from '../Button.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDataListToggle',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  id?: string;
  expanded?: boolean;
  noPadding?: boolean;
  ariaLabelledby?: string;
  ariaLabel?: string;
  ariaControls?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: 'Details',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: Event): void;
}>();
</script>
