<template>
  <component
    v-bind="ouiaProps"
    :is="rootIsButton ? 'button' : 'span'"
    :type="rootIsButton ? 'button' : undefined"
    :class="[
      styles.label,
      colorStyles[color],
      status ? styles.modifiers[status] : null,
      {
        [styles.modifiers.filled]: variant === 'filled',
        [styles.modifiers.outline]: outline || variant === 'outline',
        [styles.modifiers.compact]: compact,
        [styles.modifiers.overflow]: overflow,
        [styles.modifiers.add]: variant === 'add',
        [styles.modifiers.disabled]: isClickableDisabled,
        [labelGroupStyles.modifiers.editable]: editable,
        [styles.modifiers.editableActive]: editing,
        [styles.modifiers.clickable]: isClickable,
      },
    ]"
    @click="rootIsButton ? onClick?.($event) : undefined"
  >
    <input
      v-if="editing"
      ref="inputRef"
      v-model="draft"
      v-bind="editableAttrs"
      :class="styles.labelContent"
      type="text"
      @keydown="onInputKeydown"
    />
    <template v-else>
      <pf-tooltip :position="tooltipPosition">
        <component
          :is="contentComponent"
          ref="contentRef"
          v-bind="editable ? editableAttrs : undefined"
          :class="[styles.labelContent, { [styles.modifiers.clickable]: isClickable }]"
          :to="to"
          :href="href"
          :type="contentComponent === 'button' ? 'button' : undefined"
          :disabled="contentComponent === 'button' && isClickableDisabled ? true : undefined"
          :tabindex="contentComponent === 'a' && isClickableDisabled ? -1 : textOverflowing ? 0 : undefined"
          :aria-disabled="contentComponent === 'a' && isClickableDisabled ? true : undefined"
          @click="onContentClick"
        >
          <span v-if="$slots.icon || status" :class="styles.labelIcon">
            <slot name="icon">
              <pf-circle-check-icon v-if="status === 'success'" />
              <pf-triangle-exclamation-icon v-else-if="status === 'warning'" />
              <pf-circle-exclamation-icon v-else-if="status === 'danger'" />
              <pf-circle-info-icon v-else-if="status === 'info'" />
              <pf-bell-icon v-else />
            </slot>
          </span>

          <span
            ref="textRef"
            :class="styles.labelText"
            :style="textMaxWidth ? { [cssTextMaxWidth.name]: textMaxWidth } : undefined"
          >
            <slot />
          </span>
        </component>

        <template v-if="textOverflowing" #content>
          <slot />
        </template>
      </pf-tooltip>
      <span v-if="onClose || $slots.actions" :class="styles.labelActions">
        <slot name="actions">
          <pf-button
            variant="plain"
            no-padding
            :aria-label="closeBtnAriaLabel ?? ['Close', slotText()].filter(Boolean).join(' ')"
            :disabled="isClickableDisabled ? true : undefined"
            v-bind="closeBtnAttrs"
            @click="onClose"
          >
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </slot>
      </span>
    </template>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ ButtonHTMLAttributes {
  /** The color of the label outline/fill */
  color?: 'blue' | 'teal' | 'green' | 'orange' | 'purple' | 'red' | 'orangered' | 'grey' | 'yellow';
  /** Variant of the label. */
  variant?: 'outline' | 'filled' | 'add';
  /** Status of the label with a respective icon and color. Overrides the color set by the color property. */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'custom';
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: Placement;
  /** vue-router destination for a label that is a router-link. If present, the label will change to an anchor element. */
  to?: RouteLocationRaw;
  /** Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in. */
  href?: string;
  /** Flag for the outline variant, same as variant="outline". */
  outline?: boolean;
  /** Flag indicating the label is compact. */
  compact?: boolean;
  /** Flag indicating the label is disabled. Works only on clickable labels, so either href, to or onClick must be passed in. */
  disabled?: boolean;
  /** Flag indicating if the label is an overflow label. */
  overflow?: boolean;
  /** Flag indicating the label is editable. Click or press enter or space to start editing it. */
  editable?: boolean;
  /** Additional attributes for the editable label button and text input, like aria-label. */
  editableAttrs?: InputHTMLAttributes;
  /** The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'. */
  textMaxWidth?: string;
  /** Aria label for close button. Defaults to "Close" followed by the label text. */
  closeBtnAriaLabel?: string;
  /** Additional attributes for the default close button. */
  closeBtnAttrs?: ComponentProps<typeof PfButton>;
  /** Callback for when the close button is clicked. If present, the label will have a close button. */
  onClose?: (e: Event) => void;
  /** Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in. */
  onClick?: (e: PointerEvent) => void;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Label/label';
import labelGroupStyles from '@patternfly/react-styles/css/components/Label/label-group';
import cssTextMaxWidth from '@patternfly/react-tokens/dist/esm/c_label__text_MaxWidth';
import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type VNode,
  computed,
  nextTick,
  ref,
  useTemplateRef,
  watch,
} from 'vue';
import { useEventListener } from '@vueuse/core';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useChildrenTracker, useElementOverflow } from '../../use';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import type { RouteLocationRaw } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';
import { LabelKey } from './common';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import PfBellIcon from '@vue-patternfly/icons/bell-icon';
import PfCircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import PfTriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import PfCircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import PfCircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';

const colorStyles = {
  blue: styles.modifiers.blue,
  teal: styles.modifiers.teal,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  orangered: styles.modifiers.orangered,
  yellow: styles.modifiers.yellow,
  grey: '',
};

defineOptions({
  name: 'PfLabel',
});

const props = withDefaults(defineProps<Props>(), {
  color: 'grey',
  variant: 'filled',
  tooltipPosition: 'top',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** An editable label completed an edit, with the new text */
  (name: 'editComplete', event: MouseEvent | KeyboardEvent, newText: string): void;
  /** An editable label canceled an edit, with the previous text */
  (name: 'editCancel', event: KeyboardEvent, previousText: string): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  icon?: (props?: Record<never, never>) => VNode[];
  actions?: (props?: Record<never, never>) => VNode[];
}>();

useChildrenTracker(LabelKey);

const text = useTemplateRef('textRef');
const content = useTemplateRef<HTMLElement | { $el: HTMLElement }>('contentRef');
const input = useTemplateRef('inputRef');
const textOverflowing = useElementOverflow(text);

const rootIsButton = computed(() => props.overflow || props.variant === 'add');
const isClickable = computed(() => !!((props.onClick && !rootIsButton.value) || props.href || props.to));
const isClickableDisabled = computed(() => !!((props.href || props.to || props.onClick) && props.disabled));

const contentComponent = computed(() => {
  if (props.href) {
    return 'a';
  }
  if (props.to) {
    return 'router-link';
  }
  if (props.editable || isClickable.value) {
    return 'button';
  }
  return 'span';
});

if (props.onClick && props.href) {
  console.warn(
    'Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop.',
  );
} else if (props.onClick && props.editable) {
  console.warn(
    'Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the editable or onClick prop.',
  );
}

/** Text content of the default slot */
function slotText() {
  const collect = (nodes: unknown): string => {
    if (typeof nodes === 'string') {
      return nodes;
    }
    if (Array.isArray(nodes)) {
      return nodes.map(collect).join('');
    }
    if (nodes && typeof nodes === 'object' && 'children' in nodes) {
      return collect(nodes.children);
    }
    return '';
  };
  return collect(slots.default?.()).trim();
}

const editing = ref(false);
const draft = ref('');
let previousText = '';

function onContentClick(event: PointerEvent) {
  if (contentComponent.value === 'a' && props.disabled) {
    // aria-disabled does not prevent assistive technologies from triggering the link
    event.preventDefault();
    return;
  }
  if (props.editable) {
    event.stopPropagation();
    previousText = slotText();
    draft.value = previousText;
    editing.value = true;
    return;
  }
  if (!rootIsButton.value) {
    props.onClick?.(event);
  }
}

function focusContent() {
  nextTick(() => {
    const el = content.value;
    (el instanceof HTMLElement ? el : el?.$el)?.focus();
  });
}

function completeEdit(event: MouseEvent | KeyboardEvent) {
  if (draft.value) {
    emit('editComplete', event, draft.value);
  }
  editing.value = false;
}

function onInputKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === 'Tab') {
    event.preventDefault();
    event.stopImmediatePropagation();
    completeEdit(event);
    focusContent();
  } else if (event.key === 'Escape') {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (draft.value) {
      emit('editCancel', event, previousText);
    }
    draft.value = previousText;
    editing.value = false;
    focusContent();
  }
}

useEventListener(document, 'mousedown', (event: MouseEvent) => {
  if (editing.value && input.value && !input.value.contains(event.target as Node)) {
    completeEdit(event);
  }
});

watch(editing, value => {
  if (value) {
    nextTick(() => input.value?.focus());
  }
});
</script>
