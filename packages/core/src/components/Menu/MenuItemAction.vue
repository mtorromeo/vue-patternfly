<template>
  <button
    v-bind="ouiaProps"
    :class="[styles.menuItemAction, {
      [styles.modifiers.favorite]: isDefined(favorited),
      [styles.modifiers.favorited]: favorited,
    }]"
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
import { inject, type ButtonHTMLAttributes } from 'vue';
import { MenuInjectionKey } from './Menu.vue';
import { MenuItemInjectionKey } from './MenuItem.vue';
import StarIcon from '@vue-patternfly/icons/star-icon';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuItemAction',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'onClick' | 'tabindex'> {
  /** The action icon to use */
  icon?: 'favorites';
  /** Flag indicating if the item is favorited */
  favorited?: boolean;
  /** Disables action, can also be specified on the MenuItem instead */
  disabled?: boolean;
  /** Identifies the action item in the onActionClick on the Menu */
  actionId?: any;
}

const props = withDefaults(defineProps<Props>(), {
  favorited: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  (name: 'click', event: Event): void;
}>();

const menu = inject(MenuInjectionKey);
const item = inject(MenuItemInjectionKey);

function onClick(event: Event) {
  emit('click', event);
  if (item?.itemId.value) {
    menu?.onActionClick?.(event, item?.itemId.value, props.actionId);
  }
}
</script>
