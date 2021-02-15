<template>
  <label :class="[styles.switch, $attrs.class]">
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
import CheckIcon from '@vue-patternfly4/icons/dist/esm/icons/check-icon';

export default {
  name: 'PfSwitch',

  components: {CheckIcon},

  props: {
    checked: Boolean,

    label: {
      type: String,
      default: null,
    },

    labelOff: {
      type: String,
      default: null,
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
