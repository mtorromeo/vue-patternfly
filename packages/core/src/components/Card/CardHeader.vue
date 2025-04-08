<template>
  <define-header-toggle>
    <div v-if="expandable" :class="styles.cardHeaderToggle">
      <pf-button variant="plain" v-bind="toggleButtonAttrs" @click="toggle">
        <span :class="styles.cardHeaderToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </pf-button>
    </div>
  </define-header-toggle>

  <div
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.cardHeader, {
      [styles.modifiers.toggleRight]: toggleRightAligned,
    }]"
  >
    <header-toggle v-if="!toggleRightAligned" />

    <pf-card-actions v-if="checkbox">
      <div :class="styles.cardSelectableActions">
        <pf-checkbox
          :class="['pf-m-standalone', checkbox.hidden ? 'pf-v6-screen-reader' : undefined]"
          :name="checkbox.name"
          v-model="checkboxChecked"
          :disabled="checkbox.disabled"
          tabindex="-1"
        >
          <template #label />
        </pf-checkbox>
      </div>
    </pf-card-actions>

    <slot />

    <header-toggle v-if="toggleRightAligned" />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfButton, { type Props as ButtonProps } from '../Button.vue';
import { computed, type HTMLAttributes, inject } from 'vue';
import { CardCheckboxKey, CardExpandableKey, CardExpandedKey } from './Card.vue';
import PfCardActions from './CardActions.vue';
import PfCheckbox from '../Checkbox.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate } from '@vueuse/core';

defineOptions({
  name: 'PfCardHeader',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Whether to right-align expandable toggle button */
  toggleRightAligned?: boolean;

  /** Additional props for expandable toggle button */
  toggleButtonAttrs?: ButtonProps,
}

const props = withDefaults(defineProps<Props>(), {
  toggleButtonAttrs: () => ({}),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const [DefineHeaderToggle, HeaderToggle] = createReusableTemplate();

const expandable = inject(CardExpandableKey);
const expanded = inject(CardExpandedKey);
const checkbox = inject(CardCheckboxKey);
const checkboxChecked = computed({
  get: () => checkbox?.value?.checked.value,
  set: (value) => {
    if (checkbox?.value) {
      checkbox.value.checked.value = Boolean(value);
    }
  },
});

function toggle() {
  if (expanded) {
    expanded.value = !expanded.value;
  }
}

defineExpose({
  toggle,
});
</script>
