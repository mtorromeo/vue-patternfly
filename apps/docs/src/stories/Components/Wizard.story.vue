<template>
  <doc-page title="Wizard">
    <template #description>
      A <b>wizard</b> is used to guide a user through a complex, multi-step workflow. The wizard displays the steps in a
      navigation, the content of the current step and a footer with the actions to move between steps.
    </template>

    <template #apidocs>
      <component-info name="PfWizard" />
      <component-info name="PfWizardStep" />
      <component-info name="PfWizardBody" />
      <component-info name="PfWizardFooter" />
      <component-info name="PfWizardStepFooter" />
      <component-info name="PfWizardFooterWrapper" />
      <component-info name="PfWizardHeader" />
      <component-info name="PfWizardNav" />
      <component-info name="PfWizardNavItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - Sub-steps are `pf-wizard-step` components nested in their parent `pf-wizard-step`, instead of its `steps` prop. Any other content of a parent step is ignored, as parent steps are never active.
      - `footer` is the `footer-attrs` prop, with the props of `pf-wizard-footer` and its `onNext`, `onBack` and `onClose` handlers, or the `#footer` slot, which receives `activeStep`, `goToNextStep`, `goToPrevStep` and `close`. The same goes for `pf-wizard-step`: its `footer-attrs` are merged over the ones of the wizard instead of replacing them.
      - `nav` is the `nav-attrs` prop (`aria-label`, `aria-labelledby`) or the `#nav` slot, which receives `expanded`, `steps`, `activeStep` and `goToStepByIndex`.
      - The `navItem` of a step is its `nav-item-attrs` prop or its `#nav-item` slot, which receives `step`, `activeStep`, `steps` and `goToStepByIndex`; `body` is `body-attrs`.
      - The `name` of a step is a string; the `#name` slot of the step renders rich content in its navigation item and in the toggle.
      - `onSave` and `onClose` are the `@save` and `@close` listeners, `onStepChange` the `step-change` event. The scope of a step change is the string `'next'`, `'back'` or `'nav'`.
      - `shouldFocusContent` is inverted into `no-focus-content`; `isVisitRequired`, `isProgressive`, `isPlain` and `isNoPlainOnGlass` are `visit-required`, `progressive`, `plain` and `no-plain-on-glass`.
      - The step flags drop their prefix: `disabled`, `hidden`, `expandable`, and `visited` in the step objects.
      - `toggle-aria-label` sets the aria-label of the toggle expanding the navigation on small screens. `WizardToggle` is internal to `pf-wizard`.
      - `useWizardContext` returns refs (`steps`, `activeStep`, `shouldFocusContent`, `mainWrapperRef`) and the navigation helpers. React's `useWizardFooter` hook is the `pf-wizard-step-footer` component.
      - `pf-wizard-footer` emits `next`, `back` and `close` and takes no `activeStep`; its button props are `next-button-attrs`, `back-button-attrs` and `cancel-button-attrs`, and the flags are `next-disabled`, `back-disabled`, `back-hidden` and `cancel-hidden`.
      - `pf-wizard-header` emits `close`; `isCloseHidden` is `close-hidden`. The title and description can also be passed as slots.
      - `pf-wizard-nav-item` emits `click` with the event and the step index. Its `content` can be passed as a slot, and the default slot holds the nested `pf-wizard-nav` with `inner-list`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-wizard :height="400" title="Basic wizard">
        <pf-wizard-step name="Step 1" id="basic-first-step">
          <p>
            The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
            "region", and an aria-label or aria-labelledby to be applied.
          </p>
          <p>{{ lorem1 }}</p>
          <p>{{ lorem2 }}</p>
        </pf-wizard-step>
        <pf-wizard-step name="Step 2" id="basic-second-step">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="basic-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Plain">
      <pf-wizard :height="400" title="Plain wizard" plain>
        <pf-wizard-step name="Step 1" id="plain-first-step"><p>Step 1 content</p></pf-wizard-step>
        <pf-wizard-step name="Step 2" id="plain-second-step"><p>Step 2 content</p></pf-wizard-step>
        <pf-wizard-step name="Review" id="plain-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          <p>Review step content</p>
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Focus content on next/back">
      <template #intro>
        <pre v-md>
          The main content element of the `pf-wizard` is focused when navigating with the next and back buttons, so that users can navigate through the content of a `pf-wizard-step` in order. Pass the `no-focus-content` property to disable this behavior.
        </pre>
      </template>

      <pf-wizard title="Wizard that focuses content on next or back click">
        <pf-wizard-step name="Step 1" id="wizard-focus-first-step">Step 1 content</pf-wizard-step>
        <pf-wizard-step name="Step 2" id="wizard-focus-second-step">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="wizard-focus-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Basic with disabled steps">
      <pf-wizard :height="400" title="Basic disabled wizard">
        <pf-wizard-step name="Step 1" id="bdisabled-first-step">Step 1 content</pf-wizard-step>
        <pf-wizard-step name="Step 2" id="bdisabled-second-step" disabled>Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Step 3" id="bdisabled-third-step">Step 3 content</pf-wizard-step>
        <pf-wizard-step name="Step 4" id="bdisabled-fourth-step" disabled>Step 4 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="bdisabled-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Anchors for nav items">
      <pf-wizard :height="400" title="Anchor link wizard">
        <pf-wizard-step
          id="navanchors-pf3-step"
          :nav-item-attrs="{ component: 'a', href: 'https://www.patternfly.org/v3', target: '_blank' }"
        >
          <template #name><up-right-from-square-icon /> PF3</template>
          Step 1: Read about PF3
        </pf-wizard-step>
        <pf-wizard-step
          id="navanchors-pf4-step"
          :nav-item-attrs="{ component: 'a', href: 'https://www.patternfly.org/v4', target: '_blank' }"
        >
          <template #name><up-right-from-square-icon /> PF4</template>
          Step 2: Read about PF4
        </pf-wizard-step>
        <pf-wizard-step
          id="navanchors-slack-step"
          :nav-item-attrs="{ component: 'a', href: 'https://patternfly.slack.com', target: '_blank' }"
        >
          <template #name><hashtag-icon /> Join us on slack</template>
          <pf-button variant="link" component="a" target="_blank" href="https://patternfly.slack.com">
            Join the conversation
          </pf-button>
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Incrementally enabled steps">
      <pf-wizard :height="400" title="Incrementally enabled steps wizard" visit-required>
        <pf-wizard-step name="Step 1" id="req-visit-first-step">Step 1 content</pf-wizard-step>
        <pf-wizard-step name="Step 2" id="req-visit-second-step">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Step 3" id="req-visit-third-step">Step 3 content</pf-wizard-step>
        <pf-wizard-step name="Step 4" id="req-visit-fourth-step">Step 4 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="req-visit-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Expandable steps">
      <pf-wizard :height="400" title="Expandable steps wizard">
        <pf-wizard-step name="Step 1" id="expand-steps-1" expandable>
          <pf-wizard-step name="Substep A" id="expand-steps-sub-a">Substep A content</pf-wizard-step>
          <pf-wizard-step name="Substep B" id="expand-steps-sub-b">Substep B content</pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Step 2" id="expand-steps-2">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Step 3" id="expand-steps-3" expandable>
          <pf-wizard-step name="Substep C" id="expand-steps-sub-c">Substep C content</pf-wizard-step>
          <pf-wizard-step name="Substep D" id="expand-steps-sub-d">Substep D content</pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Step 4" id="expand-steps-4">Step 4 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="expand-steps-review" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Progress after submission" src="./Wizard-SubmitProgress.vue" />

    <story-canvas title="Enabled on form validation">
      <pf-wizard visit-required :height="400" title="Enabled on form validation wizard" @save="onSaveAge">
        <pf-wizard-step name="Information" id="form-valid-info">Information content</pf-wizard-step>
        <pf-wizard-step name="Configuration" id="form-valid-config">
          <pf-wizard-step
            name="Substep A with validation"
            id="form-valid-sub-a"
            :footer-attrs="{ nextDisabled: !ageValid }"
          >
            <pf-form>
              <pf-form-group label="Age:" field-id="form-valid-age">
                <pf-text-input
                  id="form-valid-age"
                  v-model="age"
                  :validated="ageValid ? 'default' : 'error'"
                  aria-describedby="form-valid-age-helper"
                />
                <pf-form-helper-text>
                  <pf-helper-text>
                    <pf-helper-text-item id="form-valid-age-helper" :variant="ageValid ? 'default' : 'error'">
                      {{ ageValid ? 'Write your age in numbers.' : 'Age has to be a number' }}
                    </pf-helper-text-item>
                  </pf-helper-text>
                </pf-form-helper-text>
              </pf-form-group>
            </pf-form>
          </pf-wizard-step>
          <pf-wizard-step name="Substep B" id="form-valid-sub-b">Substep B content</pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Additional" id="form-valid-additional">Additional step content</pf-wizard-step>
        <pf-wizard-step name="Review" id="form-valid-review" :footer-attrs="{ nextButtonText: 'Submit form' }" />
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Validate on button press" src="./Wizard-ValidateOnButtonPress.vue" />

    <story-canvas title="Progressive steps">
      <pf-wizard :height="400" title="Progressive steps wizard" progressive>
        <pf-wizard-step id="progressive-step-1" name="Get started">Get started content</pf-wizard-step>
        <pf-wizard-step id="progressive-step-2" name="Update options">Update options content</pf-wizard-step>
        <pf-wizard-step id="progressive-step-3" name="Quick options">
          <pf-wizard-step id="progressive-substep-1" name="Substep 1">Substep 1 content</pf-wizard-step>
          <pf-wizard-step id="progressive-substep-2" name="Substep 2">Substep 2 content</pf-wizard-step>
          <pf-wizard-step id="progressive-substep-3" name="Substep 3">Substep 3 content</pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step id="progressive-step-4" name="Review" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Get current step">
      <define-current-step>
        <pf-description-list horizontal compact :aria-label="`${currentStep?.name} prop data`">
          <pf-description-list-group>
            <pf-description-list-term>Index</pf-description-list-term>
            <pf-description-list-description>{{ currentStep?.index }}</pf-description-list-description>
          </pf-description-list-group>
          <pf-description-list-group>
            <pf-description-list-term>ID</pf-description-list-term>
            <pf-description-list-description>{{ currentStep?.id }}</pf-description-list-description>
          </pf-description-list-group>
          <pf-description-list-group>
            <pf-description-list-term>Name</pf-description-list-term>
            <pf-description-list-description>{{ currentStep?.name }}</pf-description-list-description>
          </pf-description-list-group>
          <pf-description-list-group>
            <pf-description-list-term>Visited</pf-description-list-term>
            <pf-description-list-description>{{
              currentStep?.visited ? 'true' : 'false'
            }}</pf-description-list-description>
          </pf-description-list-group>
        </pf-description-list>
      </define-current-step>

      <pf-wizard :height="400" title="Get current step wizard" @step-change="(_event, step) => (currentStep = step)">
        <pf-wizard-step name="Step 1" id="get-current-step-1">
          <reuse-current-step v-if="currentStep" />
          <template v-else>Step 1 content</template>
        </pf-wizard-step>
        <pf-wizard-step name="Step 2" id="get-current-step-2" disabled>
          <pf-wizard-step name="Substep 1" id="get-current-substep-1"><reuse-current-step /></pf-wizard-step>
          <pf-wizard-step name="Substep 2" id="get-current-substep-2"><reuse-current-step /></pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Step 3" id="get-current-step-3">
          <pf-wizard-step name="Substep 3" id="get-current-substep-3"><reuse-current-step /></pf-wizard-step>
          <pf-wizard-step name="Substep 4" id="get-current-substep-4"><reuse-current-step /></pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Step 4" id="get-current-step-4">
          <pf-wizard-step name="Substep 5" id="get-current-substep-5" hidden><reuse-current-step /></pf-wizard-step>
          <pf-wizard-step name="Substep 6" id="get-current-substep-6"><reuse-current-step /></pf-wizard-step>
        </pf-wizard-step>
        <pf-wizard-step name="Review" id="get-current-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          <reuse-current-step />
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Within modal">
      <pf-button @click="modalOpen = true">Show Modal</pf-button>

      <pf-modal v-model:open="modalOpen" aria-label="Wizard modal" variant="medium" no-body-wrapper no-close>
        <pf-wizard :height="400" title="In modal wizard" @close="modalOpen = false">
          <template #header>
            <pf-wizard-header
              title="Wizard in modal"
              description="Simple wizard description"
              close-button-aria-label="Close wizard"
              @close="modalOpen = false"
            />
          </template>
          <pf-wizard-step name="Step 1" id="in-modal-step-1">Step 1 content</pf-wizard-step>
          <pf-wizard-step name="Step 2" id="in-modal-step-2">Step 2 content</pf-wizard-step>
          <pf-wizard-step
            name="Review"
            id="in-modal-review-step"
            :footer-attrs="{ nextButtonText: 'Finish', onNext: () => (modalOpen = false) }"
          >
            Review step content
          </pf-wizard-step>
        </pf-wizard>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Step drawer content" src="./Wizard-StepDrawerContent.vue" />

    <story-canvas title="Custom navigation">
      <pf-wizard :height="400">
        <template #nav="{ expanded, steps, activeStep, goToStepByIndex }">
          <pf-wizard-nav :expanded="expanded">
            <pf-wizard-nav-item
              v-for="step in steps"
              :id="String(step.id)"
              :key="step.id"
              :content="step.name"
              :current="activeStep?.id === step.id"
              :disabled="step.disabled"
              :step-index="step.index"
              @click="goToStepByIndex(step.index)"
            />
          </pf-wizard-nav>
        </template>
        <pf-wizard-step name="Step 1" id="custom-nav-first-step">Did you say...custom nav?</pf-wizard-step>
        <pf-wizard-step name="Step 2" id="custom-nav-second-step">Oh, you didn't?</pf-wizard-step>
        <pf-wizard-step name="Review" id="custom-nav-review-step" :footer-attrs="{ nextButtonText: 'Wrap it up' }">
          Well, this is awkward.
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Header">
      <pf-wizard :height="400" title="Header wizard">
        <template #header>
          <pf-wizard-header
            title="You're a wizard, Harry"
            description="To be clear, all those not named Harry are not wizards."
            close-button-aria-label="Close header"
          />
        </template>
        <pf-wizard-step name="Step 1" id="header-first-step">Step 1 content</pf-wizard-step>
        <pf-wizard-step name="Step 2" id="header-second-step">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="header-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Custom footer" src="./Wizard-CustomFooter.vue" />

    <story-canvas title="Footer from the step content" src="./Wizard-StepFooter.vue">
      <template #intro>
        <pre v-md>
          `pf-wizard-step-footer` replaces the footer of the wizard while it is mounted, so a component rendered in a step can control the footer with its own state. It renders nothing where it is placed: its props are applied to the default footer, as the `footer-attrs` of a step, while its default slot replaces the content of the footer and receives `activeStep`, `goToNextStep`, `goToPrevStep` and `close`. The slot is wrapped in a `pf-wizard-footer-wrapper`, unless `unwrapped` is set to render it as the whole footer.

          A step's `footer` slot and `footer-attrs` take precedence over it.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="Custom navigation item">
      <pf-wizard :height="400" title="Custom navigation item wizard">
        <pf-wizard-step name="Step 1" id="custom-nav-item-first-step">Step 1 content</pf-wizard-step>
        <pf-wizard-step id="custom-nav-item-second-step" name="Step 2">
          <template #nav-item="{ step, activeStep, goToStepByIndex }">
            <pf-wizard-nav-item
              :id="String(step.id)"
              :current="activeStep?.id === step.id"
              :step-index="step.index"
              @click="goToStepByIndex(step.index)"
            >
              <template #content><span>Custom item</span></template>
            </pf-wizard-nav-item>
          </template>
          Step 2 content with a custom navigation item
        </pf-wizard-step>
        <pf-wizard-step name="Review" id="custom-nav-item-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Toggle step visibility">
      <pf-wizard :height="400" title="Toggle step visibility wizard">
        <pf-wizard-step name="Hidden action step" id="toggle-visible-step-1">
          <pf-checkbox
            id="toggle-hide-step-checkbox"
            v-model="hideStep"
            label="Toggle visibility of the next step"
            name="Toggle Hide Step Checkbox"
          />
        </pf-wizard-step>
        <pf-wizard-step name="Step 2" id="toggle-visible-step-2" :hidden="hideStep">Step 2 content</pf-wizard-step>
        <pf-wizard-step name="Review" id="toggle-visible-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <story-canvas title="Step status">
      <pf-wizard :height="400" title="Step status wizard">
        <pf-wizard-step :status="stepStatus as WizardStepStatus" id="status-step-1" name="Step 1"
          >Step 1 content</pf-wizard-step
        >
        <pf-wizard-step name="Status step" id="error-status-step-2">
          <pf-radio
            id="toggle-error-checkbox"
            v-model="stepStatus"
            value="error"
            label="Give step 1 an error status"
            name="Toggle Status"
          />
          <pf-radio
            id="toggle-success-checkbox"
            v-model="stepStatus"
            value="success"
            label="Give step 1 a success status"
            name="Toggle Status"
          />
          <pf-radio
            id="toggle-warning-checkbox"
            v-model="stepStatus"
            value="warning"
            label="Give step 1 a warning status"
            name="Toggle Status"
          />
        </pf-wizard-step>
        <pf-wizard-step name="Review" id="status-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
          Review step content
        </pf-wizard-step>
      </pf-wizard>
    </story-canvas>

    <pre v-md>
      ## Composables

      ### useWizardContext
      Gives access to the state and navigation helpers of the closest `pf-wizard`, from a component rendered in a step or in a custom footer or navigation:

      ```ts
      import { useWizardContext } from '@vue-patternfly/core';

      const { activeStep, goToNextStep } = useWizardContext();
      ```

    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import UpRightFromSquareIcon from '@vue-patternfly/icons/up-right-from-square-icon';
import HashtagIcon from '@vue-patternfly/icons/hashtag-icon';
import type { WizardStepStatus, WizardStepType } from '@vue-patternfly/core';

const [DefineCurrentStep, ReuseCurrentStep] = createReusableTemplate();

const lorem1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a auctor.';
const lorem2 =
  'Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem, commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.';

const age = ref('Thirty');
const ageValid = computed(() => /^\d+$/.test(age.value));
const onSaveAge = () => alert(`Wow, you look a lot younger than ${age.value}.`);

const currentStep = ref<WizardStepType>();
const modalOpen = ref(false);
const hideStep = ref(false);
const stepStatus = ref('default');
</script>
