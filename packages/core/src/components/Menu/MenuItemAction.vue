<template>
  <button
    :class="[styles.menuItemAction, {
      [styles.modifiers.favorite]: isDefined(favorited),
      [styles.modifiers.favorited]: favorited,
    }]"
    :aria-label="ariaLabel"
    :disabled="disabled || item?.disabled || undefined"
    tabindex="-1"
    @click="onClick"
  >
    <span :class="styles.menuItemActionIcon">
      <star-icon v-if="icon === 'favorites' || isDefined(favorited)" />
      <slot v-else />
    </span>
  </button>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject } from 'vue';
import { isDefined } from '../../use';
import { MenuInjectionKey } from './Menu.vue';
import { MenuItemInjectionKey } from './MenuItem.vue';
import StarIcon from '@vue-patternfly/icons/dist/esm/icons/star-icon';

const props = withDefaults(defineProps<{
  /** The action icon to use */
  icon?: 'favorites';
  /** Accessibility label */
  ariaLabel?: string;
  /** Flag indicating if the item is favorited */
  favorited?: boolean;
  /** Disables action, can also be specified on the MenuItem instead */
  disabled?: boolean;
  /** Identifies the action item in the onActionClick on the Menu */
  actionId?: any;
}>(), {
  favorited: undefined,
});

const emit = defineEmits({
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  click: (event: Event) => true,
});

const menu = inject(MenuInjectionKey);
const item = inject(MenuItemInjectionKey);

function onClick(event: Event) {
  emit('click', event);
  if (item?.itemId.value) {
    menu?.onActionClick?.(event, item?.itemId.value, props.actionId);
  }
}
</script>
