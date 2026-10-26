import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import lineClamp from '@patternfly/react-tokens/dist/esm/c_expandable_section_m_truncate__content_LineClamp';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import PfExpandableSection from '../../src/components/ExpandableSection/ExpandableSection.vue';
import PfExpandableSectionToggle from '../../src/components/ExpandableSection/ExpandableSectionToggle.vue';

function content(wrapper: ReturnType<typeof mount>) {
  return wrapper.find(`.${styles.expandableSectionContent}`);
}

describe('ExpandableSection', () => {
  it('renders collapsed by default with hidden content', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { toggleText: 'Show more' },
      slots: { default: 'Body' },
    });

    const root = wrapper.find(`.${styles.expandableSection}`);
    expect(root.classes()).not.toContain(styles.modifiers.expanded);
    expect(content(wrapper).attributes('hidden')).toBeDefined();
    expect(content(wrapper).attributes('role')).toBe('region');
    expect(content(wrapper).text()).toBe('Body');
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false');
    expect(wrapper.get('button').text()).toBe('Show more');
  });

  it('toggles open and closed on click and emits update:expanded', async () => {
    const wrapper = mount(PfExpandableSection, {
      props: { toggleText: 'Toggle' },
      slots: { default: 'Body' },
    });
    const button = wrapper.get('button');

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.find(`.${styles.expandableSection}`).classes()).toContain(styles.modifiers.expanded);
    expect(content(wrapper).attributes('hidden')).toBeUndefined();

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
    expect(content(wrapper).attributes('hidden')).toBeDefined();
  });

  it('updates aria-expanded on the toggle button', async () => {
    const wrapper = mount(PfExpandableSection, { props: { toggleText: 'Toggle' } });
    await wrapper.get('button').trigger('click');
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
  });

  it('reflects the expanded prop', async () => {
    const wrapper = mount(PfExpandableSection, {
      props: { expanded: true, toggleText: 'Toggle' },
      slots: { default: 'Body' },
    });
    expect(wrapper.get(`.${styles.expandableSection}`).classes()).toContain(styles.modifiers.expanded);
    expect(content(wrapper).attributes('hidden')).toBeUndefined();

    await wrapper.setProps({ expanded: false });
    expect(wrapper.get(`.${styles.expandableSection}`).classes()).not.toContain(styles.modifiers.expanded);
    expect(content(wrapper).attributes('hidden')).toBeDefined();
  });

  it('supports v-model:expanded', async () => {
    const expanded = ref(false);
    const wrapper = mount(
      defineComponent({
        components: { PfExpandableSection },
        setup: () => ({ expanded }),
        template:
          '<pf-expandable-section v-model:expanded="expanded" toggle-text="Toggle">Body</pf-expandable-section>',
      }),
    );

    await wrapper.get('button').trigger('click');
    expect(expanded.value).toBe(true);

    expanded.value = false;
    await nextTick();
    expect(wrapper.get(`.${styles.expandableSectionContent}`).attributes('hidden')).toBeDefined();
  });

  it('uses toggleTextExpanded / toggleTextCollapsed depending on state', async () => {
    const wrapper = mount(PfExpandableSection, {
      props: { toggleTextExpanded: 'Show less', toggleTextCollapsed: 'Show more' },
    });
    expect(wrapper.get('button').text()).toBe('Show more');
    await wrapper.get('button').trigger('click');
    expect(wrapper.get('button').text()).toBe('Show less');
  });

  it('renders the toggle-text slot', () => {
    const wrapper = mount(PfExpandableSection, {
      slots: { 'toggle-text': '<strong>Custom</strong>' },
    });
    expect(wrapper.get('button strong').text()).toBe('Custom');
  });

  it('links the toggle to the content with aria-controls', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { contentId: 'my-content', toggleText: 'Toggle' },
    });
    expect(content(wrapper).attributes('id')).toBe('my-content');
    expect(wrapper.get('button').attributes('aria-controls')).toBe('my-content');
  });

  it('links the toggle to the content even without an explicit contentId', () => {
    const wrapper = mount(PfExpandableSection, { props: { toggleText: 'Toggle' } });
    const id = content(wrapper).attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.get('button').attributes('aria-controls')).toBe(id);
  });

  it('uses the angle-down icon for the toggle', () => {
    const wrapper = mount(PfExpandableSection, { props: { toggleText: 'Toggle' } });
    const icon = wrapper.get(`.${styles.expandableSectionToggleIcon}`);
    expect(icon.findComponent(PfAngleDownIcon).exists()).toBe(true);
    expect(wrapper.findComponent(PfAngleRightIcon).exists()).toBe(false);
  });

  it('does not render the attached toggle when detached', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { detached: true, toggleText: 'Toggle' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('button').exists()).toBe(false);
    expect(content(wrapper).exists()).toBe(true);
  });

  it('applies display and width modifiers', () => {
    const wrapper = mount(PfExpandableSection, { props: { large: true, widthLimited: true } });
    const root = wrapper.get(`.${styles.expandableSection}`);
    expect(root.classes()).toContain(styles.modifiers.displayLg);
    expect(root.classes()).toContain(styles.modifiers.limitWidth);
  });

  it('keeps truncated content visible and places the toggle after it', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { truncate: 2, toggleText: 'Toggle' },
      slots: { default: 'Body' },
    });
    const root = wrapper.get(`.${styles.expandableSection}`);
    expect(root.classes()).toContain(styles.modifiers.truncate);
    expect(content(wrapper).attributes('hidden')).toBeUndefined();
    expect(wrapper.find(`.${styles.expandableSectionToggleIcon}`).exists()).toBe(false);
    const children = root.element.children;
    expect(children[0].classList.contains(styles.expandableSectionContent)).toBe(true);
  });

  it('puts the toggle icon in the button icon wrapper and the text in the button text', () => {
    const wrapper = mount(PfExpandableSection, { props: { toggleText: 'Show More' } });
    const [icon, text] = wrapper.get('button').element.children;
    expect([...icon.classList]).toEqual([buttonStyles.buttonIcon, buttonStyles.modifiers.start]);
    expect(icon.children[0].className).toBe(styles.expandableSectionToggleIcon);
    expect(text.className).toBe(buttonStyles.buttonText);
    expect(text.textContent?.trim()).toBe('Show More');
  });

  it('renders only the icon without toggle text', () => {
    const wrapper = mount(PfExpandableSection);
    const button = wrapper.get('button');
    expect(button.find(`.${buttonStyles.buttonText}`).exists()).toBe(false);
    expect(button.get(`.${buttonStyles.buttonIcon}`).classes()).not.toContain(buttonStyles.modifiers.start);
  });

  it('labels the content with the toggle id', () => {
    const wrapper = mount(PfExpandableSection, { props: { contentId: 'content-id', toggleId: 'toggle-id' } });
    expect(wrapper.get('button').attributes('id')).toBe('toggle-id');
    expect(wrapper.get('button').attributes('aria-controls')).toBe('content-id');
    expect(content(wrapper).attributes('aria-labelledby')).toBe('toggle-id');
  });

  it('labels the content with a generated toggle id', () => {
    const wrapper = mount(PfExpandableSection);
    const id = wrapper.get('button').attributes('id');
    expect(id).toBeTruthy();
    expect(content(wrapper).attributes('aria-labelledby')).toBe(id);
  });

  it('applies the indented modifier', () => {
    const wrapper = mount(PfExpandableSection, { props: { indented: true, expanded: true } });
    expect(wrapper.get(`.${styles.expandableSection}`).classes()).toContain(styles.modifiers.indented);
  });

  it('only applies direction modifiers when detached', () => {
    const plain = mount(PfExpandableSection, { props: { direction: 'up' } });
    expect(plain.get(`.${styles.expandableSection}`).classes()).not.toContain(styles.modifiers.expandTop);

    const noDirection = mount(PfExpandableSection, { props: { detached: true, toggleId: 't' } });
    const noDirectionClasses = noDirection.get(`.${styles.expandableSection}`).classes();
    expect(noDirectionClasses).not.toContain(styles.modifiers.expandTop);
    expect(noDirectionClasses).not.toContain(styles.modifiers.expandBottom);
    expect(noDirectionClasses).not.toContain('pf-m-detached');
  });

  it.each([
    ['up', styles.modifiers.expandTop],
    ['down', styles.modifiers.expandBottom],
  ] as const)('applies the %s direction and detached modifiers when detached', (direction, modifier) => {
    const wrapper = mount(PfExpandableSection, { props: { detached: true, toggleId: 't', direction } });
    const classes = wrapper.get(`.${styles.expandableSection}`).classes();
    expect(classes).toContain(modifier);
    expect(classes).toContain('pf-m-detached');
  });

  it('warns when detached without a toggleId', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    mount(PfExpandableSection, { props: { detached: true } });
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('toggleId value must be passed in'));
    warn.mockClear();
    mount(PfExpandableSection, { props: { detached: true, toggleId: 't' } });
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('forwards toggleAttrs to the toggle button', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { toggleAttrs: { 'aria-label': 'Test label', 'aria-labelledby': 'other' } },
    });
    expect(wrapper.get('button').attributes('aria-label')).toBe('Test label');
    expect(wrapper.get('button').attributes('aria-labelledby')).toBe('other');
  });

  it('passes the expanded state to the toggle-text slot', async () => {
    const wrapper = mount(PfExpandableSection, {
      slots: { 'toggle-text': ({ expanded }: { expanded: boolean }) => (expanded ? 'Hide details' : 'Show details') },
    });
    expect(wrapper.get('button').text()).toBe('Show details');
    await wrapper.get('button').trigger('click');
    expect(wrapper.get('button').text()).toBe('Hide details');
  });

  it('wraps the toggle in a div by default or in the given heading', () => {
    expect(mount(PfExpandableSection).get('button').element.parentElement?.tagName).toBe('DIV');
    const wrapper = mount(PfExpandableSection, { props: { toggleWrapper: 'h2' } });
    const heading = wrapper.get('h2');
    expect(heading.classes()).toContain(`${styles.expandableSection}__toggle`);
    expect(heading.find('button').exists()).toBe(true);
  });

  it('renders a custom toggle icon', () => {
    const wrapper = mount(PfExpandableSection, { slots: { 'toggle-icon': () => h(BellIcon) } });
    const icon = wrapper.get(`.${styles.expandableSectionToggleIcon}`);
    expect(icon.findComponent(BellIcon).exists()).toBe(true);
    expect(icon.findComponent(PfAngleDownIcon).exists()).toBe(false);
  });

  it('does not render the toggle icon with noToggleIcon', () => {
    const wrapper = mount(PfExpandableSection, {
      props: { noToggleIcon: true, toggleText: 'Toggle' },
      slots: { 'toggle-icon': () => h(BellIcon) },
    });
    expect(wrapper.find(`.${styles.expandableSectionToggleIcon}`).exists()).toBe(false);
    expect(wrapper.findComponent(BellIcon).exists()).toBe(false);
  });

  it('truncates to the default lines with truncate=true', () => {
    const wrapper = mount(PfExpandableSection, { props: { truncate: true }, slots: { default: 'Body' } });
    expect(wrapper.get(`.${styles.expandableSection}`).classes()).toContain(styles.modifiers.truncate);
    expect((content(wrapper).element as HTMLElement).style.getPropertyValue(lineClamp.name)).toBe('');
  });

  it('does not truncate by default', () => {
    const wrapper = mount(PfExpandableSection, { slots: { default: 'Body' } });
    expect(wrapper.get(`.${styles.expandableSection}`).classes()).not.toContain(styles.modifiers.truncate);
  });

  it('rechecks the toggle visibility when the truncated content changes', async () => {
    const text = ref('short');
    const wrapper = mount(
      defineComponent({
        components: { PfExpandableSection },
        setup: () => ({ text }),
        template: '<pf-expandable-section :truncate="2" toggle-text="Toggle">{{ text }}</pf-expandable-section>',
      }),
      { attachTo: document.body },
    );
    const el = wrapper.get(`.${styles.expandableSectionContent}`).element as HTMLElement;
    let height = 20;
    Object.defineProperty(el, 'scrollHeight', { get: () => height });
    el.style.lineHeight = '20px';

    text.value = 'still short';
    await nextTick();
    await nextTick();
    expect(wrapper.find('button').exists()).toBe(false);

    height = 100;
    text.value = 'long';
    await nextTick();
    await nextTick();
    expect(wrapper.find('button').exists()).toBe(true);
    wrapper.unmount();
  });

  it('defaults ouiaSafe to true', () => {
    const wrapper = mount(PfExpandableSection, { props: { ouiaId: 'test-id' } });
    const root = wrapper.get(`.${styles.expandableSection}`);
    expect(root.attributes('data-ouia-component-id')).toBe('test-id');
    expect(root.attributes('data-ouia-component-type')).toBe('PF/ExpandableSection');
    expect(root.attributes('data-ouia-safe')).toBe('true');
    expect(
      mount(PfExpandableSection, { props: { ouiaSafe: false } })
        .get(`.${styles.expandableSection}`)
        .attributes('data-ouia-safe'),
    ).toBe('false');
  });

  it('forwards attributes to the root element', () => {
    const wrapper = mount(PfExpandableSection, { attrs: { 'data-test': 'x' } });
    expect(wrapper.get(`.${styles.expandableSection}`).attributes('data-test')).toBe('x');
  });
});

describe('ExpandableSectionToggle', () => {
  it('toggles expanded and references the detached content', async () => {
    const wrapper = mount(PfExpandableSectionToggle, {
      props: { contentId: 'detached-content' },
      slots: { default: 'Toggle' },
    });
    const button = wrapper.get('button');
    expect(button.attributes('aria-controls')).toBe('detached-content');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
  });

  it('sets aria-expanded="true" when expanded', () => {
    const wrapper = mount(PfExpandableSectionToggle, { props: { expanded: true } });
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
  });

  it('uses the angle-down icon and applies expand-top when direction is up', async () => {
    const wrapper = mount(PfExpandableSectionToggle, {
      props: { direction: 'up', expanded: false },
    });
    const icon = wrapper.get(`.${styles.expandableSectionToggleIcon}`);
    expect(icon.findComponent(PfAngleDownIcon).exists()).toBe(true);
    expect(icon.classes()).not.toContain(styles.modifiers.expandTop);

    await wrapper.setProps({ expanded: true });
    expect(wrapper.get(`.${styles.expandableSectionToggleIcon}`).classes()).toContain(styles.modifiers.expandTop);
  });
  it('renders a button without children', () => {
    const wrapper = mount(PfExpandableSectionToggle);
    expect(wrapper.get('button').find(`.${buttonStyles.buttonText}`).exists()).toBe(false);
  });

  it('puts the icon in the button icon wrapper', () => {
    const wrapper = mount(PfExpandableSectionToggle, { slots: { default: 'Toggle test' } });
    const [icon, text] = wrapper.get('button').element.children;
    expect(icon.classList.contains(buttonStyles.buttonIcon)).toBe(true);
    expect(icon.children[0].className).toBe(styles.expandableSectionToggleIcon);
    expect(text.textContent?.trim()).toBe('Toggle test');
  });

  it('sets the toggle id on the button', () => {
    const wrapper = mount(PfExpandableSectionToggle, { props: { toggleId: 'toggle-id' } });
    expect(wrapper.get('button').attributes('id')).toBe('toggle-id');
  });

  it('applies pf-m-detached only when detached', async () => {
    const wrapper = mount(PfExpandableSectionToggle);
    expect(wrapper.classes()).not.toContain('pf-m-detached');
    await wrapper.setProps({ detached: true });
    expect(wrapper.classes()).toContain('pf-m-detached');
  });

  it('forwards toggleAttrs to the button', () => {
    const wrapper = mount(PfExpandableSectionToggle, { props: { toggleAttrs: { 'aria-label': 'Test label' } } });
    expect(wrapper.get('button').attributes('aria-label')).toBe('Test label');
  });

  it('wraps the button in the given toggleWrapper', () => {
    expect(mount(PfExpandableSectionToggle).get('button').element.parentElement?.tagName).toBe('DIV');
    const wrapper = mount(PfExpandableSectionToggle, { props: { toggleWrapper: 'h2' } });
    expect(wrapper.get('h2').find('button').exists()).toBe(true);
  });
});
