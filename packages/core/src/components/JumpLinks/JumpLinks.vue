<template>
  <nav
    v-bind="ouiaProps"
    :class="[
      styles.jumpLinks,
      breakpointClasses, {
        [styles.modifiers.center]: centered,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.expanded]: managedExpanded,
      }
    ]"
  >
    <div :class="styles.jumpLinksMain">
      <div :class="`${styles.jumpLinks}__header`">
        <div v-if="expandable" :class="styles.jumpLinksToggle">
          <pf-button
            variant="plain"
            :aria-label="toggleAriaLabel"
            :aria-expanded="managedExpanded"
            @click="managedExpanded = !managedExpanded"
          >
            <template #icon>
              <span :class="styles.jumpLinksToggleIcon">
                <angle-right-icon />
              </span>
            </template>
            <slot name="label" />
          </pf-button>
        </div>
        <div v-if="$slots.label && alwaysShowLabel" :class="styles.jumpLinksLabel">
          <slot name="label" />
        </div>
      </div>
      <ul :class="styles.jumpLinksList" role="list">
        <slot />
        <pf-jump-links-item
          v-for="(el, i) in autoLinkElements"
          :key="`${i}:${el.textContent}`"
          :node="el"
        >
          {{ el.textContent }}
        </pf-jump-links-item>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export const JumpLinksKey = Symbol("FormSelectOptionsKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfJumpLinksItem>>;
export const JumpLinkInjectionKey = Symbol('JumpLinkInjectionKey') as InjectionKey<{
  offset: number;
  scrollPosition: Ref<number>;
  currentTargetPosition: Ref<number | undefined>;
  scrollableHTMLElement: ComputedRefWithControl<HTMLElement | undefined>;
}>;

export interface Props extends OUIAProps, ExpandableBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Whether to center children. */
  centered?: boolean;
  /** Whether the layout of children is vertical or horizontal. */
  vertical?: boolean;
  /** Flag to always show the label when using `expandable` */
  alwaysShowLabel?: boolean;
  /** Selector or element reference to the scrollable element to spy on. Not passing a selector disables spying. */
  scrollableElement?: string | MaybeComputedElementRef<HTMLElement>;
  /** Selector or element references to the elements to use to auto generate the link items. Linkable items are selected from inside the scrollableElement. */
  autoLinkFromElements?: string | MaybeRef<HTMLElement[]>;
  /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
  offset?: number;
  /** On mobile whether or not the JumpLinks starts out expanded */
  expanded?: boolean;
  /** Aria label for expandable toggle */
  toggleAriaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { classesFromBreakpointProps, type ExpandableBreakpointProps } from '../../breakpoints';
import { provide, nextTick, ref, type Ref, computed, watch, onMounted, onUnmounted, toValue, type HTMLAttributes, type MaybeRef, type InjectionKey } from 'vue';
import { provideChildrenTracker, useManagedProp, type ChildrenTrackerInjectionKey } from '../../use';
import { computedWithControl, type ComputedRefWithControl, type MaybeComputedElementRef } from '@vueuse/core';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfJumpLinksItem from './JumpLinksItem.vue';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfJumpLinks',
});

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
  offset: 100,
  alwaysShowLabel: true,
  toggleAriaLabel: 'Toggle jump links',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:activeIndex', value: number): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
}>();

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['expandable'], styles, { short: true }));
const managedExpanded = useManagedProp('expanded', false);

const links = provideChildrenTracker(JumpLinksKey);

const scrollableHTMLElement = computedWithControl(() => [props.scrollableElement, props.autoLinkFromElements],() => {
  if (!props.scrollableElement) {
    return;
  }

  if (typeof props.scrollableElement === 'string') {
    const el = document.querySelector(props.scrollableElement);
    return el instanceof HTMLElement ? el : undefined;
  }

  return toValue(props.scrollableElement);
});

const autoLinkElements = computedWithControl(() => [scrollableHTMLElement, props.autoLinkFromElements], () => {
  const scrollableElement = toValue(scrollableHTMLElement);

  const linkElements: HTMLElement[] = [];

  if (typeof props.autoLinkFromElements === 'string') {
    if (scrollableElement) {
      linkElements.push(...[
        ...scrollableElement.querySelectorAll(props.autoLinkFromElements),
      ].filter((e: Element) => e instanceof HTMLElement) as HTMLElement[]);
    }
  } else if (props.autoLinkFromElements) {
    linkElements.push(...toValue(props.autoLinkFromElements));
  }

  return linkElements;
});

onMounted(scrollableHTMLElement.trigger);
onUnmounted(() => toValue(scrollableHTMLElement)?.removeEventListener('scroll', scrollSpy));

watch(scrollableHTMLElement, (value, oldValue) => {
  oldValue?.removeEventListener('scroll', scrollSpy);
  value?.addEventListener('scroll', scrollSpy);
  nextTick(autoLinkElements.trigger);
}, { immediate: true });

const scrollPosition = ref(0);
const currentTargetPosition: Ref<number | undefined> = ref();

provide(JumpLinkInjectionKey, {
  offset: props.offset,
  scrollPosition,
  currentTargetPosition,
  scrollableHTMLElement,
});

function scrollSpy() {
  const scrollableElement = toValue(scrollableHTMLElement);
  if (!scrollableElement) {
    return;
  }

  scrollPosition.value = Math.ceil(scrollableElement.scrollTop + props.offset);

  nextTick(() => {
    const passedLinksPositions = links
      .map(link => {
        const el = link.$.exposed?.target.value as typeof link.target;
        return el?.offsetTop ?? null;
      })
      .filter(n => n !== null && n < scrollPosition.value)
      .sort((a, b) => (a ?? -1) - (b ?? -1)) as number[];
    currentTargetPosition.value = passedLinksPositions.length > 0 ? passedLinksPositions[passedLinksPositions.length - 1] : undefined;
  });
}
</script>
