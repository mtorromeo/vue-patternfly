<template>
  <nav
    ref="navRef"
    v-bind="ouiaProps"
    :class="[
      styles.jumpLinks,
      breakpointClasses,
      {
        [styles.modifiers.center]: centered,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.expanded]: expanded,
      },
    ]"
    :aria-label="computedAriaLabel"
    :aria-labelledby="computedAriaLabelledBy"
  >
    <div :class="styles.jumpLinksMain">
      <div :class="`${styles.jumpLinks}__header`">
        <div v-if="hasToggle" :class="styles.jumpLinksToggle">
          <pf-button
            :id="effectiveLabelId"
            variant="plain"
            :aria-label="label || $slots.label ? undefined : (toggleAriaLabel ?? messages.jumpLinksToggle)"
            :aria-expanded="expanded"
            @click="expanded = !expanded"
          >
            <template #icon>
              <span :class="styles.jumpLinksToggleIcon">
                <pf-angle-down-icon />
              </span>
            </template>
            <template v-if="label || $slots.label" #default>
              <slot name="label">{{ label }}</slot>
            </template>
          </pf-button>
        </div>
        <div
          v-if="(label || $slots.label) && alwaysShowLabel && !hasToggle"
          :id="effectiveLabelId"
          :class="styles.jumpLinksLabel"
        >
          <slot name="label">{{ label }}</slot>
        </div>
      </div>
      <ul
        :class="styles.jumpLinksList"
        role="list"
        :aria-label="computedAriaLabel"
        :aria-labelledby="computedAriaLabelledBy"
      >
        <slot />
        <pf-jump-links-item v-for="(el, i) in autoLinkElements" :key="`${i}:${el.textContent}`" :node="el">
          {{ el.textContent }}
        </pf-jump-links-item>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export { JumpLinkInjectionKey, JumpLinksKey } from './common';

interface Props extends OUIAProps, ExpandableBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Whether to center children. */
  centered?: boolean;
  /** Whether the layout of children is vertical or horizontal. */
  vertical?: boolean;
  /** Label to add to nav element. */
  label?: string;
  /** Flag to always show the label when not expandable */
  alwaysShowLabel?: boolean;
  /** Adds an accessible label to the internal nav element. Defaults to the value of the label prop. */
  ariaLabel?: string;
  /** Custom ID applied to the label, or to the expandable toggle, which labels the jump links. Generated when not set. */
  labelId?: string;
  /** Selector or element reference to the scrollable element to spy on. Not passing it disables spying. */
  scrollableElement?: string | MaybeComputedElementRef<HTMLElement>;
  /** Selector or element references to the elements to use to auto generate the link items. Linkable items are selected from inside the scrollableElement. */
  autoLinkFromElements?: string | MaybeRef<HTMLElement[]>;
  /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
  offset?: number;
  /** Aria label for expandable toggle. Defaults to the `jumpLinksToggle` message. */
  toggleAriaLabel?: string;
  /** How a click on an item updates the navigation history with its href: pushing a new entry or replacing the current one. By default the history is not updated. */
  navHistory?: 'push' | 'replace';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { usePfMessages } from '../../messages';
import { devWarn } from '../../helpers/dev';
import sidebarStyles from '@patternfly/react-styles/css/components/Sidebar/sidebar';
import cssToggleDisplayVar from '@patternfly/react-tokens/dist/esm/c_jump_links__toggle_Display';
import { classesFromBreakpointProps, type ExpandableBreakpointProps } from '../../breakpoints';
import {
  provide,
  nextTick,
  computed,
  watch,
  onMounted,
  onUnmounted,
  toValue,
  useId,
  useSlots,
  useTemplateRef,
  type HTMLAttributes,
  type MaybeRef,
} from 'vue';
import { provideChildrenTracker } from '../../use';
import { computedWithControl, type MaybeComputedElementRef } from '@vueuse/core';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfJumpLinksItem from './JumpLinksItem.vue';
import { JumpLinkInjectionKey, JumpLinksKey, type JumpLinksItemRegistration } from './common';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfJumpLinks',
});

const props = withDefaults(defineProps<Props>(), {
  offset: 0,
  alwaysShowLabel: true,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** On mobile whether or not the JumpLinks starts out expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

/** The index of the active item, updated while spying on the scrollable element */
const activeIndex = defineModel<number>('activeIndex', { default: 0 });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Label of the jump links, overrides the label prop */
  label?: (props?: Record<never, never>) => any;
}>();

const slots = useSlots();
const nav = useTemplateRef('navRef');

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['expandable'], styles, { short: true }));

const hasToggle = computed(() =>
  [
    props.expandable,
    props.expandableSm,
    props.expandableMd,
    props.expandableLg,
    props.expandableXl,
    props.expandable2xl,
  ].includes('expandable'),
);

const generatedId = useId();
const effectiveLabelId = computed(() => props.labelId ?? generatedId);
const hasAriaLabelledBy = computed(() => hasToggle.value || (!!(props.label || slots.label) && props.alwaysShowLabel));
const computedAriaLabel = computed(() => (hasAriaLabelledBy.value ? undefined : (props.ariaLabel ?? props.label)));
const computedAriaLabelledBy = computed(() => (hasAriaLabelledBy.value ? effectiveLabelId.value : undefined));

if (!props.label && !slots.label && !props.ariaLabel) {
  devWarn('JumpLinks: for accessibility reasons, an aria-label should be specified if no label is provided');
}
if (!props.label && !slots.label && !props.toggleAriaLabel && !messages.value.jumpLinksToggle && hasToggle.value) {
  devWarn('JumpLinks: for accessibility reasons, a toggleAriaLabel should be specified if no label is provided');
}

const links = provideChildrenTracker(JumpLinksKey);

/** The registered items in document order */
const orderedLinks = computed(() =>
  ([...links] as JumpLinksItemRegistration[]).sort((a, b) => {
    const elA = a.el();
    const elB = b.el();
    if (!elA || !elB) {
      return 0;
    }
    return elA.compareDocumentPosition(elB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }),
);

const scrollableHTMLElement = computedWithControl(
  () => [props.scrollableElement, props.autoLinkFromElements],
  () => {
    if (!props.scrollableElement) {
      return;
    }

    if (typeof props.scrollableElement === 'string') {
      const el = document.querySelector(props.scrollableElement);
      return el instanceof HTMLElement ? el : undefined;
    }

    return toValue(props.scrollableElement);
  },
);

const spying = computed(() => !!scrollableHTMLElement.value);

const autoLinkElements = computedWithControl(
  () => [scrollableHTMLElement, props.autoLinkFromElements],
  () => {
    const scrollableElement = toValue(scrollableHTMLElement);

    const linkElements: HTMLElement[] = [];

    if (typeof props.autoLinkFromElements === 'string') {
      if (scrollableElement) {
        linkElements.push(
          ...([...scrollableElement.querySelectorAll(props.autoLinkFromElements)].filter(
            (e: Element) => e instanceof HTMLElement,
          ) as HTMLElement[]),
        );
      }
    } else if (props.autoLinkFromElements) {
      linkElements.push(...toValue(props.autoLinkFromElements));
    }

    return linkElements;
  },
);

// Disables the scroll spy while scrolling to a clicked item, so that it does not override its active state
let clickScrolling = false;
let clickScrollingTimeout: ReturnType<typeof setTimeout> | undefined;

function endClickScrolling() {
  clickScrolling = false;
  clearTimeout(clickScrollingTimeout);
}

onMounted(scrollableHTMLElement.trigger);
onUnmounted(() => {
  endClickScrolling();
  const el = toValue(scrollableHTMLElement);
  el?.removeEventListener('scroll', scrollSpy);
  el?.removeEventListener('scrollend', endClickScrolling);
});

watch(
  scrollableHTMLElement,
  (value, oldValue) => {
    oldValue?.removeEventListener('scroll', scrollSpy);
    oldValue?.removeEventListener('scrollend', endClickScrolling);
    value?.addEventListener('scroll', scrollSpy);
    value?.addEventListener('scrollend', endClickScrolling);
    nextTick(() => {
      autoLinkElements.trigger();
      nextTick(scrollSpy);
    });
  },
  { immediate: true },
);

function scrollSpy() {
  const scrollableElement = toValue(scrollableHTMLElement);
  if (!scrollableElement || clickScrolling) {
    return;
  }

  const scrollPosition = Math.ceil(scrollableElement.scrollTop + props.offset);
  // The last section may not have enough content to scroll past it, so it becomes active at the bottom
  const isAtBottom =
    Math.ceil(scrollableElement.scrollTop + scrollableElement.clientHeight) >= scrollableElement.scrollHeight;

  nextTick(() => {
    const targets = orderedLinks.value.map(link => link.resolveTarget());
    if (!targets.length) {
      return;
    }
    if (isAtBottom) {
      activeIndex.value = targets.length - 1;
      return;
    }
    const positions = targets
      .map((target, index) => ({ y: target ? target.offsetTop : null, index }))
      .filter((p): p is { y: number; index: number } => p.y !== null)
      .sort((a, b) => b.y - a.y);
    const current = positions.find(({ y }) => scrollPosition >= y);
    if (current) {
      activeIndex.value = current.index;
    }
  });
}

/** Whether the toggle is visible, so the jump links collapse after a click */
function isResponsive(el: HTMLElement | null) {
  return !!el && getComputedStyle(el).getPropertyValue(cssToggleDisplayVar.name).includes('block');
}

function onItemClick(item: JumpLinksItemRegistration, event: MouseEvent, href: string | undefined) {
  const scrollableElement = toValue(scrollableHTMLElement);
  const target = item.resolveTarget();
  if (!scrollableElement || !target) {
    return;
  }
  event.preventDefault();

  let offset = props.offset;
  if (isResponsive(nav.value)) {
    // collapse immediately to compute the offset with the collapsed height
    nav.value?.classList.remove(styles.modifiers.expanded);
    expanded.value = false;
    let stickyParent = nav.value?.parentElement;
    while (stickyParent && !stickyParent.classList.contains(sidebarStyles.modifiers.sticky)) {
      stickyParent = stickyParent.parentElement;
    }
    if (stickyParent) {
      offset += stickyParent.scrollHeight;
    }
  }

  clickScrolling = true;
  clearTimeout(clickScrollingTimeout);
  // fallback for browsers that do not emit scrollend
  clickScrollingTimeout = setTimeout(endClickScrolling, 1000);
  scrollableElement.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  target.focus();

  if (href && props.navHistory === 'push') {
    window.history.pushState('', '', href);
  } else if (href && props.navHistory === 'replace') {
    window.history.replaceState('', '', href);
  }

  activeIndex.value = orderedLinks.value.indexOf(item);
}

provide(JumpLinkInjectionKey, {
  spying,
  scrollableHTMLElement,
  isActive: item => spying.value && orderedLinks.value.indexOf(item) === activeIndex.value,
  onItemClick,
});
</script>
