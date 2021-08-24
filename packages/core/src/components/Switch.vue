<template>
  <label
    v-bind="labelAttrs"
    :class="[styles.switch, $attrs.class, {
      [styles.modifiers.reverse]: reversed,
    }]">
    <input v-bind="$attrs" :class="styles.switchInput" type="checkbox" :checked="checked" @change="$emit('update:checked', $event.target.checked)">

    <template v-if="label">
      <span :class="styles.switchToggle" />
      <span :class="[styles.switchLabel, styles.modifiers.on]" aria-hidden="true">
        {{ label }}
      </span>
      <span :class="[styles.switchLabel, styles.modifiers.off]" aria-hidden="true">
        {{ labelOff ? labelOff : label }}
      </span>
    </template>

    <span v-else :class="styles.switchToggle">
      <div :class="styles.switchToggleIcon" aria-hidden="true">
        <CheckIcon no-vertical-align />
      </div>
    </span>
  </label>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';

export default {
  name: 'PfSwitch',

  components: { CheckIcon },

  inheritAttrs: false,

  props: {
    checked: Boolean,

    /** Flag to reverse the layout of toggle and label (toggle on right). */
    reversed: Boolean,

    /** Text value for the label when on */
    label: {
      type: String,
      default: null,
    },

    /** Text value for the label when off */
    labelOff: {
      type: String,
      default: null,
    },

    labelAttrs: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['update:checked'],

  data() {
    return {
      styles,
    };
  },
};
</script>
