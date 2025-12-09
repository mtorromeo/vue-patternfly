<template>
  <li
    v-bind="ouiaProps"
    :class="[styles.navItem, {
      [styles.modifiers.expanded]: realExpanded,
      [styles.modifiers.current]: active,
    }]"
    @click="handleToggle"
  >
    <button
      :id="srText ? undefined : id"
      ref="expandableRef"
      type="button"
      :class="styles.navLink"
      :aria-expanded="realExpanded"
      :tabindex="sidebarOpen ? undefined : -1"
      @click.prevent
      @mousedown.prevent
    >
      <span :class="`${styles.nav}__link-text`">
        <slot name="title">{{ title }}</slot>
      </span>
      <span :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <angle-right-icon />
        </span>
      </span>
    </button>
    <section
      :class="styles.navSubnav"
      :aria-labelledby="id"
      :hidden="!realExpanded || undefined"
      :inert="!realExpanded || undefined"
    >
      <h2 v-if="srText" :id="id" :class="a11yStyles.screenReader">{{ srText }}</h2>
      <ul :class="styles.navList" role="list">
        <slot />
      </ul>
    </section>
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import { ref, computed, type LiHTMLAttributes, useTemplateRef, inject, useId } from 'vue';

defineOptions({
  name: 'PfNavExpandable',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'onClick'> {
  title?: string;
  srText?: string;
  groupId?: string | number;
  id?: string;
  active?: boolean;
  managed?: boolean;
  expanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean, groupId: string | number | undefined): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  title?: (props?: Record<never, never>) => any;
}>();

const expandable = useTemplateRef('expandableRef');
const expandedState = ref(props.expanded);
const sidebarOpen = inject(SidebarOpenKey, false);

const realExpanded = computed({
  get() {
    return props.managed ? expandedState.value : props.expanded;
  },

  set(value: boolean) {
    if (props.managed) {
      expandedState.value = value;
    } else {
      emit('update:expanded', value, props.groupId);
    }
  },
});

function handleToggle(e: Event) {
  if (!(e.target instanceof Element)) {
    return;
  }
  // Item events can bubble up, ignore those
  if (!expandable.value?.contains(e.target)) {
    return;
  }
  realExpanded.value = !realExpanded.value;
}
</script>
