<template>
  <div
    v-if="$slots.default"
    v-bind="ouiaProps"
    :id="id"
    :class="[styles.labelGroup, {
      [styles.modifiers.category]: category,
      [styles.modifiers.vertical]: vertical,
      [styles.modifiers.editable]: editable,
    }]"
  >
    <div :class="styles.labelGroupMain">
      <pf-tooltip v-if="category">
        <template v-if="labelOverflowing" #content>
          {{ category }}
        </template>

        <span ref="labelRef" :class="styles.labelGroupLabel">
          <span aria-hidden="true">
            {{ category }}
          </span>
        </span>
      </pf-tooltip>

      <ul
        :class="styles.labelGroupList"
        :aria-labelledby="id"
        :aria-label="ariaLabel"
        role="list"
      >
        <render />
        <li v-if="slots['add-label-control']" :class="styles.labelGroupListItem">
          <slot name="add-label-control" />
        </li>
        <li v-if="editable && editableTextarea" :class="[styles.labelGroupListItem, styles.modifiers.textarea]">
          <textarea :class="styles.labelGroupTextarea" rows="1" tabindex="0" v-bind="editableTextareaProps" />
        </li>
      </ul>

      <div v-if="closable" :class="styles.labelGroupClose">
        <pf-button variant="plain" no-padding :aria-label="closeBtnAriaLabel" @click="emit('click', $event)">
          <template #icon>
            <circle-xmark-icon aria-hidden />
          </template>
        </pf-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref, useTemplateRef, type HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Label/label-group';
import labelStyles from '@patternfly/react-styles/css/components/Label/label';
import CircleXmarkIcon from '@vue-patternfly/icons/circle-xmark-icon';
import PfLabel from './Label.vue';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { findChildrenVNodes, fillTemplate } from '../../util';
import { useElementOverflow } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfLabelGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
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
  /** Additional props passed to the editable textarea. */
  editableTextareaProps?: any;
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
  closeBtnAriaLabel: 'Close chip group',
  ariaLabel: 'Chip group category',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
  (name: 'overflowChipClick', e: PointerEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'add-label-control'?: (props?: Record<never, never>) => any;
}>();

const label = useTemplateRef('labelRef');
const labelOverflowing = useElementOverflow(label);
const open = ref(props.defaultOpen);

function overflowChipClick(e: PointerEvent) {
  toggleCollapse();
  emit('overflowChipClick', e);
}

function toggleCollapse() {
  open.value = !open.value;
}

function render() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];

  const chipArray = open.value ? children : children.slice(0, props.numLabels);

  const lis = chipArray.map((child, i) => h('li', { key: i, class: styles.labelGroupListItem }, child));

  if (children.length > props.numLabels) {
    const collapsedTextResult = fillTemplate(props.collapsedText, {
      remaining: children.length - chipArray.length,
    });
    lis.push(h('li', { class: styles.labelGroupListItem }, [
      h(PfLabel, {
        class: { [labelStyles.modifiers.compact]: props.compact },
        component: 'button',
        overflow: true,
        onClick: overflowChipClick as (e: Event) => void,
      },
        () => open.value ? props.expandedText : collapsedTextResult,
      ),
    ]));
  }

  return lis;
}
</script>
