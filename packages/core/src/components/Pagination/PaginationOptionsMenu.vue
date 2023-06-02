<template>
  <pf-dropdown :id="widgetId" v-model:open="open" :drop-up="dropUp" plain>
    <template #toggle>
      <div
        :class="[
          styles.optionsMenuToggle,
          styles.modifiers.plain,
          styles.modifiers.text,
          { [styles.modifiers.disabled]: disabled },
        ]"
      >
        <template v-if="perPageOptions && perPageOptions.length > 0">
          <span :class="styles.optionsMenuToggleText">
            <b>{{ firstIndex }} - {{ lastIndex }}</b> of
            <b>{{ count }}</b>
            {{ itemsTitle }}
          </span>
          <pf-dropdown-toggle
            :id="widgetId"
            ref="toggle"
            :disabled="disabled"
            :open="open"
            @click="open = !open"
          />
        </template>
      </div>
    </template>

    <pf-dropdown-item
      v-for="o of perPageOptions"
      :key="o.title"
      :class="{ 'pf-m-selected': perPage === o.value }"
      :data-action="`per-page-${o.value}`"
      component="button"
      @click="$emit('update:perPage', o.value)"
    >
      {{ o.title }}
      {{ ` ${perPageSuffix}` }}
      <div v-if="perPage === o.value" :class="styles.optionsMenuMenuItemIcon">
        <check-icon />
      </div>
    </pf-dropdown-item>
  </pf-dropdown>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';
import { PaginationMixin } from './common';
import PfDropdown, {
  DropdownBaseClassKey,
  DropdownDisabledClassKey,
  DropdownMenuClassKey,
  DropdownItemClassKey,
  DropdownToggleIndicatorClassKey,
  DropdownToggleTextClassKey,
  DropdownToggleClassKey,
} from '../Dropdown/Dropdown.vue';
import PfDropdownItem from '../Dropdown/DropdownItem.vue';
import PfDropdownToggle from '../Dropdown/DropdownToggle.vue';
import { defineComponent, markRaw, provide } from 'vue';

export default defineComponent({
  name: 'PfPaginationOptionsMenu',

  components: { CheckIcon, PfDropdown, PfDropdownItem, PfDropdownToggle },

  mixins: [PaginationMixin],

  props: {
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
    provide(DropdownBaseClassKey, styles.optionsMenu);
    provide(DropdownDisabledClassKey, styles.modifiers.disabled);
    provide(DropdownMenuClassKey, styles.optionsMenuMenu);
    provide(DropdownItemClassKey, styles.optionsMenuMenuItem);
    provide(DropdownToggleIndicatorClassKey, styles.optionsMenuToggleButtonIcon);
    provide(DropdownToggleTextClassKey, styles.optionsMenuToggleText);
    provide(DropdownToggleClassKey, styles.optionsMenuToggleButton);

    return {
      styles: markRaw(styles) as typeof styles,
    };
  },

  data() {
    return {
      open: false,
    };
  },
});
</script>
