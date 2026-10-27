import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import PfWizard from '../../src/components/Wizard/Wizard.vue';
import PfWizardStep from '../../src/components/Wizard/WizardStep.vue';
import PfWizardBody from '../../src/components/Wizard/WizardBody.vue';
import PfWizardFooter from '../../src/components/Wizard/WizardFooter.vue';
import PfWizardFooterWrapper from '../../src/components/Wizard/WizardFooterWrapper.vue';
import PfWizardHeader from '../../src/components/Wizard/WizardHeader.vue';
import PfWizardNav from '../../src/components/Wizard/WizardNav.vue';
import PfWizardNavItem from '../../src/components/Wizard/WizardNavItem.vue';
import PfWizardStepFooter from '../../src/components/Wizard/WizardStepFooter.vue';
import { useWizardContext } from '../../src/components/Wizard/common';

enableAutoUnmount(afterEach);

const components = {
  PfWizard,
  PfWizardStep,
  PfWizardHeader,
  PfWizardNav,
  PfWizardNavItem,
  PfWizardFooter,
  PfWizardStepFooter,
};

function mountWizard(template: string, setup: () => Record<string, unknown> = () => ({}), extra = {}) {
  return mount(defineComponent({ components: { ...components, ...extra }, setup, template }), {
    attachTo: document.body,
  });
}

function button(wrapper: VueWrapper, name: string) {
  const found = wrapper.findAll('button, a').find(b => b.text().trim() === name || b.attributes('aria-label') === name);
  if (!found) {
    throw new Error(`No button named ${name}`);
  }
  return found;
}

function navButtonNames(wrapper: VueWrapper) {
  return wrapper.findAll(`.${styles.wizardNavLink}`).map(b => b.text().trim());
}

describe('Wizard', () => {
  it('renders the steps in the navigation and the content of the active step', () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1">Step 1 content</pf-wizard-step>
        <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.find('nav').attributes('aria-label')).toBe('Wizard steps');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1', 'Test step 2']);
    // the reusable template of the nav items doesn't leak its props as attributes
    expect(wrapper.find(`.${styles.wizardNavItem}`).attributes()).toEqual({ class: styles.wizardNavItem });
    expect(button(wrapper, 'Test step 1').classes()).toContain(styles.modifiers.current);
    expect(button(wrapper, 'Test step 1').attributes('aria-current')).toBe('step');
    expect(wrapper.find(`.${styles.wizardMainBody}`).text()).toBe('Step 1 content');
    expect(wrapper.text()).not.toContain('Step 2 content');
  });

  it('renders the header slot', () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <template #header>Some header</template>
        <pf-wizard-step id="step" name="Test step" />
      </pf-wizard>`);
    expect(wrapper.text()).toContain('Some header');
  });

  it('renders the default footer, with custom attributes', () => {
    const wrapper = mountWizard(`
      <pf-wizard :footer-attrs="{
        nextButtonText: 'Proceed with caution',
        backButtonText: 'Turn back!',
        cancelButtonText: 'Leave now!',
        nextButtonAttrs: { id: 'next-button', class: 'custom-class' },
        backButtonAttrs: { id: 'back-button' },
        cancelButtonAttrs: { id: 'cancel-button' },
      }">
        <pf-wizard-step id="step" name="Test step" />
      </pf-wizard>`);
    const next = button(wrapper, 'Proceed with caution');
    expect(next.attributes('id')).toBe('next-button');
    expect(next.attributes('type')).toBe('submit');
    expect(next.classes()).toContain('custom-class');
    expect(button(wrapper, 'Turn back!').attributes('id')).toBe('back-button');
    expect(button(wrapper, 'Leave now!').attributes('id')).toBe('cancel-button');
    expect(wrapper.find(`footer.${styles.wizardFooter}`).exists()).toBe(true);
  });

  it('renders Next, Back and Cancel by default, with Back disabled on the first step', () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2" />
      </pf-wizard>`);
    expect(button(wrapper, 'Next').exists()).toBe(true);
    expect(button(wrapper, 'Back').attributes('disabled')).toBeDefined();
    expect(button(wrapper, 'Cancel').exists()).toBe(true);
  });

  it('renders a custom footer slot with the navigation helpers', async () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1">Step 1 content</pf-wizard-step>
        <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
        <template #footer="{ activeStep, goToNextStep }">
          <button class="custom-next" @click="goToNextStep">Custom next from {{ activeStep.name }}</button>
        </template>
      </pf-wizard>`);
    expect(wrapper.find('.custom-next').text()).toBe('Custom next from Test step 1');
    expect(wrapper.find(`.${styles.wizardFooter}`).exists()).toBe(false);
    await wrapper.find('.custom-next').trigger('click');
    expect(wrapper.text()).toContain('Step 2 content');
  });

  it('merges the footer attributes of the active step over the wizard ones', async () => {
    const wrapper = mountWizard(`
      <pf-wizard :footer-attrs="{ cancelButtonText: 'Leave' }">
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2" :footer-attrs="{ nextButtonText: 'Finish' }" />
      </pf-wizard>`);
    await button(wrapper, 'Test step 2').trigger('click');
    expect(button(wrapper, 'Finish').exists()).toBe(true);
    expect(button(wrapper, 'Leave').exists()).toBe(true);
  });

  it('replaces the footer with the footer slot of the active step', async () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2">
          <template #footer="{ goToPrevStep }"><button class="step-back" @click="goToPrevStep">Step back</button></template>
        </pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.find('.step-back').exists()).toBe(false);
    await button(wrapper, 'Test step 2').trigger('click');
    expect(wrapper.find(`.${styles.wizardFooter}`).exists()).toBe(false);
    await wrapper.find('.step-back').trigger('click');
    expect(button(wrapper, 'Test step 1').classes()).toContain(styles.modifiers.current);
  });

  it('calls the onNext of the step footer attributes instead of navigating', async () => {
    const onNext = vi.fn();
    const wrapper = mountWizard(
      `<pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" :footer-attrs="{ onNext }" />
        <pf-wizard-step id="step-2" name="Test step 2" />
      </pf-wizard>`,
      () => ({ onNext }),
    );
    await button(wrapper, 'Next').trigger('click');
    expect(onNext).toHaveBeenCalledOnce();
    expect(button(wrapper, 'Test step 1').classes()).toContain(styles.modifiers.current);
  });

  it('renders the navigation with custom attributes and visitRequired', () => {
    const wrapper = mountWizard(`
      <pf-wizard id="wizard-id" :nav-attrs="{ 'aria-label': 'Some nav label', 'aria-labelledby': 'wizard-id' }" visit-required>
        <pf-wizard-step id="step-1" name="Test step 1">
          <pf-wizard-step id="nested-step" name="Nested step" />
        </pf-wizard-step>
        <pf-wizard-step id="step-2" name="Test step 2" />
      </pf-wizard>`);
    const nav = wrapper.find('nav');
    expect(nav.attributes('aria-label')).toBe('Some nav label');
    expect(nav.attributes('aria-labelledby')).toBe('wizard-id');
    expect(button(wrapper, 'Test step 2').attributes('disabled')).toBeDefined();
    expect(button(wrapper, 'Nested step').attributes('disabled')).toBeUndefined();
  });

  it('renders the navAriaLabel', () => {
    const wrapper = mountWizard(`
      <pf-wizard nav-aria-label="custom nav aria-label">
        <pf-wizard-step id="step" name="Test step" />
      </pf-wizard>`);
    expect(wrapper.find('nav').attributes('aria-label')).toBe('custom nav aria-label');
  });

  it('renders a custom nav slot', async () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <template #nav="{ expanded, steps, activeStep, goToStepByIndex }">
          <pf-wizard-nav :expanded="expanded" class="custom-nav">
            <pf-wizard-nav-item
              v-for="step in steps"
              :key="step.id"
              :content="'Custom ' + step.name"
              :current="activeStep.id === step.id"
              :step-index="step.index"
              @click="goToStepByIndex(step.index)"
            />
          </pf-wizard-nav>
        </template>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.find('.custom-nav').exists()).toBe(true);
    await button(wrapper, 'Custom Test step 2').trigger('click');
    expect(wrapper.text()).toContain('Step 2 content');
  });

  it('can start at a step that is not the first with startIndex', () => {
    const wrapper = mountWizard(`
      <pf-wizard :start-index="2">
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.text()).toContain('Step 2 content');
    expect(button(wrapper, 'Test step 2').classes()).toContain(styles.modifiers.current);
  });

  it('starts on the first sub-step when the startIndex maps to a parent step', () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1">
          <pf-wizard-step id="sub-1" name="Sub step 1">Sub step 1 content</pf-wizard-step>
        </pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.find(`.${styles.wizardMainBody}`).text()).toBe('Sub step 1 content');
    expect(button(wrapper, 'Sub step 1').attributes('aria-current')).toBe('step');
    // the parent is current, but not the current step
    expect(button(wrapper, 'Test step 1').classes()).toContain(styles.modifiers.current);
    expect(button(wrapper, 'Test step 1').attributes('aria-current')).toBe('false');
  });

  it('applies classes, attributes, height and width to the root', () => {
    const wrapper = mountWizard(`
      <pf-wizard class="some-class" data-testid="wizard-id" :height="500" :width="500">
        <pf-wizard-step id="step" name="Test step" />
      </pf-wizard>`);
    const root = wrapper.find(`.${styles.wizard}`);
    expect(root.classes()).toContain('some-class');
    expect(root.attributes('data-testid')).toBe('wizard-id');
    expect((root.element as HTMLElement).style.width).toBe('500px');
    expect((root.element as HTMLElement).style.getPropertyValue('--pf-v6-c-wizard--Height')).toBe('500px');
  });

  it('applies the plain and noPlainOnGlass modifiers', () => {
    const wrapper = mountWizard(`
      <pf-wizard plain no-plain-on-glass>
        <pf-wizard-step id="step" name="Test step" />
      </pf-wizard>`);
    const root = wrapper.find(`.${styles.wizard}`);
    expect(root.classes()).toContain(styles.modifiers.plain);
    expect(root.classes()).toContain(styles.modifiers.noPlainOnGlass);
  });

  describe('navigation', () => {
    function mountWithHandlers(steps = '', props = '') {
      const onStepChange = vi.fn();
      const onSave = vi.fn();
      const onClose = vi.fn();
      const wrapper = mountWizard(
        `<pf-wizard ${props} @step-change="onStepChange" @close="onClose" ${props.includes('no-save') ? '' : '@save="onSave"'}>
          ${
            steps ||
            `<pf-wizard-step id="step-1" name="Test step 1">Step 1 content</pf-wizard-step>
             <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>`
          }
        </pf-wizard>`,
        () => ({ onStepChange, onSave, onClose }),
      );
      return { wrapper, onStepChange, onSave, onClose };
    }

    it('emits step-change on nav item click', async () => {
      const { wrapper, onStepChange } = mountWithHandlers();
      await button(wrapper, 'Test step 2').trigger('click');
      expect(onStepChange).toHaveBeenCalledWith(
        null,
        expect.objectContaining({ id: 'step-2' }),
        expect.objectContaining({ id: 'step-1' }),
        'nav',
      );
      expect(wrapper.text()).toContain('Step 2 content');
      expect(wrapper.text()).not.toContain('Step 1 content');
    });

    it('emits step-change and not save on next when not on the last step', async () => {
      const { wrapper, onStepChange, onSave } = mountWithHandlers();
      await button(wrapper, 'Next').trigger('click');
      expect(onStepChange).toHaveBeenCalledWith(
        expect.any(Event),
        expect.objectContaining({ id: 'step-2' }),
        expect.objectContaining({ id: 'step-1' }),
        'next',
      );
      expect(onSave).not.toHaveBeenCalled();
    });

    it('emits step-change on back', async () => {
      const { wrapper, onStepChange } = mountWithHandlers();
      await button(wrapper, 'Test step 2').trigger('click');
      await button(wrapper, 'Back').trigger('click');
      expect(onStepChange).toHaveBeenLastCalledWith(
        expect.any(Event),
        expect.objectContaining({ id: 'step-1' }),
        expect.objectContaining({ id: 'step-2' }),
        'back',
      );
    });

    it('calls save and not close on next from the last step', async () => {
      const { wrapper, onSave, onClose } = mountWithHandlers();
      await button(wrapper, 'Test step 2').trigger('click');
      await button(wrapper, 'Next').trigger('click');
      expect(onSave).toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();
    });

    it('calls close on next from the last step without a save listener', async () => {
      const { wrapper, onClose } = mountWithHandlers('', 'data-no-save');
      await button(wrapper, 'Test step 2').trigger('click');
      await button(wrapper, 'Next').trigger('click');
      expect(onClose).toHaveBeenCalled();
    });

    it('calls close on cancel', async () => {
      const { wrapper, onClose } = mountWithHandlers();
      await button(wrapper, 'Cancel').trigger('click');
      expect(onClose).toHaveBeenCalled();
    });

    it('skips over disabled or hidden steps and sub-steps', async () => {
      const { wrapper, onStepChange } = mountWithHandlers(`
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2"><pf-wizard-step id="step2-sub1" name="Substep 2.1" /></pf-wizard-step>
        <pf-wizard-step id="step-3" name="Test step 3" disabled />
        <pf-wizard-step id="step-4" name="Test step 4" disabled><pf-wizard-step id="step4-sub1" name="Substep 4.1" /></pf-wizard-step>
        <pf-wizard-step id="step-5" name="Test step 5">
          <pf-wizard-step id="step5-sub1" name="Substep 5.1" disabled />
          <pf-wizard-step id="step5-sub2" name="Substep 5.2" />
        </pf-wizard-step>
        <pf-wizard-step id="step-6" name="Test step 6" hidden />
        <pf-wizard-step id="step-7" name="Test step 7" hidden><pf-wizard-step id="step7-sub1" name="Substep 7.1" /></pf-wizard-step>
        <pf-wizard-step id="step-8" name="Test step 8">
          <pf-wizard-step id="step8-sub1" name="Substep 8.1" hidden />
          <pf-wizard-step id="step8-sub2" name="Substep 8.2" />
        </pf-wizard-step>`);
      const expectChange = (current: string, prev: string, scope: string) =>
        expect(onStepChange).toHaveBeenLastCalledWith(
          expect.any(Event),
          expect.objectContaining({ id: current }),
          expect.objectContaining({ id: prev }),
          scope,
        );

      await button(wrapper, 'Next').trigger('click');
      expectChange('step2-sub1', 'step-1', 'next');
      await button(wrapper, 'Next').trigger('click');
      expectChange('step5-sub2', 'step2-sub1', 'next');
      await button(wrapper, 'Next').trigger('click');
      expectChange('step8-sub2', 'step5-sub2', 'next');
      await button(wrapper, 'Back').trigger('click');
      expectChange('step5-sub2', 'step8-sub2', 'back');
      await button(wrapper, 'Back').trigger('click');
      expectChange('step2-sub1', 'step5-sub2', 'back');
      await button(wrapper, 'Back').trigger('click');
      expectChange('step-1', 'step2-sub1', 'back');
    });

    it('navigates to the first visible sub-step when clicking a parent step', async () => {
      const { wrapper, onStepChange } = mountWithHandlers(`
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2">
          <pf-wizard-step id="step2-sub1" name="Hidden sub step" hidden />
          <pf-wizard-step id="step2-sub2" name="Visible sub step 1" />
          <pf-wizard-step id="step2-sub3" name="Visible sub step 2" />
        </pf-wizard-step>
        <pf-wizard-step id="step-3" name="Test step 3" />`);
      await button(wrapper, 'Test step 3').trigger('click');
      await button(wrapper, 'Test step 2').trigger('click');
      expect(onStepChange).toHaveBeenLastCalledWith(
        null,
        expect.objectContaining({ id: 'step2-sub2' }),
        expect.objectContaining({ id: 'step-3' }),
        'nav',
      );
    });

    it('focuses the content after next and back, unless noFocusContent is set', async () => {
      vi.useFakeTimers();
      const { wrapper } = mountWithHandlers();
      const body = wrapper.find(`.${styles.wizardMain}`);
      expect(body.attributes('tabindex')).toBe('-1');
      await button(wrapper, 'Next').trigger('click');
      vi.runAllTimers();
      expect(document.activeElement).toBe(wrapper.find(`.${styles.wizardMain}`).element);

      const other = mountWithHandlers('', 'no-focus-content');
      expect(other.wrapper.find(`.${styles.wizardMain}`).attributes('tabindex')).toBeUndefined();
      (document.activeElement as HTMLElement | null)?.blur();
      await button(other.wrapper, 'Next').trigger('click');
      vi.runAllTimers();
      expect(document.activeElement).toBe(document.body);
      vi.useRealTimers();
    });
  });

  it('collapses expandable parent steps unless they are active', async () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2" expandable>
          <pf-wizard-step id="sub-step-1" name="Test sub step 1" />
        </pf-wizard-step>
      </pf-wizard>`);
    const parentItem = () => wrapper.findAll(`.${styles.wizardNavItem}`)[1]!;
    expect(wrapper.find('[aria-label="Expand step icon"]').exists()).toBe(true);
    expect(parentItem().classes()).toContain(styles.modifiers.expandable);
    expect(parentItem().classes()).not.toContain(styles.modifiers.expanded);
    expect(button(wrapper, 'Test step 2').attributes('aria-expanded')).toBe('false');

    await button(wrapper, 'Next').trigger('click');
    expect(wrapper.find('[aria-label="Collapse step icon"]').exists()).toBe(true);
    expect(parentItem().classes()).toContain(styles.modifiers.expanded);
    expect(button(wrapper, 'Test step 2').attributes('aria-expanded')).toBe('true');
  });

  it('toggles an expandable parent step without navigating', async () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1">Step 1 content</pf-wizard-step>
        <pf-wizard-step id="step-2" name="Test step 2" expandable>
          <pf-wizard-step id="sub-step-1" name="Test sub step 1" />
        </pf-wizard-step>
      </pf-wizard>`);
    await button(wrapper, 'Test step 2').trigger('click');
    expect(button(wrapper, 'Test step 2').attributes('aria-expanded')).toBe('true');
    expect(wrapper.text()).toContain('Step 1 content');
    await button(wrapper, 'Test step 2').trigger('click');
    expect(button(wrapper, 'Test step 2').attributes('aria-expanded')).toBe('false');
  });

  it('progressively shows the steps up to the active one', async () => {
    const wrapper = mountWizard(`
      <pf-wizard progressive>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2" />
        <pf-wizard-step id="step-3" name="Test step 3" />
      </pf-wizard>`);
    expect(navButtonNames(wrapper)).toEqual(['Test step 1']);
    await button(wrapper, 'Next').trigger('click');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1', 'Test step 2']);
    await button(wrapper, 'Next').trigger('click');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1', 'Test step 2', 'Test step 3']);
    await button(wrapper, 'Back').trigger('click');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1', 'Test step 2']);
    await button(wrapper, 'Back').trigger('click');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1']);
  });

  it('disables the sub-steps of a disabled parent and hides those of a hidden one', () => {
    const disabled = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" disabled>
          <pf-wizard-step id="sub-step-1" name="Sub step 1" />
        </pf-wizard-step>
      </pf-wizard>`);
    expect(button(disabled, 'Test step 1').attributes('disabled')).toBeDefined();
    expect(button(disabled, 'Sub step 1').attributes('disabled')).toBeDefined();
    expect(button(disabled, 'Sub step 1').classes()).toContain(styles.modifiers.disabled);
    expect(button(disabled, 'Sub step 1').attributes('aria-disabled')).toBe('true');

    const hidden = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" hidden>
          <pf-wizard-step id="sub-step-1" name="Sub step 1" />
        </pf-wizard-step>
      </pf-wizard>`);
    expect(navButtonNames(hidden)).toEqual([]);
  });

  it('enables the steps incrementally as they are visited with visitRequired', async () => {
    const wrapper = mountWizard(`
      <pf-wizard visit-required>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <pf-wizard-step id="step-2" name="Test step 2" />
        <pf-wizard-step id="step-3" name="Test step 3" />
      </pf-wizard>`);
    const disabledSteps = () =>
      wrapper.findAll(`.${styles.wizardNavLink}`).map(b => b.attributes('disabled') !== undefined);
    expect(disabledSteps()).toEqual([false, true, true]);
    await button(wrapper, 'Next').trigger('click');
    expect(disabledSteps()).toEqual([false, false, true]);
    await button(wrapper, 'Back').trigger('click');
    expect(disabledSteps()).toEqual([false, false, true]);
  });

  it('updates the steps when their props change', async () => {
    const wrapper = mountWizard(
      `<pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" :status="status">
          <input type="checkbox" class="toggle" v-model="hideNext" />
        </pf-wizard-step>
        <pf-wizard-step id="step-2" name="Test step 2" :hidden="hideNext" />
        <pf-wizard-step v-if="extra" id="step-3" name="Extra step" />
      </pf-wizard>`,
      () => ({ hideNext: ref(false), status: ref('default'), extra: ref(false) }),
    );
    expect(navButtonNames(wrapper)).toEqual(['Test step 1', 'Test step 2']);
    await wrapper.find('.toggle').setValue(true);
    expect(navButtonNames(wrapper)).toEqual(['Test step 1']);

    const vm = wrapper.vm as unknown as { status: string; extra: boolean };
    vm.status = 'error';
    vm.extra = true;
    await nextTick();
    expect(navButtonNames(wrapper)).toEqual([', errorTest step 1', 'Extra step']);
    expect(button(wrapper, ', errorTest step 1').classes()).toContain(styles.modifiers.danger);
  });

  it('renders the name, nav-item and body attributes of the steps', () => {
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" :body-attrs="{ noPadding: true, component: 'main' }">
          <template #name><b class="rich-name">Rich</b> name</template>
          Step 1 content
        </pf-wizard-step>
        <pf-wizard-step id="step-2" name="Step 2" :nav-item-attrs="{ content: 'Custom item' }" />
        <pf-wizard-step id="step-3" name="Step 3" :nav-item-attrs="{ component: 'a', href: '#step-3', target: '_blank' }" />
        <pf-wizard-step id="step-4" name="Step 4">
          <template #nav-item="{ step }"><li class="custom-item">{{ step.name }} item</li></template>
        </pf-wizard-step>
      </pf-wizard>`);
    expect(wrapper.findAll('.rich-name')).toHaveLength(2); // nav item and toggle
    expect(button(wrapper, 'Custom item').exists()).toBe(true);
    const link = wrapper.find('a[href="#step-3"]');
    expect(link.attributes('target')).toBe('_blank');
    expect(wrapper.find('.custom-item').text()).toBe('Step 4 item');
    const body = wrapper.find(`.${styles.wizardMain}`);
    expect(body.element.tagName).toBe('MAIN');
    expect(wrapper.find(`.${styles.wizardMainBody}`).classes()).toContain(styles.modifiers.noPadding);
  });

  it('reads steps from render functions without warnings', async () => {
    const warn = vi.spyOn(console, 'warn');
    const wrapper = mount(() =>
      h(PfWizard, null, () => [
        h(PfWizardStep, { id: 'step-1', name: 'Step 1' }, () => 'Step 1 content'),
        h(PfWizardStep, { id: 'step-2', name: 'Step 2', 'footer-attrs': { nextButtonText: 'Finish' } } as any, () => [
          h(PfWizardStep, { id: 'sub-1', name: 'Sub 1', disabled: '' } as any),
          h(PfWizardStep, { id: 'sub-2', name: 'Sub 2' }, () => 'Sub 2 content'),
        ]),
      ]),
    );
    expect(navButtonNames(wrapper)).toEqual(['Step 1', 'Step 2', 'Sub 1', 'Sub 2']);
    expect(button(wrapper, 'Sub 1').attributes('disabled')).toBeDefined();
    await button(wrapper, 'Next').trigger('click');
    expect(wrapper.text()).toContain('Sub 2 content');
    // the footer attributes of the parent step don't apply to its sub-steps
    expect(button(wrapper, 'Next').exists()).toBe(true);
    expect(warn).not.toHaveBeenCalled();
  });

  it('errors on children that are not steps', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const wrapper = mountWizard(`
      <pf-wizard>
        <pf-wizard-step id="step-1" name="Test step 1" />
        <div>Not a step</div>
      </pf-wizard>`);
    expect(error).toHaveBeenCalledWith('Wizard only accepts children of type WizardStep.');
    expect(navButtonNames(wrapper)).toEqual(['Test step 1']);
  });

  describe('toggle', () => {
    it('shows the active step and expands the navigation, collapsing it with Escape', async () => {
      const wrapper = mountWizard(`
        <pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1" />
          <pf-wizard-step id="step-2" name="Test step 2">
            <pf-wizard-step id="sub-1" name="Sub step 1" />
          </pf-wizard-step>
        </pf-wizard>`);
      const toggle = () => wrapper.find(`.${styles.wizardToggle}`);
      expect(toggle().attributes('aria-label')).toBe('Wizard toggle');
      expect(toggle().find(`.${styles.wizardToggleNum}`).text()).toBe('1');
      expect(toggle().find(`.${styles.wizardToggleList}`).text()).toContain('Test step 1');
      expect(toggle().attributes('aria-expanded')).toBe('false');

      await toggle().trigger('click');
      expect(toggle().attributes('aria-expanded')).toBe('true');
      expect(toggle().classes()).toContain(styles.modifiers.expanded);
      expect(wrapper.find('nav').classes()).toContain(styles.modifiers.expanded);

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await nextTick();
      expect(toggle().attributes('aria-expanded')).toBe('false');
      expect(toggle().classes()).not.toContain(styles.modifiers.expanded);

      await button(wrapper, 'Next').trigger('click');
      const items = toggle().findAll(`.${styles.wizardToggleListItem}`);
      expect(toggle().find(`.${styles.wizardToggleNum}`).text()).toBe('2');
      expect(items[0]!.text()).toContain('Test step 2');
      expect(items[0]!.find(`.${styles.wizardToggleSeparator}`).exists()).toBe(true);
      expect(items[1]!.text()).toBe('Sub step 1');
    });

    it('shows the status of the active step', () => {
      const wrapper = mountWizard(`
        <pf-wizard toggle-aria-label="Some label">
          <pf-wizard-step id="step-1" name="Test step 1" status="error" />
        </pf-wizard>`);
      const toggle = wrapper.find(`.${styles.wizardToggle}`);
      expect(toggle.attributes('aria-label')).toBe('Some label');
      expect(toggle.find(`.${styles.wizardToggleListItem}`).classes()).toContain(styles.modifiers.danger);
      expect(toggle.find(`.${styles.wizardToggleStatusIcon}`).exists()).toBe(true);
      expect(toggle.find(`.${styles.wizardToggleNum}`).exists()).toBe(false);
    });
  });

  describe('context', () => {
    it('gives the step content access to the wizard state and navigation', async () => {
      const StepContent = defineComponent({
        setup() {
          const { activeStep, goToNextStep, goToStepById, goToStepByName, getStep, steps } = useWizardContext();
          return () =>
            h('div', [
              h('span', { class: 'active' }, `${activeStep.value?.name} of ${steps.value.length}`),
              h('span', { class: 'visited' }, String(getStep('step-2')?.visited ?? false)),
              h('button', { class: 'ctx-next', onClick: goToNextStep }),
              h('button', { class: 'ctx-by-id', onClick: () => goToStepById('step-3') }),
              h('button', { class: 'ctx-by-name', onClick: () => goToStepByName('Test step 1') }),
            ]);
        },
      });
      const wrapper = mountWizard(
        `<pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1"><step-content /></pf-wizard-step>
          <pf-wizard-step id="step-2" name="Test step 2"><step-content /></pf-wizard-step>
          <pf-wizard-step id="step-3" name="Test step 3"><step-content /></pf-wizard-step>
        </pf-wizard>`,
        undefined,
        { StepContent },
      );
      expect(wrapper.find('.active').text()).toBe('Test step 1 of 3');
      expect(wrapper.find('.visited').text()).toBe('false');
      await wrapper.find('.ctx-next').trigger('click');
      expect(wrapper.find('.active').text()).toBe('Test step 2 of 3');
      expect(wrapper.find('.visited').text()).toBe('true');
      await wrapper.find('.ctx-by-id').trigger('click');
      expect(wrapper.find('.active').text()).toBe('Test step 3 of 3');
      await wrapper.find('.ctx-by-name').trigger('click');
      expect(wrapper.find('.active').text()).toBe('Test step 1 of 3');
    });

    it('throws outside of a wizard', () => {
      const Outside = defineComponent({
        setup() {
          useWizardContext();
          return () => null;
        },
      });
      vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(() => mount(Outside)).toThrow('useWizardContext must be used within a pf-wizard');
    });
  });

  describe('step footer', () => {
    it('applies its props to the default footer while it is mounted', async () => {
      const valid = ref(false);
      const onNext = vi.fn();
      const StepContent = defineComponent({
        components: { PfWizardStepFooter },
        setup: () => ({ valid, onNext }),
        template: `<div>With footer<pf-wizard-step-footer next-button-text="Save" :next-disabled="!valid" @next="onNext" /></div>`,
      });
      const wrapper = mountWizard(
        `<pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1"><step-content /></pf-wizard-step>
          <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
        </pf-wizard>`,
        undefined,
        { StepContent },
      );
      await nextTick();
      expect(button(wrapper, 'Save').attributes('disabled')).toBeDefined();
      // the defaults of the wizard are kept
      expect(button(wrapper, 'Back').attributes('disabled')).toBeDefined();
      expect(button(wrapper, 'Cancel').exists()).toBe(true);
      valid.value = true;
      await nextTick();
      expect(button(wrapper, 'Save').attributes('disabled')).toBeUndefined();
      await button(wrapper, 'Save').trigger('click');
      expect(onNext).toHaveBeenCalledOnce();
      expect(wrapper.find(`.${styles.wizardMainBody}`).text()).toBe('With footer');

      await button(wrapper, 'Test step 2').trigger('click');
      expect(wrapper.text()).not.toContain('Save');
      expect(button(wrapper, 'Next').exists()).toBe(true);
    });

    it('replaces the whole footer with its slot', async () => {
      const label = ref('Custom next');
      const onClose = vi.fn();
      const wrapper = mountWizard(
        `<pf-wizard @close="onClose">
          <pf-wizard-step id="step-1" name="Test step 1">
            Step 1 content
            <pf-wizard-step-footer v-slot="{ activeStep, goToNextStep, close }">
              <div class="step-footer-content">
                <span class="step-footer-name">{{ activeStep.name }}</span>
                <button @click="goToNextStep">{{ label }}</button>
                <button @click="close">Custom close</button>
              </div>
            </pf-wizard-step-footer>
          </pf-wizard-step>
          <pf-wizard-step id="step-2" name="Test step 2">Step 2 content</pf-wizard-step>
        </pf-wizard>`,
        () => ({ label, onClose }),
      );
      await nextTick();
      expect(wrapper.find(`.${styles.wizardMainBody} .step-footer-content`).exists()).toBe(false);
      expect(wrapper.find(`footer.${styles.wizardFooter} > .step-footer-content`).exists()).toBe(true);
      expect(wrapper.find('.step-footer-name').text()).toBe('Test step 1');
      expect(wrapper.findAll('button').some(b => b.text() === 'Next')).toBe(false);
      label.value = 'Changed next';
      await nextTick();
      await button(wrapper, 'Custom close').trigger('click');
      expect(onClose).toHaveBeenCalledOnce();
      await button(wrapper, 'Changed next').trigger('click');
      expect(wrapper.find(`.${styles.wizardMainBody}`).text()).toBe('Step 2 content');
      expect(wrapper.find('.step-footer-content').exists()).toBe(false);
      expect(button(wrapper, 'Next').exists()).toBe(true);
    });

    it('renders its slot as the whole footer when unwrapped', async () => {
      const wrapper = mountWizard(`
        <pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1">
            <pf-wizard-step-footer unwrapped><div class="step-footer-content">Unwrapped</div></pf-wizard-step-footer>
          </pf-wizard-step>
        </pf-wizard>`);
      await nextTick();
      expect(wrapper.find('.step-footer-content').exists()).toBe(true);
      expect(wrapper.find(`.${styles.wizardFooter}`).exists()).toBe(false);
    });

    it("is overridden by the step's footer slot", async () => {
      const wrapper = mountWizard(`
        <pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1">
            <pf-wizard-step-footer next-button-text="Step footer next" />
            <template #footer><div class="step-footer">Step footer</div></template>
          </pf-wizard-step>
        </pf-wizard>`);
      await nextTick();
      expect(wrapper.find('.step-footer').exists()).toBe(true);
      expect(wrapper.text()).not.toContain('Step footer next');
    });

    it('throws outside of a wizard', () => {
      vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(() => mount(PfWizardStepFooter)).toThrow('useWizardContext must be used within a pf-wizard');
    });
  });

  describe('body', () => {
    it('becomes a labelled region when its content overflows', async () => {
      vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(500);
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(100);
      const wrapper = mountWizard(`
        <pf-wizard>
          <pf-wizard-step id="step-1" name="Test step 1">Content</pf-wizard-step>
        </pf-wizard>`);
      await flushPromises();
      const body = wrapper.find(`.${styles.wizardMain}`);
      expect(body.attributes('role')).toBe('region');
      expect(body.attributes('tabindex')).toBe('0');
      expect(body.attributes('aria-label')).toBe('Test step 1 content');
    });

    it('renders its content without aria attributes when it does not overflow', () => {
      const wrapper = mount(PfWizardBody, {
        props: { ariaLabel: 'Label', ariaLabelledby: 'id' },
        attrs: { class: 'custom-class' },
        slots: { default: () => 'content' },
      });
      expect(wrapper.text()).toBe('content');
      expect(wrapper.classes()).toContain('custom-class');
      expect(wrapper.element.tagName).toBe('DIV');
      expect(wrapper.attributes('aria-label')).toBeUndefined();
      expect(wrapper.attributes('aria-labelledby')).toBeUndefined();
      expect(wrapper.find(`.${styles.wizardMainBody}`).classes()).not.toContain(styles.modifiers.noPadding);
    });
  });
});

describe('WizardFooter', () => {
  it('renders Next, Back and Cancel and emits their events', async () => {
    const wrapper = mount(PfWizardFooter, { attrs: { class: 'custom-class' } });
    expect(wrapper.classes()).toEqual([styles.wizardFooter, 'custom-class']);
    await button(wrapper, 'Next').trigger('click');
    await button(wrapper, 'Back').trigger('click');
    await button(wrapper, 'Cancel').trigger('click');
    expect(Object.keys(wrapper.emitted())).toEqual(expect.arrayContaining(['next', 'back', 'close']));
  });

  it('renders custom names, disabled and hidden buttons', () => {
    const wrapper = mount(PfWizardFooter, {
      props: {
        nextButtonText: 'Go!',
        backButtonText: 'Turn around!',
        cancelButtonText: 'Get out!',
        backDisabled: true,
      },
    });
    expect(button(wrapper, 'Go!').exists()).toBe(true);
    expect(button(wrapper, 'Turn around!').attributes('disabled')).toBeDefined();
    expect(button(wrapper, 'Get out!').exists()).toBe(true);

    const hidden = mount(PfWizardFooter, { props: { backHidden: true, cancelHidden: true, nextDisabled: true } });
    expect(hidden.findAll('button')).toHaveLength(1);
    expect(button(hidden, 'Next').attributes('disabled')).toBeDefined();
  });

  it('wraps custom content with the footer wrapper', () => {
    const wrapper = mount(PfWizardFooterWrapper, { slots: { default: () => 'Custom' } });
    expect(wrapper.element.tagName).toBe('FOOTER');
    expect(wrapper.classes()).toEqual([styles.wizardFooter]);
  });
});

describe('WizardHeader', () => {
  it('renders the close button, title and description', async () => {
    const wrapper = mount(PfWizardHeader, {
      props: {
        title: 'Test',
        description: 'test description',
        descriptionId: 'test-id',
        closeButtonAriaLabel: 'Close it',
      },
      attrs: { class: 'custom-class' },
    });
    expect(wrapper.classes()).toContain('custom-class');
    expect(wrapper.find(`.${styles.wizardTitleText}`).text()).toBe('Test');
    const description = wrapper.find(`.${styles.wizardDescription}`);
    expect(description.text()).toBe('test description');
    expect(description.attributes('id')).toBe('test-id');
    expect(description.element.tagName).toBe('DIV');
    await button(wrapper, 'Close it').trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('hides the close button with closeHidden', () => {
    const wrapper = mount(PfWizardHeader, { props: { title: 'Test', closeHidden: true } });
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find(`.${styles.wizardDescription}`).exists()).toBe(false);
  });
});

describe('WizardNav', () => {
  it('renders a nav with attributes and the expanded modifier', () => {
    const wrapper = mount(PfWizardNav, {
      props: { expanded: true },
      attrs: { class: 'custom-class', 'aria-label': 'test aria label', 'aria-labelledby': 'label' },
    });
    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.classes()).toEqual([styles.wizardNav, styles.modifiers.expanded, 'custom-class']);
    expect(wrapper.attributes('aria-label')).toBe('test aria label');
    expect(wrapper.attributes('aria-labelledby')).toBe('label');
    expect(wrapper.find(`ol.${styles.wizardNavList}`).attributes('role')).toBe('list');
  });

  it('renders the inner list only', () => {
    const wrapper = mount(PfWizardNav, { props: { innerList: true } });
    expect(wrapper.element.tagName).toBe('OL');
    expect(wrapper.classes()).toEqual([styles.wizardNavList]);
  });
});

describe('WizardNavItem', () => {
  it('renders the content, current, disabled and id', async () => {
    const wrapper = mount(PfWizardNavItem, {
      props: { content: 'test content', stepIndex: 2, current: true, disabled: true, id: '7' },
      attrs: { class: 'custom-class' },
    });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain('custom-class');
    const link = wrapper.find('button');
    expect(link.text()).toBe('test content');
    expect(link.attributes('id')).toBe('7');
    expect(link.classes()).toEqual(
      expect.arrayContaining([styles.wizardNavLink, styles.modifiers.current, styles.modifiers.disabled]),
    );
    expect(link.attributes('data-ouia-component-type')).toBe('PF/WizardNavItem');
    expect(link.attributes('data-ouia-safe')).toBe('true');
  });

  it('emits click with the step index', async () => {
    const wrapper = mount(PfWizardNavItem, { props: { content: 'Step', stepIndex: 3 } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')![0]![1]).toBe(3);
  });

  it('renders an anchor with href and target, erroring without href', () => {
    const wrapper = mount(PfWizardNavItem, {
      props: {
        content: 'Step',
        stepIndex: 1,
        component: 'a',
        href: 'test-href',
        target: 'test-target',
        disabled: true,
      },
    });
    const link = wrapper.find('a');
    expect(link.attributes('href')).toBe('test-href');
    expect(link.attributes('target')).toBe('test-target');
    expect(link.attributes('tabindex')).toBe('-1');
    expect(link.attributes('disabled')).toBeUndefined();

    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    mount(PfWizardNavItem, { props: { content: 'Step', stepIndex: 1, component: 'a' } });
    expect(error).toHaveBeenCalledWith('WizardNavItem: When using an anchor, please provide an href');
  });

  it('renders an expandable item', () => {
    const wrapper = mount(PfWizardNavItem, { props: { content: 'Step', stepIndex: 1, expandable: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.expandable);
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false');
    expect(wrapper.find(`.${styles.wizardNavLinkToggleIcon}`).exists()).toBe(true);
  });

  it.each([
    ['error', styles.modifiers.danger],
    ['success', styles.modifiers.success],
    ['warning', styles.modifiers.warning],
  ] as const)('renders screen reader text and an icon for the %s status', (status, modifier) => {
    const wrapper = mount(PfWizardNavItem, { props: { content: 'Step', stepIndex: 1, status } });
    expect(wrapper.find('button').classes()).toContain(modifier);
    expect(wrapper.find('.pf-v6-screen-reader').text()).toBe(`, ${status}`);
    expect(wrapper.find(`.${styles.wizardNavLinkStatusIcon} svg`).exists()).toBe(true);
  });
});
