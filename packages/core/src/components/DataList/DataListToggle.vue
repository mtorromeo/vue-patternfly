<template>
  <div v-bind="ouiaProps" :class="styles.dataListItemControl">
    <div :class="styles.dataListToggle">
      <pf-button
        :id="id"
        variant="plain"
        :aria-controls="ariaControls || undefined"
        :aria-label="ariaLabel"
        :aria-labelledby="effectiveAriaLabelledby"
        :aria-expanded="isExpanded"
        v-bind="buttonAttrs"
        @click="emit('click', $event)"
      >
        <template #icon>
          <div :class="styles.dataListToggleIcon">
            <angle-down-icon />
          </div>
        </template>
      </pf-button>
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Id of the toggle button */
  id?: string;
  /** Flag to show if the expanded content of the data list item is visible. Defaults to the state of the item. */
  expanded?: boolean;
  /** Adds accessible text to the toggle. Defaults to the ids labelling the item and the toggle. */
  ariaLabelledby?: string;
  /** Adds accessible text to the toggle */
  ariaLabel?: string;
  /** Id of the content the toggle controls */
  ariaControls?: string;
  /** Additional attributes added to the toggle button */
  buttonAttrs?: Record<string, unknown>;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfButton from '../Button.vue';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import { computed, inject, type HTMLAttributes } from 'vue';
import { DataListItemKey } from './common';

defineOptions({
  name: 'PfDataListToggle',
});

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: 'Details',
  expanded: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', e: Event): void;
}>();

const datalistItem = inject(DataListItemKey, undefined);

const isExpanded = computed(() => props.expanded ?? datalistItem?.expanded.value ?? false);

// with the default label, the toggle is labelled by the item and by itself
const effectiveAriaLabelledby = computed(() => {
  if (props.ariaLabelledby !== undefined) {
    return props.ariaLabelledby;
  }
  if (props.ariaLabel !== 'Details') {
    return undefined;
  }
  return [datalistItem?.rowid.value, props.id].filter(Boolean).join(' ') || undefined;
});
</script>
