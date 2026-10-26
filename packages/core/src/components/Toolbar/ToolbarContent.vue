<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.toolbarContent,
      classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
      classesFromBreakpointProps(props, ['visibilityAtHeight'], styles, { short: true, vertical: true }),
    ]"
  >
    <div
      :class="[
        styles.toolbarContentSection,
        classesFromBreakpointProps(props, ['rowWrap'], styles, { short: true }),
        {
          [styles.modifiers.alignItemsCenter]: alignItems === 'center',
          [styles.modifiers.alignItemsStart]: alignItems === 'start',
          [styles.modifiers.alignItemsBaseline]: alignItems === 'baseline',
        },
      ]"
    >
      <slot />
    </div>

    <pf-toolbar-expandable-content
      :id="expandableContentId"
      :expanded="expanded"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
    >
      <pf-toolbar-group @mounted="expandable = $event" />

      <template #label-container>
        <pf-toolbar-group @mounted="labelContainer = $event" />
      </template>
    </pf-toolbar-expandable-content>
  </div>
</template>

<script lang="ts">
export const ToolbarContentExpandableRefKey = Symbol('ToolbarContentExpandableRefKey') as InjectionKey<
  Ref<HTMLDivElement | null>
>;
/** Id of the expandable content of the toolbar content, controlled by its toggle group */
export const ToolbarContentExpandableIdKey = Symbol('ToolbarContentExpandableIdKey') as InjectionKey<string>;
export const ToolbarContentLabelContainerRefKey = Symbol('ToolbarContentLabelContainerRefKey') as InjectionKey<
  Ref<HTMLDivElement | null>
>;

interface Props
  extends
    OUIAProps,
    VisibilityBreakpointProps,
    VisibilityAtHeightBreakpointProps,
    RowWrapBreakpointProps,
    /* @vue-ignore */ HTMLAttributes {
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default';
}
</script>

<script lang="ts" setup>
import {
  ref,
  provide,
  onBeforeUnmount,
  type InjectionKey,
  type Ref,
  type HTMLAttributes,
  type VNode,
  inject,
  useId,
} from 'vue';
import {
  classesFromBreakpointProps,
  type RowWrapBreakpointProps,
  type VisibilityBreakpointProps,
  type VisibilityAtHeightBreakpointProps,
} from '../../breakpoints';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarExpandableContent from './ToolbarExpandableContent.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import {
  ToolbarClearFilterButtonTextKey,
  ToolbarExpandedKey,
  ToolbarIdKey,
  ToolbarShowClearFiltersButtonKey,
} from './Toolbar.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarContent',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Groups and items of the toolbar content */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const toolbarId = inject(ToolbarIdKey, undefined);
const expandableContentId = `${toolbarId?.() ?? useId()}-expandable-content-${useId()}`;
provide(ToolbarContentExpandableIdKey, expandableContentId);

const expandable: Ref<HTMLDivElement | null> = ref(null);
provide(ToolbarContentExpandableRefKey, expandable);

const labelContainer: Ref<HTMLDivElement | null> = ref(null);
provide(ToolbarContentLabelContainerRefKey, labelContainer);

const expanded = inject(ToolbarExpandedKey);
const showClearFiltersButton = inject(ToolbarShowClearFiltersButtonKey);
const clearFiltersButtonText = inject(ToolbarClearFilterButtonTextKey);

onBeforeUnmount(() => {
  if (expandable.value) {
    expandable.value = null;
  }
  if (labelContainer.value) {
    labelContainer.value = null;
  }
});
</script>
