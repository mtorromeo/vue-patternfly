<template>
  <define-header-toggle>
    <div v-if="expandable" :class="styles.cardHeaderToggle">
      <pf-button variant="plain" type="button" :aria-expanded="expanded" v-bind="toggleButtonAttrs" @click="toggle">
        <span :class="styles.cardHeaderToggleIcon">
          <pf-angle-down-icon />
        </span>
      </pf-button>
    </div>
  </define-header-toggle>

  <div
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="[
      styles.cardHeader,
      {
        [styles.modifiers.toggleRight]: toggleRightAligned,
        [styles.modifiers.wrap]: wrap,
      },
    ]"
  >
    <header-toggle v-if="!toggleRightAligned" />

    <pf-card-actions v-if="$slots.actions || action" :no-offset="actionsNoOffset">
      <slot name="actions" />
      <div v-if="action" :class="styles.cardSelectableActions">
        <component
          :is="action.single ? PfRadio : PfCheckbox"
          v-if="selectable"
          v-bind="action.attrs"
          :id="inputId"
          :class="action.single ? radioStyles.modifiers.standalone : checkStyles.modifiers.standalone"
          :input-class="action.hidden ? 'pf-v6-screen-reader' : undefined"
          :name="action.name"
          :disabled="disabled"
          :model-value="action.single ? undefined : action.checked.value"
          :checked="action.single ? action.checked.value : undefined"
          @update:model-value="onCheckboxUpdate"
          @change="onInputChange"
        >
          <template #label />
        </component>
        <a
          v-else-if="action.to !== undefined"
          v-bind="action.attrs"
          :class="['pf-v6-c-card__clickable-action', { [styles.modifiers.disabled]: disabled }]"
          :href="action.to"
          :target="action.external ? '_blank' : undefined"
          :tabindex="disabled ? -1 : undefined"
          :aria-disabled="disabled ? true : undefined"
        />
        <button
          v-else
          v-bind="action.attrs"
          class="pf-v6-c-card__clickable-action"
          type="button"
          :disabled="disabled"
        />
      </div>
    </pf-card-actions>

    <pf-card-header-main v-if="$slots.default">
      <slot />
    </pf-card-header-main>

    <header-toggle v-if="toggleRightAligned" />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import radioStyles from '@patternfly/react-styles/css/components/Radio/radio';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfButton from '../Button.vue';
import { computed, type HTMLAttributes, inject, useId } from 'vue';
import { CardKey } from './common';
import PfCardActions from './CardActions.vue';
import PfCardHeaderMain from './CardHeaderMain.vue';
import PfCheckbox from '../Checkbox.vue';
import PfRadio from '../Radio.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate } from '@vueuse/core';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfCardHeader',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Whether to right-align expandable toggle button */
  toggleRightAligned?: boolean;

  /** Additional props for expandable toggle button */
  toggleButtonAttrs?: ComponentProps<typeof PfButton>;

  /** Flag indicating that header wrapping is enabled */
  wrap?: boolean;

  /** Flag indicating that the actions have no offset */
  actionsNoOffset?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  toggleButtonAttrs: () => ({}),
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  actions?: (props?: Record<never, never>) => any;
}>();

const [DefineHeaderToggle, HeaderToggle] = createReusableTemplate();

const card = inject(CardKey, undefined);
const expandable = computed(() => card?.expandable.value);
const expanded = card?.expanded;
const selectable = computed(() => card?.selectable.value);
const disabled = computed(() => card?.disabled.value);
const action = computed(() => card?.selectableAction.value);

const randomId = useId();
const inputId = computed(() => (action.value?.attrs.id as string | undefined) ?? `card-selectable-${randomId}`);

if (slots.actions && card && card.clickable.value !== card.selectable.value) {
  // eslint-disable-next-line no-console
  console.error(
    `Card: ${card.clickable.value ? 'Clickable' : 'Selectable'} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`,
  );
}

function onCheckboxUpdate(value: boolean) {
  // a radio emits its value: its checked state is set by onInputChange
  if (action.value && !action.value.single) {
    action.value.checked.value = Boolean(value);
  }
}

function onInputChange(e: Event) {
  if (action.value && action.value.single) {
    action.value.checked.value = true;
  }
  action.value?.onChange(e);
}

function toggle() {
  if (expanded) {
    expanded.value = !expanded.value;
  }
}

defineExpose({
  toggle,
});
</script>
