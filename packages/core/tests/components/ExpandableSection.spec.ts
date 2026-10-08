import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
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
    const wrapper = mount(defineComponent({
      components: { PfExpandableSection },
      setup: () => ({ expanded }),
      template: `<pf-expandable-section v-model:expanded="expanded" toggle-text="Toggle">Body</pf-expandable-section>`,
    }));

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
});
