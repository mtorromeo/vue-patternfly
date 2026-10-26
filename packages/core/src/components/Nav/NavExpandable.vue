<template>
  <li
    v-bind="ouiaProps"
    :class="[
      styles.navItem,
      {
        [styles.modifiers.expanded]: expandedState,
        [styles.modifiers.current]: active,
      },
    ]"
  >
    <button
      :id="srText ? undefined : id"
      type="button"
      :class="styles.navLink"
      :aria-expanded="expandedState"
      :tabindex="sidebarOpen ? undefined : -1"
      v-bind="buttonAttrs"
      @click="toggle"
    >
      <span v-if="$slots.icon" :class="styles.navLinkIcon">
        <slot name="icon" />
      </span>
      <span v-if="expandableIcon" :class="styles.navLinkExpandableIcon">
        <pf-ellipsis-icon />
      </span>
      <span :class="styles.navLinkText">
        <slot name="title">{{ title }}</slot>
      </span>
      <span :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <pf-angle-down-icon />
        </span>
      </span>
    </button>
    <section
      :class="styles.navSubnav"
      :aria-labelledby="id"
      :hidden="!expandedState || undefined"
      :inert="!expandedState || undefined"
    >
      <h2 v-if="srText" :id="id" :class="a11yStyles.screenReader">{{ srText }}</h2>
      <ul :class="styles.navList" role="list">
        <slot />
      </ul>
    </section>
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /** Title shown for the expandable list, replaced by the title slot */
  title?: string;
  /** If defined, screen readers will read this text instead of the list title */
  srText?: string;
  /** Group identifier, emitted with update:expanded and with the toggle event of the nav */
  groupId?: NavId;
  /** Identifier of the toggle (or of the srText heading), labelling the list. Generated when not set. */
  id?: string;
  /** Makes the expandable list title active */
  active?: boolean;
  /** Expands the list: the initial state, followed whenever it changes. Bind it with v-model:expanded to track clicks. */
  expanded?: boolean;
  /** Adds an expandable icon to indicate the section is expandable */
  expandableIcon?: boolean;
  /** Additional attributes added to the toggle button */
  buttonAttrs?: ButtonHTMLAttributes;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfEllipsisIcon from '@vue-patternfly/icons/ellipsis-icon';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import { ref, watch, inject, useId, type ButtonHTMLAttributes, type LiHTMLAttributes, type VNode } from 'vue';
import { NavOnToggleKey, type NavId } from './common';

defineOptions({
  name: 'PfNavExpandable',
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** The list was expanded or collapsed by its toggle */
  (name: 'update:expanded', value: boolean, groupId: NavId | undefined): void;
}>();

defineSlots<{
  /** Items of the expandable list */
  default?: (props?: Record<never, never>) => VNode[];
  /** Title of the expandable list, replacing the title prop */
  title?: (props?: Record<never, never>) => VNode[];
  /** Icon rendered before the title */
  icon?: (props?: Record<never, never>) => VNode[];
}>();

const onToggle = inject(NavOnToggleKey, undefined);
const sidebarOpen = inject(SidebarOpenKey, true);

// like upstream, the expanded prop seeds the state and resets it when it changes, while the toggle always works
const expandedState = ref(props.expanded);
watch(
  () => props.expanded,
  expanded => (expandedState.value = expanded),
);

function toggle(event: MouseEvent) {
  expandedState.value = !expandedState.value;
  emit('update:expanded', expandedState.value, props.groupId);
  onToggle?.(event, props.groupId, expandedState.value);
}
</script>
