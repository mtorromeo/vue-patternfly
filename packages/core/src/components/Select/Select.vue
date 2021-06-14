<template>
  <component :is="appendTo === 'inline' ? 'pf-void' : 'pf-popper'">
    <div
      ref="select"
      :class="[styles.select, {
        [styles.modifiers.expanded]: managedOpen,
        [styles.modifiers.top]: up,
      }]"
      :style="{width}"
    >
      <pf-select-toggle
        v-model:open="managedOpen"
        :disabled="disabled"
        :variant="variant"
        @enter="onEnter"
        @close="onClose"
      >
        <div :class="styles.selectToggleWrapper">
          <span v-if="$slots['toggle-icon']" :class="styles.selectToggleIcon">
            <slot name="toggle-icon" />
          </span>

          <template v-if="$slots.customContent || ['single', 'checkbox'].includes(variant)">
            <input v-if="variant === 'single' && name" type="hidden" :name="name" :value="value">
            <span :class="styles.selectToggleText">
              <slot name="placeholder">{{ placeholder || childPlaceholderText }}</slot>
            </span>
            <div
              v-if="!selectionBadgeHidden && selectedOptions.length"
              :class="styles.selectToggleBadge"
            >
              <span :class="[badgeStyles.badge, badgeStyles.modifiers.read]">
                {{ selectionBadgeText || selectedOptions.length || '' }}
              </span>
            </div>
          </template>

          <template v-else-if="variant === 'typeahead'">
            <input
              :id="`${selectToggleId}-select-typeahead`"
              :class="[formStyles.formControl, styles.selectToggleTypeahead]"
              :aria-activedescendant="typeaheadActiveChild && typeaheadActiveChild.id"
              :aria-label="typeAheadAriaLabel"
              :placeholder="placeholder"
              :value="
                typeaheadInputValue !== null
                  ? typeaheadInputValue
                  : selectedOptions[0].value || ''
              "
              type="text"
              autoComplete="off"
              :disabled="disabled"
              @click="onClick"
              @change="onChange"
            >
          </template>
        </div>

        <button
          v-if="$attrs.onClear && (selectedOptions.length || typeaheadInputValue)"
          :class="[buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear]"
          type="button"
          :disabled="disabled"
          @click.stop="clearSelection"
        >
          <TimesCircleIcon aria-hidden />
        </button>
      </pf-select-toggle>

      <pf-select-menu
        v-show="managedOpen"
        ref="menu"
        :v-slot="appendTo === 'inline' ? null : 'popper'"
        :grouped="grouped"
      >
        <slot name="customContent" />
        <slot />
      </pf-select-menu>
    </div>
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Select/select';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

import PfVoid from '../Void';
import PfPopper from '../Popper';
import TimesCircleIcon from '@vue-patternfly/icons/dist/esm/icons/times-circle-icon';

import {useManagedProp} from '../../use';

export default {
  name: 'PfSelect',

  components: {PfVoid, PfPopper, TimesCircleIcon},

  provide() {
    return {
      select: this,
    };
  },

  props: {
    name: {
      type: String,
      default: '',
    },
    appendTo: {
      type: [String, Element],
      default: 'inline',
    },
    placeholder: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: null,
    },
    up: Boolean,
    disabled: Boolean,
    grouped: Boolean,
    width: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'single',
      validator: v => ['single', 'checkbox', 'typeahead', 'typeaheadmulti'].includes(v),
    },
    selections: {
      type: [String, Array],
      default: () => [],
    },
    selectionBadgeHidden: Boolean,
    selectionBadgeText: {
      type: String,
      default: null,
    },
  },

  emits: ['clear', 'update:open'],

  setup(props, {emit}) {
    return {
      managedOpen: useManagedProp(props, emit, 'open', false),
    };
  },

  data() {
    return {
      styles,
      buttonStyles,
      badgeStyles,
      formStyles,
      options: [],
      typeaheadInputValue: null,
      typeaheadCurrIndex: -1,
      // tabbedIntoFavoritesMenu: false,
    };
  },

  computed: {
    childPlaceholderText() {
      if (this.$slots.customContent) {
        return;
      }
      if (this.selectedOptions.length || this.placeholder) {
        return;
      }
      const placeholder = this.options.find(i => i.placeholder === true);
      return (placeholder && placeholder.value) || (this.options[0] && this.options[0].value);
    },

    selectedOptions() {
      const selections = Array.isArray(this.selections) ? this.selections : [this.selections];
      return this.options.filter(o => selections.includes(o) || selections.includes(o.value));
    },
  },

  methods: {
    clearSelection(e) {
      this.typeaheadInputValue = null;
      // this.typeaheadFilteredChildren = React.Children.toArray(this.props.children);
      this.typeaheadCurrIndex = -1;
      this.$emit('clear', e);
    },

    onEnter() {
      if (this.options.length) {
        this.options[0].focus();
      }
    },

    onClose() {
      this.typeaheadInputValue = null;
      // this.typeaheadFilteredChildren = React.Children.toArray(this.props.children);
      this.typeaheadCurrIndex = -1;
      // this.tabbedIntoFavoritesMenu = false;
    },
  },
};
</script>
