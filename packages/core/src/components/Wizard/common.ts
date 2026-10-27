import { inject, type ComputedRef, type HTMLAttributes, type InjectionKey, type Ref, type VNodeChild } from 'vue';

export type WizardStepStatus = 'default' | 'error' | 'success' | 'warning';

/** Attributes of the default footer: the props of pf-wizard-footer and its next/back/close listeners */
export interface WizardFooterAttrs {
  /** Custom text for the Next button */
  nextButtonText?: string;
  /** Custom text for the Back button */
  backButtonText?: string;
  /** Custom text for the Cancel link */
  cancelButtonText?: string;
  /** Flag to disable the next button */
  nextDisabled?: boolean;
  /** Flag to disable the back button */
  backDisabled?: boolean;
  /** Flag to hide the back button */
  backHidden?: boolean;
  /** Flag to hide the cancel button */
  cancelHidden?: boolean;
  /** Additional attributes for the Next button */
  nextButtonAttrs?: Record<string, unknown>;
  /** Additional attributes for the Back button */
  backButtonAttrs?: Record<string, unknown>;
  /** Additional attributes for the Cancel button */
  cancelButtonAttrs?: Record<string, unknown>;
  /** Replaces the wizard's next handler */
  onNext?: (event: MouseEvent) => void;
  /** Replaces the wizard's back handler */
  onBack?: (event: MouseEvent) => void;
  /** Replaces the wizard's close handler */
  onClose?: (event: MouseEvent) => void;
}

/** Attributes of the default navigation item of a step */
export interface WizardNavItemAttrs extends HTMLAttributes {
  /** The content to display in the navigation item */
  content?: string;
  /** Component used to render the navigation item */
  component?: 'button' | 'a';
  /** An optional url to use for when using an anchor component */
  href?: string;
  /** Where to display the linked URL when using an anchor component */
  target?: string;
  /** Used to determine the icon displayed next to content */
  status?: WizardStepStatus;
}

/** Attributes of the body wrapping the content of a step */
export interface WizardBodyAttrs extends HTMLAttributes {
  /** Flag to remove the default body padding */
  noPadding?: boolean;
  /** Component used as the wrapping content container */
  component?: string;
}

/** Steps that are neither parents nor children of parents. */
export interface WizardBasicStep {
  /** Name of the step's navigation item */
  name?: string;
  /** Unique identifier */
  id: string | number;
  /** Order index of step (starts at 1) */
  index: number;
  /** Flag to disable the step's navigation item */
  disabled?: boolean;
  /** Flag to represent whether the step has been visited (navigated to) */
  visited?: boolean;
  /** Flag to determine whether the step is hidden */
  hidden?: boolean;
  /** Properties of the step's navigation item */
  navItemAttrs?: WizardNavItemAttrs;
  /** Properties of the step's footer, merged over the wizard's ones */
  footerAttrs?: WizardFooterAttrs;
  /** Properties of the body wrapping the step content */
  bodyAttrs?: WizardBodyAttrs;
  /** Used to determine icon next to the step's navigation item */
  status?: WizardStepStatus;
}

/** Steps containing sub-steps. */
export interface WizardParentStep extends WizardBasicStep {
  /** Nested step IDs */
  subStepIds: (string | number)[];
  /** Flag to determine whether the step can expand or not. */
  expandable?: boolean;
}

/** Steps nested in a parent step. */
export interface WizardSubStep extends WizardBasicStep {
  /** Unique identifier of the parent step */
  parentId: string | number;
}

export type WizardStepType = WizardBasicStep | WizardParentStep | WizardSubStep;

export type WizardStepChangeScope = 'next' | 'back' | 'nav';

/** Props of the slots replacing the footer */
export interface WizardFooterSlotProps {
  /** Current step */
  activeStep: WizardStepType;
  /** Navigate to the next step */
  goToNextStep: () => void | Promise<void>;
  /** Navigate to the previous step */
  goToPrevStep: () => void | Promise<void>;
  /** Close the wizard */
  close: () => void;
}

/** A footer set through setFooter or pf-wizard-step-footer: attributes of the default footer, or a render function */
export type WizardFooterOverride = WizardFooterAttrs | ((props: WizardFooterSlotProps) => VNodeChild);

export function isWizardParentStep(step: WizardStepType | undefined): step is WizardParentStep {
  return (step as WizardParentStep | undefined)?.subStepIds !== undefined;
}

export function isWizardSubStep(step: WizardStepType | undefined): step is WizardSubStep {
  return (step as WizardSubStep | undefined)?.parentId !== undefined;
}

export function isWizardBasicStep(step: WizardStepType | undefined): step is WizardBasicStep {
  return !isWizardParentStep(step) && !isWizardSubStep(step);
}

/** Determines whether a step is navigable based on its and its parent's disabled/hidden properties */
export function isStepEnabled(steps: WizardStepType[], step: WizardStepType): boolean {
  // parent steps are merely containers of sub-steps
  if (isWizardParentStep(step) || step.hidden || step.disabled) {
    return false;
  }
  if (isWizardSubStep(step)) {
    const parentStep = steps.find(s => s.id === step.parentId);
    return !parentStep?.hidden && !parentStep?.disabled;
  }
  return true;
}

export interface WizardContext {
  /** List of steps */
  steps: ComputedRef<WizardStepType[]>;
  /** Current step */
  activeStep: ComputedRef<WizardStepType | undefined>;
  /** Close the wizard */
  close: () => void;
  /** Navigate to the next step */
  goToNextStep: () => void | Promise<void>;
  /** Navigate to the previous step */
  goToPrevStep: () => void | Promise<void>;
  /** Navigate to step by ID */
  goToStepById: (id: number | string) => void;
  /** Navigate to step by name */
  goToStepByName: (name: string) => void;
  /** Navigate to step by index */
  goToStepByIndex: (index: number) => void;
  /** Replaces the footer with a render function or the attributes of the default footer, null restores it */
  setFooter: (footer: WizardFooterOverride | null) => void;
  /** Get step by ID */
  getStep: (stepId: number | string) => WizardStepType | undefined;
  /** Updates the properties of a step not set through its props, such as `visited` */
  setStep: (step: Pick<WizardStepType, 'id'> & Partial<WizardStepType>) => void;
  /** Whether the wizard content is focused after navigating with the next or back buttons */
  shouldFocusContent: ComputedRef<boolean>;
  /** The main wizard content element */
  mainWrapperRef: Ref<HTMLElement | null>;
}

export const WizardContextKey = Symbol('WizardContext') as InjectionKey<WizardContext>;

/** Gives access to the state and navigation helpers of the closest wizard. */
export function useWizardContext(): WizardContext {
  const context = inject(WizardContextKey, null);
  if (!context) {
    throw new Error('useWizardContext must be used within a pf-wizard');
  }
  return context;
}
