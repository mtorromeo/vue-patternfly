<template>
  <li ref="el" :role="role" @keydown="keydown" @click="onClick">
    <component
      :is="component"
      v-bind="$attrs"
      :class="{
        [styles.modifiers.icon]: $slots.icon,
        [itemClass]: role !== 'separator',
        [disabledClass]: role !== 'separator' && disabled,
        [styles.modifiers.text]: role !== 'separator' && plain,
        [styles.modifiers.description]: role !== 'separator' && description,
      }"
      :aria-disabled="component === 'a' ? disabled : null"
      :tabindex="component === 'a' ? (disabled ? -1 : tabindex) : null"
      :disabled="component === 'button' ? disabled : null"
    >
      <template v-if="description">
        <div :class="styles.dropdownMenuItemMain">
          <span v-if="$slots.icon" :class="styles.dropdownMenuItemIcon">
            <slot name="icon" />
          </span>

          <slot />
        </div>

        <div :class="styles.dropdownMenuItemDescription">{{ description }}</div>
      </template>

      <template v-else>
        <span v-if="$slots.icon" :class="styles.dropdownMenuItemIcon">
          <slot name="icon" />
        </span>

        <slot />
      </template>
    </component>

    <slot name="additional" />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { useFocus } from '@vueuse/core';

import { computed, inject, onMounted, nextTick, ref, type Ref, type Component, type HTMLAttributes } from 'vue';
import { useChildrenTracker } from '../../use';
import { DropdownToggleElementRefKey, DropdownDisabledClassKey, DropdownItemClassKey } from './Dropdown.vue';
import { DropdownMenuItemsKey, DropdownMenuOnKeydownKey } from './DropdownMenu.vue';

defineOptions({
  name: 'PfDropdownItem',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  hovered?: boolean;
  component?: string | Component;
  role?: string;
  disabled?: boolean;
  plain?: boolean;
  index?: number;
  tabindex?: number | string;
  enterTriggersArrowDown?: boolean;
  styleChildren?: boolean;
  description?: string;
  autoFocus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'a',
  role: 'menuitem',
  index: -1,
  tabindex: -1,
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
  (name: 'select', e: MouseEvent | TouchEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  additional?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(DropdownMenuItemsKey);

const el: Ref<HTMLLIElement | undefined> = ref();
const focusElement = computed(() => el.value?.querySelector<HTMLElement>('[tabindex], a, button'));

const { focused } = useFocus(focusElement);

const itemClass = inject(DropdownItemClassKey, styles.dropdownMenuItem);
const disabledClass = inject(DropdownDisabledClassKey, styles.modifiers.disabled);
const toggleElement = inject(DropdownToggleElementRefKey, undefined);
const keydown = inject(DropdownMenuOnKeydownKey, undefined);

onMounted(() => {
  if (props.autoFocus) {
    nextTick(() => (focused.value = true));
  }
});

function focus() {
  focused.value = true;
}

function onClick(e: MouseEvent | TouchEvent) {
  if (props.disabled) {
    toggleElement?.value?.focus();
    return;
  }
  emit('click', e);
  emit('select', e);
}

defineExpose({
  focus,
  focusElement,
});
</script>
