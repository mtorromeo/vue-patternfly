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
      @click="emit('update:perPage', o.value)"
    >
      {{ o.title }}
      {{ ` ${perPageSuffix}` }}
      <div v-if="perPage === o.value" :class="styles.optionsMenuMenuItemIcon">
        <check-icon />
      </div>
    </pf-dropdown-item>
  </pf-dropdown>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import PfDropdown, {
  type Props as DropdownProps,
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
import { provide, ref } from 'vue';
import { defaultPerPageOptions, type CommonPaginationProps } from './common';

defineOptions({
  name: 'PfPaginationOptionsMenu',
});

export interface Props extends CommonPaginationProps, /* @vue-ignore */ DropdownProps {
  count?: number;
  firstIndex?: number;
  lastIndex?: number;
  itemsPerPageTitle?: string;
  perPageSuffix?: string;
  itemsTitle?: string;
  optionsToggle?: string;
}

withDefaults(defineProps<Props>(), {
  count: 0,
  firstIndex: 0,
  lastIndex: 0,
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Items per page',
  page: 0,
  perPage: defaultPerPageOptions[0].value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'pagination-options-menu',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  (name: 'update:perPage', value: number): void;
}>();

provide(DropdownBaseClassKey, styles.optionsMenu);
provide(DropdownDisabledClassKey, styles.modifiers.disabled);
provide(DropdownMenuClassKey, styles.optionsMenuMenu);
provide(DropdownItemClassKey, styles.optionsMenuMenuItem);
provide(DropdownToggleIndicatorClassKey, styles.optionsMenuToggleButtonIcon);
provide(DropdownToggleTextClassKey, styles.optionsMenuToggleText);
provide(DropdownToggleClassKey, styles.optionsMenuToggleButton);

const open = ref(false);
</script>
