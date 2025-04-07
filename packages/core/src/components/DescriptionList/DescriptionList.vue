<template>
  <dl
    v-bind="(ouiaProps as any)"
    :class="[
      styles.descriptionList,
      classesFromBreakpointProps($props, ['columns', 'orientation'], styles, { short: true }),
      {
        [styles.modifiers.horizontal]: horizontal || fluid,
        [styles.modifiers.autoColumnWidths]: autoColumnWidths,
        [styles.modifiers.autoFit]: autoFit,
        [styles.modifiers.inlineGrid]: inlineGrid,
        [styles.modifiers.compact]: compact,
        [styles.modifiers.fluid]: fluid,
        [styles.modifiers.fillColumns]: fillColumns,
        [styles.modifiers.displayLg]: displaySize === 'lg',
        [styles.modifiers.display_2xl]: displaySize === '2xl',
      }
    ]"
    :style="{
      [cssTermWidth.name]: termWidth,
      ...cssVarsFromBreakpointProps(props, 'autoFitMin', cssGridTemplateColumnsMin.name),
      ...cssVarsFromBreakpointProps(props, 'horizontalTermWidth', cssHorizontalTermWidth.name),
    }"
  >
    <slot />
  </dl>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/c_description_list_GridTemplateColumns_min';
import cssTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list__term_width';
import cssHorizontalTermWidth from '@patternfly/react-tokens/dist/esm/c_description_list_m_horizontal__term_width';
import { type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { classesFromBreakpointProps, cssVarsFromBreakpointProps, type AutoFitMinBreakpointProps, type ColumnsBreakpointProps, type HorizontalTermWidthBreakpointProps, type OrientationBreakpointProps } from '../../breakpoints';

defineOptions({
  name: 'PfDescriptionList',
});

export interface Props extends OUIAProps, ColumnsBreakpointProps, OrientationBreakpointProps, AutoFitMinBreakpointProps, HorizontalTermWidthBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the description list to auto fit. */
  autoFit?: boolean;
  /** Sets the description list component term and description pair to a horizontal layout. */
  horizontal?: boolean;
  /** Sets the description list to format automatically. */
  autoColumnWidths?: boolean;
  /** Modifies the description list display to inline-grid. */
  inlineGrid?: boolean;
  /** Sets the description list to compact styling. */
  compact?: boolean;
  /** Sets a horizontal description list to have fluid styling. */
  fluid?: boolean;
  /** Sets the the default placement of description list groups to fill from top to bottom. */
  fillColumns?: boolean;
  /** Sets the display size of the descriptions in the description list.*/
  displaySize?: 'default' | 'lg' | '2xl';
  /** Sets the description list's term column width.*/
  termWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  displaySize: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
