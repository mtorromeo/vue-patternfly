<template>
  <pf-dropdown
    :id="widgetId"
    v-model:open="open"
    :drop-up="dropUp"
    plain
  >
    <template #toggle>
      <div :class="[
        styles.optionsMenuToggle,
        styles.modifiers.plain,
        styles.modifiers.text,
        {[styles.modifiers.disabled]: disabled},
      ]">
        <template v-if="perPageOptions && perPageOptions.length > 0">
          <span :class="styles.optionsMenuToggleText">
            <b>{{ firstIndex }} - {{ lastIndex }}</b> of <b>{{ count }}</b> {{ itemsTitle }}
          </span>
          <pf-dropdown-toggle
            :id="widgetId"
            ref="toggle"
            :disabled="disabled"
            :items-per-page-title="itemsPerPageTitle"
            :open="open"
            :first-index="firstIndex"
            :last-index="lastIndex"
            :count="count"
            :items-title="itemsTitle"
            @click="open = !open"
          />
        </template>
      </div>
    </template>

    <pf-dropdown-item
      v-for="o of perPageOptions"
      :key="o.title"
      :class="{'pf-m-selected': perPage === o.value}"
      :data-action="`per-page-${o.value}`"
      component="button"
      @click="$emit('update:perPage', o.value)"
    >
      {{ o.title }}
      {{ ` ${perPageSuffix}` }}
      <div
        v-if="perPage === o.value"
        :class="styles.optionsMenuMenuItemIcon"
      >
        <check-icon />
      </div>
    </pf-dropdown-item>
  </pf-dropdown>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';
import PfDropdown from '../Dropdown/Dropdown';
import PfDropdownItem from '../Dropdown/DropdownItem';
import PfDropdownToggle from '../Dropdown/DropdownToggle';

import { paginationProps } from './common';
import { markRaw } from 'vue';

export default {
  name: 'PfPaginationOptionsMenu',

  components: { CheckIcon, PfDropdown, PfDropdownItem, PfDropdownToggle },

  provide() {
    return {
      baseClass: styles.optionsMenu,
      toggleIndicatorClass: styles.optionsMenuToggleButtonIcon,
      toggleTextClass: styles.optionsMenuToggleText,
      menuClass: styles.optionsMenuMenu,
      itemClass: styles.optionsMenuMenuItem,
      toggleClass: styles.optionsMenuToggleButton,
      disabledClass: styles.modifiers.disabled,
    };
  },

  props: {
    ...paginationProps,

    count: {
      type: Number,
      default: 0,
    },
    firstIndex: {
      type: Number,
      default: 0,
    },
    lastIndex: {
      type: Number,
      default: 0,
    },

    itemsPerPageTitle: {
      type: String,
      default: 'Items per page',
    },
    perPageSuffix: {
      type: String,
      default: 'per page',
    },
    itemsTitle: {
      type: String,
      default: '',
    },
    optionsToggle: {
      type: String,
      default: 'Items per page',
    },
  },

  emits: ['update:perPage'],

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  data() {
    return {
      open: false,
    };
  },
};
</script>
