
import type JumpLinksListVue from './JumpLinksList.vue';
<template>
  <li
    v-bind="ouiaProps"
    :class="[styles.jumpLinksItem, { [styles.modifiers.current]: managedActive }]"
    role="list"
    :aria-current="managedActive ? 'location' : undefined"
  >
    <auto-wrap component="a" :exclude="PfJumpLinksList" :class="styles.jumpLinksLink" v-bind="{ href, onClick }">
      <span :class="styles.jumpLinksLinkText">
        <slot />
      </span>
    </auto-wrap>
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import PfJumpLinksList from './JumpLinksList.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import { type MaybeComputedElementRef } from '@vueuse/core';
import { inject, toValue, onMounted, watch, computed, ref, type Ref, type LiHTMLAttributes } from 'vue';
import { JumpLinkInjectionKey, JumpLinksKey } from './JumpLinks.vue';
import { useChildrenTracker } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfJumpLinksItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role' | 'aria-current'> {
  /** Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`. */
  active?: boolean;
  /** Href for this link */
  href?: string;
  /** Selector or HTMLElement to spy on */
  node?: string | MaybeComputedElementRef<HTMLElement>;
}

const props = withDefaults(defineProps<Props>(), {
  active: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', event: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(JumpLinksKey);

const jumpLinks = inject(JumpLinkInjectionKey);

const target: Ref<HTMLElement | null> = ref(null);

function searchTarget() {
  if (typeof props.node === 'string') {
    const scrollableElement = toValue(jumpLinks?.scrollableHTMLElement);
    if (scrollableElement) {
      const el = scrollableElement.querySelector(props.node) ?? undefined;
      target.value = el instanceof HTMLElement ? el : null;
    }
    return;
  }
  target.value = toValue(props.node) ?? null;
}

watch(() => [props.node, jumpLinks?.scrollableHTMLElement], searchTarget);
onMounted(searchTarget);

function onClick(event: PointerEvent) {
  emit('click', event);

  const scrollableElement = toValue(jumpLinks?.scrollableHTMLElement);
  if (target.value && scrollableElement) {
    scrollableElement.scrollTo({
      top: target.value.offsetTop - (jumpLinks?.offset ?? 0),
      behavior: 'smooth',
    });
  }
}

const managedActive = computed(() => {
  if (props.active !== undefined) {
    return props.active;
  }
  return jumpLinks?.scrollPosition.value && jumpLinks?.currentTargetPosition.value && jumpLinks?.currentTargetPosition.value === target.value?.offsetTop;
});

defineExpose({
  target,
});
</script>
