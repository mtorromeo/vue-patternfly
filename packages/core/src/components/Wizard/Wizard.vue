<template>
  <div
    :class="[styles.wizard, { [styles.modifiers.plain]: plain, [styles.modifiers.noPlainOnGlass]: noPlainOnGlass }]"
    :style="{
      ...(height ? { [wizardHeightToken.name]: typeof height === 'number' ? `${height}px` : height } : {}),
      ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    }"
  >
    <define-nav-item v-slot="{ item }">
      <component
        :is="fragment(stepSlots(item.step)['nav-item']?.({ step: item.step, activeStep, steps, goToStepByIndex }))"
        v-if="stepSlots(item.step)['nav-item']"
      />
      <pf-wizard-nav-item
        v-else
        :id="String(item.step.id)"
        :content="item.step.name"
        :expandable="item.expandable"
        :current="item.current"
        :disabled="item.disabled"
        :visited="item.step.visited"
        :step-index="item.index"
        :status="item.step.status"
        v-bind="item.step.navItemAttrs"
        @click="goToStepByIndex(item.index)"
      >
        <template v-if="stepSlots(item.step).name" #content>
          <component :is="renderName(item.step)" />
        </template>
        <template v-if="item.subItems" #default>
          <pf-wizard-nav inner-list>
            <reuse-nav-item v-for="subItem in item.subItems" :key="subItem.step.id" :item="subItem" />
          </pf-wizard-nav>
        </template>
      </pf-wizard-nav-item>
    </define-nav-item>

    <slot name="header" />

    <button
      type="button"
      :class="[styles.wizardToggle, { [styles.modifiers.expanded]: navExpanded }]"
      :aria-label="toggleAriaLabel ?? messages.wizardToggle"
      :aria-expanded="navExpanded"
      @click="navExpanded = !navExpanded"
    >
      <span :class="styles.wizardToggleList">
        <span
          :class="[
            styles.wizardToggleListItem,
            {
              [styles.modifiers.danger]: activeStep?.status === 'error',
              [styles.modifiers.success]: activeStep?.status === 'success',
            },
          ]"
        >
          <span v-if="activeStep?.status === 'error'" :class="styles.wizardToggleStatusIcon">
            <circle-exclamation-icon />
          </span>
          <span v-else-if="activeStep?.status === 'success'" :class="styles.wizardToggleStatusIcon">
            <circle-check-icon />
          </span>
          <span v-else :class="styles.wizardToggleNum">{{ toggleIndex }}</span>
          {{ ' ' }}
          <component :is="renderName(activeParentStep ?? activeStep)" />
          <span v-if="activeParentStep" :class="styles.wizardToggleSeparator">
            <angle-right-icon />
          </span>
        </span>
        <span v-if="activeParentStep" :class="styles.wizardToggleListItem">
          <component :is="renderName(activeStep)" />
        </span>
      </span>
      <span :class="styles.wizardToggleIcon">
        <angle-down-icon />
      </span>
    </button>

    <div :class="styles.wizardOuterWrap">
      <div :class="styles.wizardInnerWrap">
        <slot
          name="nav"
          :expanded="navExpanded"
          :steps="steps"
          :active-step="activeStep"
          :go-to-step-by-index="goToStepByIndex"
        >
          <pf-wizard-nav
            :expanded="navExpanded"
            :aria-label="navAriaLabel || navAttrs?.['aria-label'] || messages.wizardSteps"
            :aria-labelledby="navAttrs?.['aria-labelledby']"
          >
            <reuse-nav-item v-for="item in navItems" :key="item.step.id" :item="item" />
          </pf-wizard-nav>
        </slot>

        <pf-wizard-body v-if="activeStep" :key="activeStep.id" v-bind="activeStep.bodyAttrs">
          <component :is="fragment(stepSlots(activeStep).default?.())" />
        </pf-wizard-body>
      </div>

      <component :is="fragment([footerRender()])" v-if="footerRender" />
      <pf-wizard-footer v-else v-bind="footerAttrsMerged" />
    </div>
  </div>
</template>

<script lang="ts">
type StepSlotName = 'default' | 'name' | 'footer' | 'nav-item';
type StepSlots = Partial<Record<StepSlotName, (props?: Record<string, unknown>) => VNodeArrayChildren>>;

type NavItem = {
  step: WizardStepType;
  /** Index of the step navigated to on click: the first visible sub-step of a parent */
  index: number;
  current: boolean;
  disabled: boolean;
  expandable?: boolean;
  subItems?: NavItem[];
};

interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Attributes of the default footer, such as its button texts or an `onNext` handler. Replaced by the footer slot. */
  footerAttrs?: WizardFooterAttrs;
  /** Attributes of the default navigation, such as its `aria-labelledby`. Replaced by the nav slot. */
  navAttrs?: { 'aria-label'?: string; 'aria-labelledby'?: string };
  /** Aria-label applied to the navigation */
  navAriaLabel?: string;
  /** Aria-label applied to the toggle expanding the navigation on small screens. Defaults to the `wizardToggle` message. */
  toggleAriaLabel?: string;
  /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
  startIndex?: number;
  /** Custom width of the wizard */
  width?: number | string;
  /** Custom height of the wizard */
  height?: number | string;
  /** Disables steps that haven't been visited */
  visitRequired?: boolean;
  /** Progressively shows steps, where all steps following the active step are hidden */
  progressive?: boolean;
  /** Called to save at the end of the wizard. When not set, the wizard is closed instead. */
  onSave?: (event: MouseEvent | null) => void | Promise<void>;
  /** Called to close the wizard */
  onClose?: (event: MouseEvent | null) => void;
  /** Disables focusing the wizard content after navigating with the next or back buttons */
  noFocusContent?: boolean;
  /** Adds plain styling to the wizard */
  plain?: boolean;
  /** Prevents the wizard from automatically applying plain styling when glass theme is enabled */
  noPlainOnGlass?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { usePfMessages } from '../../messages';
import { devError } from '../../helpers/dev';
import wizardHeightToken from '@patternfly/react-tokens/dist/esm/c_wizard_Height';
import {
  computed,
  onBeforeUpdate,
  provide,
  ref,
  shallowReactive,
  shallowRef,
  type HTMLAttributes,
  type VNode,
  type VNodeArrayChildren,
  type VNodeChild,
} from 'vue';
import { createReusableTemplate, useEventListener } from '@vueuse/core';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import PfWizardStep from './WizardStep.vue';
import PfWizardNav from './WizardNav.vue';
import PfWizardNavItem from './WizardNavItem.vue';
import PfWizardBody from './WizardBody.vue';
import PfWizardFooter from './WizardFooter.vue';
import {
  WizardContextKey,
  isStepEnabled,
  isWizardParentStep,
  isWizardSubStep,
  type WizardContext,
  type WizardFooterAttrs,
  type WizardFooterOverride,
  type WizardFooterSlotProps,
  type WizardParentStep,
  type WizardStepChangeScope,
  type WizardStepType,
} from './common';
import { findChildrenVNodes, fragment, toCamelCase } from '../../util';

defineOptions({
  name: 'PfWizard',
});

const props = withDefaults(defineProps<Props>(), {
  startIndex: 1,
});
const messages = usePfMessages();

const emit = defineEmits<{
  (
    name: 'step-change',
    event: MouseEvent | null,
    currentStep: WizardStepType,
    prevStep: WizardStepType | undefined,
    scope: WizardStepChangeScope,
  ): void;
}>();

const slots = defineSlots<{
  /** pf-wizard-step components */
  default?: (props?: Record<never, never>) => VNode[];
  /** Header of the wizard, such as a pf-wizard-header */
  header?: (props?: Record<never, never>) => VNode[];
  /** Replaces the default navigation */
  nav?: (props: {
    expanded: boolean;
    steps: WizardStepType[];
    activeStep: WizardStepType | undefined;
    goToStepByIndex: (index: number) => void;
  }) => VNode[];
  /** Replaces the default footer */
  footer?: (props: WizardFooterSlotProps) => VNode[];
}>();

const [DefineNavItem, ReuseNavItem] = createReusableTemplate<{ item: NavItem }>({ inheritAttrs: false });

const booleanStepProps = new Set(['disabled', 'hidden', 'expandable']);

function stepProps(vnode: VNode) {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(vnode.props ?? {})) {
    const name = toCamelCase(key);
    normalized[name] = value === '' && booleanStepProps.has(name) ? true : value;
  }
  return normalized as Omit<WizardParentStep, 'index' | 'visited' | 'subStepIds'>;
}

function vnodeSlots(vnode: VNode): StepSlots {
  return vnode.children && typeof vnode.children === 'object' && !Array.isArray(vnode.children)
    ? (vnode.children as StepSlots)
    : {};
}

// the slots of the steps are not reactive: they are read again whenever the wizard re-renders
const slotsVersion = ref(0);
onBeforeUpdate(() => slotsVersion.value++);

const builtSteps = computed(() => {
  void slotsVersion.value;
  const steps: WizardStepType[] = [];
  const slotsById = new Map<string | number, StepSlots>();

  for (const vnode of findChildrenVNodes(slots.default?.())) {
    if (vnode.type !== PfWizardStep) {
      devError('Wizard only accepts children of type WizardStep.');
      continue;
    }
    const { expandable, ...stepData } = stepProps(vnode);
    const stepSlots = vnodeSlots(vnode);
    const stepIndex = steps.length + 1;
    slotsById.set(stepData.id, stepSlots);

    const subSteps = findChildrenVNodes(stepSlots.default?.())
      .filter(child => child.type === PfWizardStep)
      .map((child, subStepIndex) => {
        const subStep = stepProps(child);
        slotsById.set(subStep.id, vnodeSlots(child));
        return { ...subStep, index: stepIndex + subStepIndex + 1, parentId: stepData.id };
      });

    steps.push(
      subSteps.length
        ? { ...stepData, index: stepIndex, expandable, subStepIds: subSteps.map(s => s.id) }
        : { ...stepData, index: stepIndex },
      ...subSteps,
    );
  }

  return { steps, slotsById };
});

// step properties set through setStep, such as `visited`, overridden by the props of the step
const stepOverrides = shallowReactive(new Map<string | number, Partial<WizardStepType>>());

// the first and the starting steps begin as visited
const steps = computed(() => {
  const built = builtSteps.value.steps;
  const firstIndex = isWizardParentStep(built[0]) ? 2 : 1;
  const startIndex = props.startIndex + (isWizardParentStep(built[props.startIndex - 1]) ? 1 : 0);
  return built.map(
    step =>
      ({
        ...(step.index === firstIndex || step.index === startIndex ? { visited: true } : {}),
        ...stepOverrides.get(step.id),
        ...step,
      }) as WizardStepType,
  );
});

function stepSlots(step: WizardStepType | undefined): StepSlots {
  return (step && builtSteps.value.slotsById.get(step.id)) || {};
}

function renderName(step: WizardStepType | undefined): VNode {
  const nameSlot = stepSlots(step).name;
  return fragment(nameSlot ? nameSlot() : [step?.name]);
}

const activeStepIndexState = ref<number>();
const activeStepIndex = computed(() => {
  let index = activeStepIndexState.value;
  // when the number of steps changes and pushes the active index out of bounds, reset back to startIndex
  if (index === undefined || index > steps.value.length) {
    index = props.startIndex;
    // when the startIndex maps to a parent step, focus on the first sub-step
    if (isWizardParentStep(steps.value[index - 1])) {
      index++;
    }
  }
  return index;
});

const activeStep = computed(() => steps.value.find(step => step.index === activeStepIndex.value));
const activeParentStep = computed(() => {
  const step = activeStep.value;
  return isWizardSubStep(step) ? steps.value.find(s => s.id === step.parentId) : undefined;
});

const toggleIndex = computed(() => {
  const step = activeParentStep.value ?? activeStep.value;
  return steps.value.filter(s => !isWizardSubStep(s)).findIndex(s => s.id === step?.id) + 1;
});

function setStep(step: Pick<WizardStepType, 'id'> & Partial<WizardStepType>) {
  stepOverrides.set(step.id, { ...stepOverrides.get(step.id), ...step });
}

// every step is marked as visited once it is active
function activate(step: WizardStepType) {
  activeStepIndexState.value = step.index;
  if (!isWizardParentStep(step) && !step.visited) {
    setStep({ id: step.id, visited: true });
  }
}

const mainWrapperRef = shallowRef<HTMLElement | null>(null);
const shouldFocusContent = computed(() => !props.noFocusContent);

function focusMainContentElement() {
  setTimeout(() => mainWrapperRef.value?.focus());
}

function goToNextStep(event: MouseEvent | null = null) {
  const currentSteps = steps.value;
  const prevStep = activeStep.value;
  const newStep = currentSteps.find(step => step.index > activeStepIndex.value && isStepEnabled(currentSteps, step));

  if (activeStepIndex.value >= currentSteps.length || !newStep) {
    return props.onSave ? props.onSave(event) : props.onClose?.(event);
  }

  activate(newStep);
  emit('step-change', event, newStep, prevStep, 'next');
  if (shouldFocusContent.value) {
    focusMainContentElement();
  }
}

function goToPrevStep(event: MouseEvent | null = null) {
  const currentSteps = steps.value;
  const prevStep = activeStep.value;
  const newStep = [...currentSteps]
    .reverse()
    .find(step => step.index < activeStepIndex.value && isStepEnabled(currentSteps, step));

  if (!newStep) {
    return;
  }

  activate(newStep);
  emit('step-change', event, newStep, prevStep, 'back');
  if (shouldFocusContent.value) {
    focusMainContentElement();
  }
}

function goToStepByIndex(index: number) {
  const currentSteps = steps.value;
  const clamped = Math.min(Math.max(index, 1), currentSteps.length);
  const currentStep = currentSteps[clamped - 1];
  const prevStep = activeStep.value;

  if (currentStep) {
    activate(currentStep);
    emit('step-change', null, currentStep, prevStep, 'nav');
  }
}

function goToStep(step: WizardStepType | undefined) {
  if (step && !step.disabled && !step.hidden) {
    activate(step);
  }
}

function close() {
  props.onClose?.(null);
}

const currentFooter = shallowRef<WizardFooterOverride | null>(null);

const footerSlotProps = computed(() => ({
  activeStep: activeStep.value!,
  goToNextStep: () => goToNextStep(),
  goToPrevStep: () => goToPrevStep(),
  close,
}));

// precedence: the active step's footer, then the one set through setFooter, then the wizard's one
const footerRender = computed((): (() => VNodeChild) | undefined => {
  const stepFooter = stepSlots(activeStep.value).footer;
  if (stepFooter) {
    return () => stepFooter(footerSlotProps.value);
  }
  if (activeStep.value?.footerAttrs) {
    return undefined;
  }
  const footer = currentFooter.value;
  if (typeof footer === 'function') {
    return () => footer(footerSlotProps.value);
  }
  if (!footer && slots.footer) {
    const wizardFooter = slots.footer;
    return () => wizardFooter(footerSlotProps.value);
  }
  return undefined;
});

const footerAttrsMerged = computed(() => {
  const step = activeStep.value;
  return {
    backDisabled: step?.index === 1 || (isWizardSubStep(step) && step.index === 2),
    onNext: goToNextStep,
    onBack: goToPrevStep,
    onClose: close,
    ...props.footerAttrs,
    ...(typeof currentFooter.value === 'object' ? currentFooter.value : {}),
    ...step?.footerAttrs,
  };
});

const navExpanded = ref(false);

useEventListener(
  () => (typeof document !== 'undefined' ? document.body : undefined),
  'keydown',
  (event: KeyboardEvent) => {
    if (navExpanded.value && event.key === 'Escape') {
      navExpanded.value = false;
    }
  },
);

const navItems = computed(() => {
  const currentSteps = steps.value;
  const active = activeStep.value;
  const shown = (step: WizardStepType) => !props.progressive || step.index <= (active?.index ?? 0);
  const stepDisabled = (step: WizardStepType) =>
    !!step.disabled ||
    (props.visitRequired && !step.visited && !currentSteps.some(s => s.index > step.index && s.visited));

  const items: NavItem[] = [];
  for (const step of currentSteps) {
    if (isWizardSubStep(step) || step.hidden || !shown(step)) {
      continue;
    }
    const disabled = stepDisabled(step);

    if (!isWizardParentStep(step)) {
      items.push({ step, index: step.index, current: active?.id === step.id, disabled });
      continue;
    }

    let firstSubStepIndex: number | undefined;
    const subItems: NavItem[] = [];
    for (const subStepId of step.subStepIds) {
      const subStep = currentSteps.find(s => s.id === subStepId);
      // don't render the sub-step navigation item if it is hidden
      if (!subStep || subStep.hidden) {
        continue;
      }
      // when the parent is clicked, the first visible sub-step is focused
      firstSubStepIndex ??= subStep.index;
      if (shown(subStep)) {
        subItems.push({
          step: subStep,
          index: subStep.index,
          current: active?.id === subStep.id,
          disabled: stepDisabled(subStep) || disabled,
        });
      }
    }

    items.push({
      step,
      index: firstSubStepIndex ?? step.index,
      current: active !== undefined && step.subStepIds.includes(active.id),
      disabled: !subItems.some(item => !item.disabled) || disabled,
      expandable: step.expandable,
      subItems,
    });
  }
  return items;
});

const context: WizardContext = {
  steps,
  activeStep,
  close,
  goToNextStep: () => goToNextStep(),
  goToPrevStep: () => goToPrevStep(),
  goToStepById: id => goToStep(steps.value.find(step => step.id === id)),
  goToStepByName: name => goToStep(steps.value.find(step => step.name === name)),
  goToStepByIndex,
  setFooter: footer => (currentFooter.value = footer),
  getStep: id => steps.value.find(step => step.id === id),
  setStep,
  shouldFocusContent,
  mainWrapperRef,
};

provide(WizardContextKey, context);

defineExpose(context);
</script>
