<template>
  <template v-if="select.variant === 'checkbox'">
    <div v-if="noResult">
      <component :is="component" :class="[styles.selectMenuItem, {
        [styles.modifiers.selected]: selected,
        [styles.modifiers.disabled]: disabled,
      }]" role="option" :aria-selected="selected" type="button">
        <slot>{{ value.toString() }}</slot>
      </component>
    </div>

    <label
      v-else
      :class="[styles.selectMenuItem, checkStyles.check, {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.description]: description,
      }]"
    >
      <input
        :name="select.name"
        :value="value"
        :class="checkStyles.checkInput"
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="onCheckboxChange"
      >
      <span :class="[checkStyles.checkLabel, {[styles.modifiers.disabled]: disabled}]">
        <slot>{{ value.toString() }}</slot>
      </span>
      <div v-if="description" :class="checkStyles.checkDescription">{{ description }}</div>
    </label>
  </template>

  <li
    v-else
    role="presentation"
    :class="[styles.selectMenuWrapper, {
      [styles.modifiers.favorite]: favorite,
      [styles.modifiers.focus]: focused,
    }]"
  >
    <component :is="component" :class="[styles.selectMenuItem, {
      [styles.modifiers.selected]: selected,
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.description]: description,
      [styles.modifiers.link]: favorite !== null,
    }]" role="option" :aria-selected="selected" type="button">
      <component :is="description ? 'span' : 'pf-void'" :class="styles.selectMenuItemMain">
        <slot>{{ value.toString() }}</slot>
        <span v-if="selected" :class="styles.selectMenuItemIcon">
          <CheckIcon aria-hidden />
        </span>
      </component>
      <span v-if="description" :class="styles.selectMenuItemDescription">{{ description }}</span>
    </component>
  </li>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Select/select';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';

import PfVoid from '../Void';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';

export default {
  name: 'PfSelectOption',

  components: {PfVoid, CheckIcon},

  inject: ['select'],

  props: {
    component: {
      type: String,
      default: 'button',
    },
    favorite: Boolean,
    noResult: Boolean,
    selected: Boolean,
    checked: Boolean,
    disabled: Boolean,
    placeholder: Boolean,
    focused: Boolean,
    description: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: null,
    },
  },

  emits: ['click', 'select'],

  data() {
    return {
      styles,
      checkStyles,
    };
  },

  mounted() {
    this.select.options.push(this);
  },

  beforeUnmount() {
    const idx = this.select.options.findIndex(i => i === this);
    if (idx >= 0) {
      this.select.options.splice(idx, 1);
    }
  },

  methods: {
    focus() {
      const el = this.focusElement();
      el && el.focus();
    },

    focusElement() {
      return this.$el && this.$el.querySelector(`.${styles.selectMenuItem}`);
    },

    onCheckboxChange(event) {
      this.$emit('click', event);
      this.$emit('select', event, this.value);
      this.select.$emit('select', event, this.value);
    },
  },
};
</script>
