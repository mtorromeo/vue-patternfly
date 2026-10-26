<template>
  <div
    v-if="$slots.default || $slots['add-label-control']"
    v-bind="ouiaProps"
    :class="[
      styles.labelGroup,
      {
        [styles.modifiers.category]: category,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.editable]: editable,
      },
    ]"
  >
    <div :class="styles.labelGroupMain">
      <pf-tooltip v-if="category" :position="tooltipPosition">
        <template v-if="labelOverflowing" #content>
          {{ category }}
        </template>

        <span ref="labelRef" :class="styles.labelGroupLabel" :tabindex="labelOverflowing ? 0 : undefined">
          <span :id="effectiveId" aria-hidden="true">
            {{ category }}
          </span>
        </span>
      </pf-tooltip>

      <ul
        :class="styles.labelGroupList"
        :aria-labelledby="category ? effectiveId : undefined"
        :aria-label="category ? undefined : ariaLabel"
        role="list"
      >
        <pass-through>
          <template #capture>
            <slot />
          </template>

          <template #default="{ children }">
            <template v-for="(child, i) in children" :key="i">
              <li v-if="open || i < numLabels" :class="styles.labelGroupListItem">
                <component :is="child" />
              </li>
            </template>
            <li v-if="children.length > numLabels" :class="styles.labelGroupListItem">
              <pf-label :compact="compact" overflow @click="overflowLabelClick">
                {{ open ? expandedText : fillTemplate(collapsedText, { remaining: children.length - numLabels }) }}
              </pf-label>
            </li>
          </template>
        </pass-through>

        <li v-if="slots['add-label-control']" :class="styles.labelGroupListItem">
          <slot name="add-label-control" />
        </li>
        <li v-if="editable && editableTextarea" :class="[styles.labelGroupListItem, styles.modifiers.textarea]">
          <textarea :class="styles.labelGroupTextarea" rows="1" tabindex="0" v-bind="editableTextareaAttrs" />
        </li>
      </ul>
    </div>

    <div v-if="closable" :class="styles.labelGroupClose">
      <pf-button
        :id="`remove_group_${effectiveId}`"
        variant="plain"
        small
        :aria-label="closeBtnAriaLabel"
        :aria-labelledby="`remove_group_${effectiveId} ${effectiveId}`"
        @click="emit('click', $event)"
      >
        <template #icon>
          <xmark-icon aria-hidden="true" />
        </template>
      </pf-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef, type HTMLAttributes, type TextareaHTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Label/label-group';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import PfLabel from './Label.vue';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { fillTemplate } from '../../util';
import { useElementOverflow } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';
import PassThrough from '../../helpers/PassThrough.vue';

defineOptions({
  name: 'PfLabelGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
  /** Id of the category label, which labels the list and the close button. Generated when not set. */
  id?: string;
  /** Flag for having the label group default to expanded */
  defaultOpen?: boolean;
  /** Flag if label group can be closed */
  closable?: boolean;
  /** Flag indicating the labels in the group are compact */
  compact?: boolean;
  /** Flag to implement a vertical layout */
  vertical?: boolean;
  /** Flag indicating contained labels are editable. Allows spacing for a text input after the labels. */
  editable?: boolean;
  /** Flag indicating the editable label group should be appended with a textarea. */
  editableTextarea?: boolean;
  /** Additional attributes for the editable textarea. */
  editableTextareaAttrs?: TextareaHTMLAttributes;
  /** Category name text for the label group category.  If this prop is supplied the label group with have a label and category styling applied */
  category?: string;
  /** Set number of labels to show before overflow */
  numLabels?: number;
  /** Position of the tooltip which is displayed if the category name text is longer */
  tooltipPosition?: Placement;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Aria label for label group that does not have a category name */
  ariaLabel?: string;
  /** Customizable "Show Less" text string */
  expandedText?: string;
  /** Customizable template string. Use variable "${remaining}" for the overflow label count. */
  collapsedText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  numLabels: 3,
  tooltipPosition: 'top',
  closeBtnAriaLabel: 'Close label group',
  ariaLabel: 'Label group category',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
  (name: 'overflowLabelClick', e: PointerEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'add-label-control'?: (props?: Record<never, never>) => any;
}>();

const label = useTemplateRef('labelRef');
const labelOverflowing = useElementOverflow(label);
const open = ref(props.defaultOpen);
const generatedId = useId();
const effectiveId = computed(() => props.id ?? generatedId);

function overflowLabelClick(e: PointerEvent) {
  toggleCollapse();
  emit('overflowLabelClick', e);
}

function toggleCollapse() {
  open.value = !open.value;
}
</script>
