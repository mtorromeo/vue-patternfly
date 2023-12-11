<template>
  <li
    :class="[styles.navItem, styles.modifiers.expandable, {
      [styles.modifiers.expanded]: realExpanded,
      [styles.modifiers.current]: active,
    }]"
    @click="handleToggle"
  >
    <button
      :id="srText ? undefined : validId"
      ref="expandable"
      type="button"
      :class="styles.navLink"
      :aria-expanded="realExpanded"
      @click.prevent
      @mousedown.prevent
    >
      {{ title }}
      <span :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <AngleRightIcon aria-hidden="true" />
        </span>
      </span>
    </button>
    <section
      :class="styles.navSubnav"
      :aria-labelledby="validId"
      :hidden="!realExpanded || undefined"
    >
      <h2 v-if="srText" :id="validId" :class="a11yStyles.screenReader">{{ srText }}</h2>
      <ul :class="styles.navList">
        <slot />
      </ul>
    </section>
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { getUniqueId } from '../../util';
import { type Ref, ref, computed, type LiHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfNavExpandable',
});

export interface Props extends /* @vue-ignore */ Omit<LiHTMLAttributes, 'onClick'> {
  title?: string;
  srText?: string;
  groupId?: string | number;
  id?: string;
  active?: boolean;
  managed?: boolean;
  expanded?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean, groupId: string | number | undefined): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const expandable: Ref<HTMLButtonElement | undefined> = ref();
const expandedState = ref(props.expanded);

const validId = computed(() => {
  return props.id || getUniqueId();
});

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
