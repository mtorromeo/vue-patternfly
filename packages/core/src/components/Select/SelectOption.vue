<template>
  <template v-if="select?.variant === 'checkbox'">
    <button
      v-if="load"
      ref="menuItem"
      :class="[styles.selectMenuItem, styles.modifiers.load, {
        [styles.modifiers.focus]: focused,
      }]"
      @click.stop="$emit('viewmore')"
      @keydown="keydown"
    >
      <slot>{{ value }}</slot>
    </button>

    <div v-else-if="loading" :class="[styles.selectListItem, styles.modifiers.loading]">
      <slot />
    </div>

    <div v-else-if="noResult">
      <component
        :is="component"
        ref="menuItem"
        :class="[styles.selectMenuItem, {
          [styles.modifiers.selected]: selected,
          [styles.modifiers.disabled]: disabled,
        }]"
        role="option"
        :aria-selected="selected"
        type="button"
        @keydown="keydown"
      >
        <slot>{{ value }}</slot>
      </component>
    </div>

    <label
      v-else
      ref="menuItem"
      :class="[styles.selectMenuItem, checkStyles.check, {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.description]: description,
      }]"
      @keydown="keydown"
    >
      <input
        v-model="managedChecked"
        :name="select?.name"
        :value="value"
        :class="checkStyles.checkInput"
        type="checkbox"
        :disabled="disabled"
        @change="onCheckboxChange"
      >
      <span
        :class="[checkStyles.checkLabel, {
          [styles.modifiers.disabled]: disabled,
        }]"
      >
        <select-item-count :count="count">
          <slot>{{ value }}</slot>
        </select-item-count>
      </span>
      <div v-if="description" :class="checkStyles.checkDescription">{{ description }}</div>
    </label>
  </template>

  <li
    v-else
    role="presentation"
    :class="{
      [styles.selectMenuWrapper]: !load && !loading,
      [styles.selectListItem]: loading,
      [styles.modifiers.loading]: loading,
      [styles.modifiers.favorite]: favorite,
      [styles.modifiers.focus]: focused,
    }"
    tabindex="0"
  >
    <slot v-if="loading" />

    <template v-else>
      <component
        :is="component"
        ref="menuItem"
        :class="[styles.selectMenuItem, {
          [styles.modifiers.load]: load,
          [styles.modifiers.selected]: selected,
          [styles.modifiers.disabled]: disabled,
          [styles.modifiers.description]: description,
          [styles.modifiers.link]: favorite !== null,
        }]"
        role="option"
        :aria-selected="selected"
        type="button"
        @keydown="keydown"
      >
        <component :is="description ? 'span' : 'pass-through'" :class="styles.selectMenuItemMain">
          <select-item-count :count="count">
            <slot>{{ value.toString() }}</slot>
          </select-item-count>

          <span v-if="selected" :class="styles.selectMenuItemIcon">
            <check-icon aria-hidden />
          </span>
        </component>
        <span v-if="description" :class="styles.selectMenuItemDescription">{{ description }}</span>
      </component>

      <button
        v-if="favorite !== null"
        ref="menuItem"
        :class="[styles.selectMenuItem, styles.modifiers.action, styles.modifiers.favoriteAction]"
        :aria-label="favorite ? ariaFavoriteLabel : ariaNotFavoriteLabel"
        @click="$emit('update:favorite', !favorite)"
      >
        <span :class="styles.selectMenuItemActionIcon">
          <star-icon />
        </span>
      </button>
    </template>
  </li>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Select/select';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';
import StarIcon from '@vue-patternfly/icons/dist/esm/icons/star-icon';
import { markRaw, inject, getCurrentInstance, defineComponent, type Ref, ref, type ComponentPublicInstance } from 'vue';
import { type Navigatable, useChildrenTracker, useManagedProp } from '../../use';
import { SelectKey, SelectOptionsKey } from './Select.vue';
import SelectItemCount from './SelectItemCount.vue';

import PassThrough from '../../helpers/PassThrough';
import { useFocus } from '@vueuse/core';

export default defineComponent({
  name: 'PfSelectOption',

  components: {
    PassThrough,
    CheckIcon,
    StarIcon,
    SelectItemCount,
  },

  props: {
    /** Indicates which component will be used as select item */
    component: {
      type: [String, Object],
      default: 'button',
    },
    /** Flag indicating if the option is favorited */
    favorite: {
      type: Boolean,
      default: null,
    },
    /** Flag indicating if the option acts as a "no results" indicator */
    noResult: Boolean,
    /** @hide Internal flag to apply the load styling to view more option */
    load: Boolean,
    /** @hide Internal flag to apply the loading styling to spinner */
    loading: Boolean,
    /** Flag indicating if the option is selected */
    selected: Boolean,
    /** Flag indicating if the option is checked */
    checked: {
      type: Boolean,
      default: null,
    },
    /** Flag indicating if the option is disabled */
    disabled: Boolean,
    /** Flag indicating if the option acts as a placeholder */
    placeholder: Boolean,
    /** Flag forcing the focused state */
    // focused: Boolean,
    /** Description of the item for single and both typeahead select variants */
    description: {
      type: String,
      default: '',
    },
    /** The value for the option */
    value: {
      type: String,
      default: null,
    },
    /** Number of items matching the option */
    count: {
      type: [Number, String],
      default: null,
    },
    /** Aria label text for favoritable button when favorited */
    ariaFavoriteLabel: {
      type: String,
      default: 'starred',
    },
    /** Aria label text for favoritable button when not favorited */
    ariaNotFavoriteLabel: {
      type: String,
      default: 'not starred',
    },
  },

  emits: ['click', 'select', 'update:checked', 'update:selected', 'update:favorite', 'viewmore'],

  setup() {
    const instance = getCurrentInstance();
    useChildrenTracker(SelectOptionsKey);
    const select = inject(SelectKey);
    const menuItem: Ref<HTMLElement | undefined> = ref();

    return {
      keydown: (e: KeyboardEvent) => select?.keydown?.call?.(instance?.proxy as ComponentPublicInstance & Navigatable, e, menuItem.value ?? undefined),
      menuItem,
      focused: useFocus(menuItem).focused,
      styles: markRaw(styles) as typeof styles,
      checkStyles: markRaw(checkStyles) as typeof checkStyles,
      managedChecked: useManagedProp('checked', false),
      select,
    };
  },

  methods: {
    focus() {
      this.focused = true;
    },

    onCheckboxChange(event: Event) {
      if (this.disabled) {
        return;
      }
      this.$emit('click', event);
      this.$emit('select', event, this.value);
      this.select?.$emit?.('select', event, this.value);
    },
  },
});
</script>
