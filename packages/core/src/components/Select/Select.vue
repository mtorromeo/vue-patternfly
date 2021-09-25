<template>
  <component :is="appendTo === 'inline' ? 'void' : 'pf-popper'">
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
        @keydown="onKeydown"
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
              v-if="!selectionBadgeHidden && checkedOptions.length"
              :class="styles.selectToggleBadge"
            >
              <span :class="[badgeStyles.badge, badgeStyles.modifiers.read]">
                {{ selectionBadgeText || checkedOptions.length || '' }}
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
                  : checkedOptions[0].value || ''
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
          v-if="$attrs.onClear && (checkedOptions.length || typeaheadInputValue)"
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
      >
        <slot name="customContent" />

        <template v-if="inlineFilter">
          <div :class="styles.selectMenuSearch">
            <input
              ref="filter"
              type="search"
              :class="[formStyles.formControl, formStyles.modifiers.search]"
              :placeholder="inlineFilterPlaceholderText"
              autoComplete="off"
              @change="onChange"
              @keydown="onFilterKeydown"
            >
          </div>
          <pf-divider />
        </template>

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

import Void from '../Void';
import PfPopper from '../Popper';
import PfSelectMenu from './SelectMenu.vue';
import PfSelectToggle from './SelectToggle.vue';
import PfDivider from '../Divider';
import TimesCircleIcon from '@vue-patternfly/icons/dist/esm/icons/times-circle-icon';

import { useManagedProp, provideChildrenTracker, keyNavigation } from '../../use';
import { markRaw, provide } from 'vue';

export default {
  name: 'PfSelect',

  components: {
    PfSelectMenu,
    PfSelectToggle,
    Void,
    PfPopper,
    PfDivider,
    TimesCircleIcon,
  },

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
    /** Flag indicating if select should have an inline text input for filtering */
    inlineFilter: Boolean,
    /** Placeholder text for inline filter */
    inlineFilterPlaceholderText: {
      type: String,
      default: '',
    },
  },

  emits: ['clear', 'update:open'],

  setup() {
    const options = provideChildrenTracker();
    const onKeydown = keyNavigation(options);
    provide('keydown', onKeydown);
    return {
      options,
      menuOnKeydown: onKeydown,
      managedOpen: useManagedProp('open', false),
      styles: markRaw(styles),
      buttonStyles: markRaw(buttonStyles),
      badgeStyles: markRaw(badgeStyles),
      formStyles: markRaw(formStyles),
    };
  },

  data() {
    return {
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
      if (this.checkedOptions.length || this.placeholder) {
        return;
      }
      const placeholder = this.options.find(i => i.placeholder === true);
      return (placeholder && placeholder.value) || (this.options[0] && this.options[0].value);
    },

    checkedOptions() {
      return this.options.filter(o => o.managedChecked);
    },
  },

  mounted() {
    document.addEventListener('keydown', this.onEscPress);
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.onEscPress);
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
        this.options[0].focused = true;
      }
    },

    onEscPress(event) {
      const keyCode = event.keyCode || event.which;

      if (!this.managedOpen || !(keyCode === 27 /* ESC */ || event.key === 'Tab')) {
        return;
      }

      const escFromToggle = () => this.$refs.select && this.$refs.select.contains(event.target);

      const escFromWithinMenu = () => {
        const menu = this.$refs.menu.$el;
        return menu && menu.contains && menu.contains(event.target);
      };

      if (escFromToggle() || escFromWithinMenu()) {
        this.managedOpen = false;
        this.$refs.select.focus();
      }
    },

    onClose() {
      this.typeaheadInputValue = null;
      // this.typeaheadFilteredChildren = React.Children.toArray(this.props.children);
      this.typeaheadCurrIndex = -1;
      // this.tabbedIntoFavoritesMenu = false;
    },

    onKeydown(event) {
      if (event.key === 'Tab' && !this.managedOpen) {
        return;
      }

      const stopEvent = () => {
        if (!this.bubbleEvent) {
          event.stopPropagation();
        }
        event.preventDefault();
      };

      if (!this.managedOpen) {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
          this.managedOpen = true;
          stopEvent();
        }
        return;
      }

      const keyCode = event.keyCode || event.which;

      if (!this.bubbleEvent && keyCode === 27 /* ESC */) {
        this.onEscPress(event);
        stopEvent();
      } else if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
        this.managedOpen = false;
        stopEvent();
      } else if (event.key === 'ArrowDown') {
        if (this.options.length) {
          this.options[0].focused = true;
          stopEvent();
        }
      }
    },

    onFilterKeydown(event) {
      if (event.key === 'Tab' && this.variant === 'checkbox') {
        // More modal-like experience for checkboxes
        // Let SelectOption handle this
        this.menuOnKeydown.navigate(0, 0, event.shiftKey ? 'up' : 'down');
        event.stopPropagation();
        event.preventDefault();
      } else {
        this.menuOnKeydown(event, this.$refs.filter);
      }
    },
  },
};
</script>
