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

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { defineComponent, inject, markRaw, ref, type Ref } from 'vue';
import { useChildrenTracker, useFocused } from '../../use';
import { DropdownToggleElementRefKey, DropdownDisabledClassKey, DropdownItemClassKey } from './Dropdown';
import { DropdownMenuItemsKey, DropdownMenuOnKeydownKey } from './DropdownMenu.vue';

export default defineComponent({
  name: 'PfDropdownItem',

  inheritAttrs: false,

  props: {
    hovered: Boolean,
    component: {
      type: [String, Object, Function],
      default: 'a',
    },
    role: {
      type: String,
      default: 'menuitem',
    },
    disabled: Boolean,
    plain: Boolean,
    tooltipProps: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: -1,
    },
    tabindex: {
      type: [Number, String],
      default: -1,
    },
    enterTriggersArrowDown: Boolean,
    styleChildren: Boolean,
    description: {
      type: String,
      default: null,
    },
    autoFocus: Boolean,
  },

  setup() {
    useChildrenTracker(DropdownMenuItemsKey);

    const el: Ref<HTMLLIElement | undefined> = ref();
    const focusElement = () => el.value?.querySelector('[tabindex], a, button');

    return {
      el,
      styles: markRaw(styles) as typeof styles,
      focused: useFocused(focusElement),
      focusElement,
      itemClass: inject(DropdownItemClassKey, styles.dropdownMenuItem),
      disabledClass: inject(DropdownDisabledClassKey, styles.modifiers.disabled),
      toggleElement: inject(DropdownToggleElementRefKey, undefined),
      keydown: inject(DropdownMenuOnKeydownKey, undefined),
    };
  },

  mounted() {
    if (this.autoFocus) {
      this.$nextTick(() => (this.focused = true));
    }
  },

  methods: {
    focus() {
      this.focused = true;
    },

    onClick(e: MouseEvent | TouchEvent) {
      if (this.disabled) {
        this.toggleElement?.focus();
        return;
      }
      this.$emit('click', e);
      this.$emit('select', e);
    },
  },
});
</script>
