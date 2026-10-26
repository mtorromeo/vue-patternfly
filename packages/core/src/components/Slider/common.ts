/** A custom step of the slider, passed in the customSteps array */
export interface SliderStepObject {
  /** Flag to hide the label. */
  labelHidden?: boolean;
  /** The display label for the step value. This is also used for the aria-valuetext attribute. */
  label: string;
  /** Value of the step. This value is a percentage of the slider where the tick is drawn. */
  value: number;
}
