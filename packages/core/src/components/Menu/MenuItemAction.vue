<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.menuItemAction,
      {
        'pf-m-favorite': isDefined(favorited),
        [styles.modifiers.favorited]: favorited,
      },
    ]"
  >
    <pf-button
      v-bind="$attrs"
      role="menuitem"
      variant="plain"
      :disabled="disabled || item?.disabled || undefined"
      :tabindex="-1"
      @click="onClick"
    >
      <template v-if="icon === 'favorites' || isDefined(favorited) || $slots.icon" #icon>
        <slot v-if="!isDefined(favorited) && icon !== 'favorites'" name="icon" />
        <star-icon v-else />
      </template>
    </pf-button>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject } from 'vue';
import PfButton from '../Button.vue';
import { MenuInjectionKey, MenuItemInjectionKey } from './common';
import StarIcon from '@vue-patternfly/icons/star-icon';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfMenuItemAction',
  inheritAttrs: false,
});

interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'onClick' | 'tabindex' | 'ouiaId' | 'ouiaSafe'> {
  /** The action icon to use: "favorites" for the star icon, or the icon slot for a custom icon */
  icon?: 'favorites';
  /** Flag indicating if the item is favorited */
  favorited?: boolean;
  /** Disables action, can also be specified on the MenuItem instead */
  disabled?: boolean;
  /** Identifies the action item in the onActionClick on the Menu */
  actionId?: unknown;
}

const props = withDefaults(defineProps<Props>(), {
  favorited: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Custom icon of the action */
  icon?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  (name: 'click', event: Event): void;
}>();

const menu = inject(MenuInjectionKey);
const item = inject(MenuItemInjectionKey);

function onClick(event: Event) {
  emit('click', event);
  menu?.onActionClick?.(event, item?.itemId.value ?? undefined, props.actionId);
}
</script>
